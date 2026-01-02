let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let text = document.querySelector(".text");
let input =  document.querySelector(".input");
let btnCg= document.querySelector(".btn-cg")



function random(){
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const color = `rgb(${r}, ${g}, ${b})`;
	text.innerText=color;
	body.style.backgroundColor=color;
}

  
const changer = ()=>{
    random();	
}

btn.addEventListener("click",changer);

btnCg.addEventListener("click",()=>{
	console.log(input.value);
	text.innerText=input.value;
	body.style.backgroundColor=input.value;
})

let mode = document.querySelector(".mode");
let h01 = document.querySelector(".h01");

h01.innerText = "🌙";


mode.addEventListener("click", () => {

  if (h01.innerText === "🌙") {
    h01.innerText = "☀️";
    h01.style.backgroundColor="#7c3aed";
  } else {
    h01.innerText = "🌙";
    h01.style.backgroundColor="#c084fc";
  }

});

