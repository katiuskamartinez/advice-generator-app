const $advicedata = document.getElementById("advicedata");
const $button = document.querySelector(".button");

async function getData() {
  $button.addEventListener("click", async (e) => {
    // console.log("click");

    $datos = "";
    try {
      let res = await fetch("https://api.adviceslip.com/advice"),
        json = await res.json();
      // console.log(res, json);
      $datos = `
                <p>ADVICE # ${json.slip.id} </p> 
                <h1>"${json.slip.advice}"</h1>
                `;
      //manipulación del error /throw manipula el flujo hacia el catch
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      $advicedata.innerHTML = $datos;
    } catch (err) {
      //console.log(err);
      let message = err.statusText || "ocurrio un error";
      $advicedata.innerHTML = `error ${err.status}:${message}`;
    } finally {
    }
  });
}
getData();
