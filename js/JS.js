let inputCPF = document.getElementById("cpfUsuario");
let inputCpfTitular = document.getElementById("cpfTitular");
let inputSenha = document.getElementById("passUsuario");
let inputConfSenha = document.getElementById("confSenhaUsuario");
let inputCEP = document.getElementById("cepUsuario");
let inputCartao = document.getElementById("nmCartao");
let inputEndereco = document.getElementById("endUsuario");
let inputBairro = document.getElementById("bairroUsuario");
let inputCidade = document.getElementById("cidUsuario");
let inputEstado = document.getElementById("estUsuario");


inputCPF.addEventListener('keyup', (event) => {
    if (isNaN(inputCPF.value)) {
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1));
    }
    if (inputCPF.value.length >= 11) {
        inputCPF.value = inputCPF.value.substring(0, 11);
    }
});



inputConfSenha.addEventListener('blur', (e) => {
    if (inputConfSenha.value != inputSenha.value) {
        inputConfSenha.setAttribute('class', 'form-control is-invalid');
    } else
        inputConfSenha.setAttribute('class', 'form-control is-valid');
});




inputCEP.addEventListener('keyup', (event) => {
    if (isNaN(inputCEP.value)) {
        inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length - 1));
    }
    if (inputCEP.value.length >= 8) {
        inputCEP.value = inputCEP.value.substring(0, 8);
        buscarCep(inputCEP.value);
    }
});

function buscarCep(cep) {
    fetch("https://viacep.com.br/ws/" + cep + "/json/") // fetch por padrão utiliza GET
    .then(resposta => resposta.json())
    .then(dados => {
        if(dados.erro) {
            return inputCEP.setAttribute("class", "form-control is-invalid")
        }
        inputCEP.setAttribute("class", "form-control is-valid")
        inputEndereco.value = dados.logradouro
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade
        inputEstado.value = dados.uf
    })
}


inputCartao.addEventListener('blur', (e) => {
    if (isNaN(inputCartao.value)) {
        inputCartao.value = inputCartao.value.substring(0, (inputCartao.value.length - 1));
    }
    if (inputCartao.value.length >= 14) {
        inputCartao.value = inputCartao.value.substring(0, 14)
    }
})

inputCpfTitular.addEventListener('keyup', (event) => {
    if (isNaN(inputCpfTitular.value)) {
        inputCpfTitular.value = inputCpfTitular.value.substring(0, (inputCpfTitular.value.length - 1));
    }
    if (inputCpfTitular.value.length >= 11) {
        inputCpfTitular.value = inputCpfTitular.value.substring(0, 11);
    }
})
