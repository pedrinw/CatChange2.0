let btn = document.querySelector("#botao")
let campo = document.querySelector("#input-texto")
let divPai = document.querySelector("#divPai")


// quando a página for totalmente carregada, o overlay será desabilitado e a página irá aparecer

const overlay = document.querySelector(".overlay")
console.log(overlay)

btn.addEventListener("click", (event)=>{
        event.preventDefault();

        if(campo.value == ''){
            return;
        }
        
        const status = [200, 500, 400];
        const numero = Math.floor(Math.random() * status.length);

        const response = {
            status: status[numero],
            data: {
                name: "Gesomel",
                url: "imagens/image (1).png"
            }
        }; 
        console.log(response)
        
        if(response.status === 200){
                
            let img = document.createElement("img")
            img.setAttribute("src", "imagens/image (1).png")
            img.classList.add("imagem-api")

            divPai.appendChild(img)

            let sectionPai = document.querySelector("#sectionPai")

            let p = document.createElement("p")
            p.classList.add("paragrafo-nome-gato")
            p.textContent = `Nome do gato: ${response.data.name} `
            
            sectionPai.appendChild(p)
        }
        else{
            let h2 = document.createElement("h2")
            h2.textContent = "Nenhum gato encontrado"
            h2.classList.add("msg-erro")
            divPai.appendChild(h2)
            
        }
        


        
        
    
})


