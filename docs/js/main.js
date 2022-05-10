const contenedores = document.querySelectorAll(".contenedor");
contenedores.forEach((element)=>{
	element.addEventListener("click", ()=>{
		element.classList.add("contenedor__active")
	})
}) 