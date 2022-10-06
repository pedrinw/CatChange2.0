let btn = document.querySelector("#botao");
let campo = document.querySelector("#input-texto");
let divPai = document.querySelector("#divPai");
let imgApi = document.querySelector("#imgApi");
let h2 = document.querySelector("#h2");
let figure = document.querySelector("#figure")
let figcaption = document.querySelector("#figure > figcaption")


async function getDados(nomeGato){
    
    const url = `http://34.176.250.192:8080/cat?name=${nomeGato}`;

    try {
        const resultado = await fetch(url)
        
        if(resultado.status === 200){
            const dados = await resultado.json();
            
            figure.style.display = "block";
            h2.style.display = "none";

            imgApi.setAttribute("src", `${dados.url}`)
            imgApi.classList.add("imagem-api")
            
            
            figcaption.textContent = `Nome do gato: ${campo.value}`;
            figcaption.classList.add("figcaption-nome-gato")
            

        }
        else if(resultado.status === 400){
            figure.style.display = "none";
            h2.textContent = "Nenhum gato encontrado"
            h2.style.display = "block";

            h2.classList.add("msg-erro")
            
        }


        

        

    } catch (error) {
        console.log(error)
    }
}






btn.addEventListener("click", (event)=>{
    event.preventDefault();
    getDados(campo.value);
})


