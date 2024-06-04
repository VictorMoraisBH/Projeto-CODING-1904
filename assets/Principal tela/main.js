// Seleciona os elementos do formulário
const form = document.getElementById('form-anime');
const nomeInput = document.getElementById('nome');
const emailForm = document.getElementById('email');
const telefoneForm = document.getElementById('telefone');
const inputField = document.getElementById('place');
let emailValido = false;
let emailPreenchido = false;

// Capitaliza a primeira letra de cada palavra no campo "nome"
nomeInput.addEventListener('input', function() {
    let valor = this.value;
    let palavras = valor.split(' ');
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > 0) {
            palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
        }
    }
    this.value = palavras.join(' ');
});

// Impede o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
});

// Formata o campo "telefone" automaticamente
telefoneForm.addEventListener('input', function() {
    const valorAtual = this.value;
    const novoValor = formatarTelefone(valorAtual);
    this.value = novoValor;
});

function formatarTelefone(telefone) {
    const numeroLimpo = telefone.replace(/\D/g, '');
    const temNonoDigito = numeroLimpo.length > 10;
    let numeroFormatado = '';

    if (numeroLimpo.length === 0) {
        return '';
    }

    if (temNonoDigito) {
        numeroFormatado = `(${numeroLimpo.substring(0, 2)}`;
        if (numeroLimpo.length > 2) {
            numeroFormatado += `) ${numeroLimpo.substring(2, 3)}`;
        }
        if (numeroLimpo.length > 3) {
            numeroFormatado += ` ${numeroLimpo.substring(3, 7)}`;
        }
        if (numeroLimpo.length > 7) {
            numeroFormatado += `-${numeroLimpo.substring(7, 11)}`;
        }
    } else {
        numeroFormatado = `(${numeroLimpo.substring(0, 2)}`;
        if (numeroLimpo.length > 2) {
            numeroFormatado += `) ${numeroLimpo.substring(2, 6)}`;
        }
        if (numeroLimpo.length > 6) {
            numeroFormatado += `-${numeroLimpo.substring(6, 10)}`;
        }
    }

    return numeroFormatado;
}

// Valida o campo "email"
emailForm.addEventListener('input', function() {
    const email = this.value.trim();
    const mensagemErro = document.getElementById('mensagem-erro-email');

    if (email === '') {
        mensagemErro.textContent = '';
        emailPreenchido = false;
    } else {
        emailPreenchido = true;
    }
});

emailForm.addEventListener('blur', function() {
    const email = this.value.trim();
    const mensagemErro = document.getElementById('mensagem-erro-email');

    if (emailPreenchido) {
        if (validarEmail(email) && validarDominioEmail(email)) {
            mensagemErro.textContent = '';
            emailValido = true;
            this.classList.remove('input-invalid');
        } else {
            mensagemErro.textContent = 'E-mail inválido';
            emailValido = false;
            this.classList.add('input-invalid');
        }
    } else {
        mensagemErro.textContent = '';
        this.classList.remove('input-invalid');
    }
});

// Verifica se o domínio do e-mail é permitido
function validarDominioEmail(email) {
    const dominiosPermitidos = ['@gmail.com', '@hotmail.com', '@outlook.com', '@yahoo.com.br'];
    return dominiosPermitidos.some(dominio => email.endsWith(dominio));
}

// Validação básica de formato de e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Capitaliza a primeira letra do campo "place"
inputField.addEventListener('input', function() {
    let inputValue = this.value;
    if (inputValue.length > 0) {
        this.value = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    }
});

function validarFormulario() {
    const campo1 = document.getElementById('nome');
    const campo2 = document.getElementById('campo2');
    const mensagemErro = document.getElementById('mensagem-erro');

    if (campo1.value.trim() === '' || campo2.value.trim() === '') {
        mensagemErro.textContent = 'Por favor, preencha todos os campos.';
        mensagemErro.style.color = 'red';
    } else {
        mensagemErro.textContent = '';
    }
}