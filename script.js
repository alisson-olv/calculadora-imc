const form = document.querySelector('#pacient-form');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const btnClean = document.querySelector('.btn-clean');

form.addEventListener('submit', function capturaDados(e) {
    const alturaUsuario = altura.value / 100;
    const pesoUsuario = peso.value;
    let classificacao;

    // Resultado do cálculo de IMC
    const imc = (pesoUsuario / (alturaUsuario * alturaUsuario));

    // Retorna a classificação com base no cálculo do imc
    if (imc <= 18.4) {
        classificacao = 'abaixo do peso normal';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'com o peso normal, parabéns';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'com excesso de peso';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'com obesidade classe I';
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'com obesidade classe II';
    } else if (imc >= 40) {
        classificacao = 'com obesidade classe III';
    }

    // Ativa a classe d-show que mostra a classificação do IMC
    const resultado = document.querySelector('.resultado-imc');
    resultado.classList.add('d-show');
    resultado.innerHTML = `Olá, atualmente seu IMC é de ${imc.toFixed(1)}. Atualmente você está ${classificacao}.`;

    // Reseta o formulário após ativar a função "calcular"
    form.reset();

    // Tira o padrão de recarregar a página do submit
    e.preventDefault();
})

// Limpa o formulário e também retira a classe d-show que faz mostrar a classficação do IMC
function clearForm() {
    form.reset();
    const resultado = document.querySelector('.resultado-imc');
    resultado.classList.remove('d-show');
}

// Ativa a função clearForm
if (btnClean) {
    btnClean.addEventListener('click', clearForm);
}