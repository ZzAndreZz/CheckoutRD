let inputCPF = document.getElementById("cpfUsuario");
let inputSenha = document.getElementById("senhaUsuario");
let inputConfirmarSenha = document.getElementById("confirmarSenhaUsuario");
let inputCpfTitular = document.getElementById("cpfDoTitular")
let inputCep = document.getElementById("cepUsuario")
let inputEndereco = document.getElementById("enderecoUsuario");



// validacao cpf
inputCPF.addEventListener("keyup", (event) => {
    //input.CPF.value

    if (isNaN(inputCPF.value)) {
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1))
    }

    if (inputCPF.value.length >= 11) {
        inputCPF.value = inputCPF.value.substring(0,11)
    }
})

// validação
inputConfirmarSenha.addEventListener("keyup", (e)=>{
    
    if(inputConfirmarSenha.value != inputSenha.value){
        inputConfirmarSenha.setAttribute("class", "form-control is-invalid")
    }else{
        inputConfirmarSenha.setAttribute("class", "form-control is-valid")
    }
})

inputCpfTitular.addEventListener("keyup", (event) => {
    //input.CPFTitular.value

    if (isNaN(inputCpfTitular.value)) {
        inputCpfTitular.value = inputCpfTitular.value.substring(0, (inputCpfTitular.value.length - 1))
    }

    if (inputCpfTitular.value.length >= 11) {
        inputCpfTitular.value = inputCpfTitular.value.substring(0,11)
    }
})


inputCep.addEventListener("keyup", (event) => {
    //input.Cep.value

    if (isNaN(inputCep.value)) {
        inputCep.value = inputCep.value.substring(0, (inputCep.value.length - 1))
    }

    if (inputCep.value.length >= 8) {
        inputCep.value = inputCep.value.substring(0,8)
        buscarCep(inputCep.value)
    }

})

function buscarCep(cep){
    fetch (`https://viacep.com.br/ws/${cep}/json/`)
.then((response) => response.json())
.then(dados =>{
if(dados.erro){
    return inputCep.setAttribute('class', 'form-control is-invalid')
}
   inputCep.setAttribute('class', 'form-control is valid')
   inputEndereco.value = dados.logradouro
   inputBairro.value = dados.bairro
   inputCidade.value = dados.localidade
   selectEstado.value = dados.uf
}
}


