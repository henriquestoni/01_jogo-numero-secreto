var chutar = document.querySelector('#chutar');
var reiniciar = document.querySelector('#reiniciar');
var valores = document.querySelector('#valores');
var listaDeNumerosSorteados = [];
var numMin = parseInt(valores.min);
var numMax = parseInt(valores.max);
var tentativas = 1;

document.addEventListener('keypress', function(event){
    if(event.key === 'Enter' && chutar.getAttribute('value') != 1){
        chutar.click();
    }else{
        reiniciar.click();
        valores.onfocus();
    }
});

function limparHTML(texto){
    return texto.replace(/<\/?[^>]+(>|$)/g, "");
}

function falarTexto(texto){
    if('speechSynthesis' in window){
        let utterance = new SpeechSynthesisUtterance(limparHTML(texto));
        utterance.lang = 'pt-BR';
        utterance.rate = 1.4;
        window.speechSynthesis.speak(utterance);
    }else{
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    falarTexto(texto);
}

function botaoChutar(controle){
    let txtLimite = 'Alterar o Limite';
    let txtChutar = 'Chutar';

    if(controle == 1){
        chutar.innerHTML = txtChutar;
        chutar.removeAttribute('value');
    }else if(controle == 2){
        chutar.innerHTML = txtLimite;
        chutar.setAttribute('value', 1);
        reiniciar.removeAttribute('disabled');
     }else{
        chutar.innerHTML = txtLimite;
        chutar.setAttribute('value', 1);
        reiniciar.setAttribute('disabled', true);
     }
}

function exibirMensagemInicial(){ 
    exibirTextoNaTela('#titulo', 'Jogo do número secreto');
    exibirTextoNaTela('#info', `Escolha um número entre ${numMin} e o limite de ${numMax}`);
    botaoChutar(0);
}
exibirMensagemInicial();

function habilitarChute(){
    if(reiniciar.hasAttribute('disabled') && chutar.getAttribute('value') == 1){
        botaoChutar(1);
    }
}

function gerarNumeroAleatorio(limite){
//    return parseInt(Math.random() * limite + 1);
    let numeroEscolhido = Math.floor(Math.random() * limite) + 1;
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNalista >= limite / 2){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(limite);
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
var numeroSecreto = gerarNumeroAleatorio(numMax);

function limparInputs() {
    document.querySelector('input').value = '';
}

function inserirDepois(novo, target){
    target.parentNode.insertBefore(novo, target.nextSibling);
}

function elementoAdicional(target,tipo,id,txt){
    if(target == 'none'){
        if(document.getElementById(id)) document.getElementById(id).remove();
    }else{
        falarTexto(txt);
        if(document.getElementById(id)){
            document.getElementById(id).innerHTML = txt;
        }else{
            let tipoElemento = document.createElement(tipo);
            let txtAux = document.createTextNode(txt);
            tipoElemento.setAttribute("id", id);
            tipoElemento.appendChild(txtAux);
            let targetElemento = document.querySelector(target);
            inserirDepois(tipoElemento, targetElemento);
        }
    }
}

function valorEntrada(txt){
    let testErro = 0;
    while(true){
        testErro++;
        let txtExtra = testErro > 1 ? `\n\nATENÇÃO: esse valor é inválido.\nVocê DEVE escolher um número inteiro maior do que zero.` : "";
        let valor = parseFloat(prompt(txt + txtExtra));
        if(!isNaN(valor) && valor > 0) return valor;
    }
}

function reiniciarJogo(){
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio(numMax);
    limparInputs();
    tentativas = 1;
}

function verificarChute(){
    let chute = parseInt(valores.value);
    
    if(chutar.getAttribute('value') == 1){
        numMax = valorEntrada('Insira um novo valor para limite máximo');
        valores.max = numMax;
        botaoChutar(1);
        listaDeNumerosSorteados = [];
        reiniciarJogo();
    }else{
        if(chute == numeroSecreto){
            elementoAdicional('none','','tentativas','');
            exibirTextoNaTela('#titulo', 'Parabéns!');
            exibirTextoNaTela('#info', `Você descobriu que o ${numeroSecreto} era o número secreto em sua ${tentativas}ª tentativa.<br />Quer jogar novamente?`);
            botaoChutar(2);
        }else if(chute > 0 && chute <= numMax){
            if(chute > numeroSecreto){
                exibirTextoNaTela('#info', `O número secreto é menor do que ${chute}`);
            }else{
                exibirTextoNaTela('#info', `O número secreto é maior do que ${chute}`);
            }
            limparInputs();
            elementoAdicional('#info','span','tentativas',`Tentativa atual: ${tentativas}`);
            tentativas++;
        }else{
            alert(`Insira um número entre ${numMin} e ${numMax}.`);
            limparInputs();
        }
    }
}
