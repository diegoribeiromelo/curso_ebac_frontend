const form = document.getElementById("form-comparacao");

let mensagem = document.querySelector(".message-validacao");

function validaForm(numeroA, numeroB){
    if(numeroB>numeroA){
        mensagem.innerText = "O formulario é válido";
        mensagem.style.color = "blue"
        numeroA.value = ""
        numeroB.value = ""

    }else{
        mensagem.innerText = "O formulario é inválido";
        mensagem.style.color = "red"
        numeroA.value = ""
        numeroB.value = ""

    }   
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let numeroA = Number(document.getElementById("numero-a").value);
    let numeroB = Number(document.getElementById("numero-b").value);
    validaForm(numeroA, numeroB);
})