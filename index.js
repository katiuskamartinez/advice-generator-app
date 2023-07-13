const $advice = document.getElementById("advice");

async function getData() {
  $datos = "";
  try {
    let res = await fetch("https://api.adviceslip.com/advice"),
      json = await res.json();
    // console.log(res, json);
    $datos = `
                <p>ADVICE # ${json.slip.id} </p> 
                <h1>"${json.slip.advice}"</h1>
                 <img class="svgone" src="./images/pattern-divider-desktop.svg" alt="">
                 <br/>

                <button onclick="getData()" type="button" class="button"><img  class="svgtwo" src="./images/icon-dice.svg" alt=""></button>

                `;
    //manipulación del error /throw manipula el flujo hacia el catch
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    $advice.innerHTML = $datos;
  } catch (err) {
    //console.log(err);
    let message = err.statusText || "ocurrio un eror";
    $advice.innerHTML = `error ${err.status}:${message}`;
  } finally {
  }
}
getData();

/*    <div class="circol"><img  class="svgtwo" src="./images/icon-dice.svg" alt=""></div> */
