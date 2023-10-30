export async function Img(){
    let resp = await fetch("js/img.json");
    let img = await resp.json();

    let BorderCollie = document.querySelector("#BorderCollie")
    let Agua = document.querySelector("#Agua")

    BorderCollie.src=img.BorderCollie;
    Agua.src=img.Agua;  
}