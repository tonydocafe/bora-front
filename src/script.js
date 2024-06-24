const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

sim.addEventListener("click", () => {
alert("Fecho então, me avisa a hora que você tiver de boa!");
});


function mousemove(){
    var nao = document.getElementById("nao")

    var largurajanela = window.innerWidth;
    var alturajanela = window.innerHeight;

    var maxx = largurajanela - 800 +"px";
    var maxy = alturajanela - nao.offsetHeight;
    
    var aletoriox = Math.floor(Math.random()* maxx);
    var aletorioy = Math.floor(Math.random()* maxy);


    nao.style.left = aletoriox +"px";
    nao.style.top = aletorioy +"px";
}