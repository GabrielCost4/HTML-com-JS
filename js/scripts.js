function validarDados() {
    const mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.style.display = 'none';
    mensagemErro.innerHTML = '';

    const data = document.getElementById('inData').value;
    const cliente = document.getElementById('inCli').value.trim();
    const telefone = document.getElementById('inFone').value.trim();
    const email = document.getElementById('inMail').value.trim();
    const produto = document.getElementById('inProd').value.trim();
    const quantidade = document.getElementById('inQtd').value;
    const valorUnitario = document.getElementById('inVal').value;

    let erro = false;

    if (!data) {
        mostrarErro('O campo data não pode estar vazio!');
        erro = true;
    }
    if (cliente.length < 5) {
        mostrarErro('O campo nome do cliente deve ter pelo menos 5 caracteres!');
        erro = true;
    }
    if (telefone.length < 5) {
        mostrarErro('O campo telefone deve ter pelo menos 5 caracteres!');
        erro = true;
    }
    if (email.length < 5) {
        mostrarErro('O campo e-mail não pode estar vazio e deve ter pelo menos 5 caracteres!');
        erro = true;
    }
    if (produto.length < 5) {
        mostrarErro('O campo nome do produto deve ter pelo menos 5 caracteres!');
        erro = true;
    }
    if (quantidade <= 0) {
        mostrarErro('O campo quantidade deve ser positivo!');
        erro = true;
    }
    if (valorUnitario <= 0) {
        mostrarErro('O campo valor unitário deve ser positivo!');
        erro = true;
    }

    if (!erro) {
        console.log('Formulário enviado com sucesso!'); 

    }
}

function mostrarErro(mensagem) {
    const mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.style.display = 'block';
    mensagemErro.innerHTML += mensagem + '<br>';
}

//Atividade 2
function adicionarImagens() {
    const quantidade = document.getElementById('inQtdImg').value;
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; 

    for (let i = 0; i < quantidade; i++) {
        const imagem = document.createElement('img');
        img.src = 'img/logo.png';
        img.className = 'imagens';
        canvas.appendChild(img);
    }
}

//Atividade 3

function acenderLampada() {
    
        let acender = document.getElementById('lampada');
        let troca = acender.src; 
        let apagar = troca.substring(troca.lastIndexOf('/')+1);
        let botaoEnviar = document.getElementById("btnAcender");
     
        if (apagar == 'acesa.jpg' || apagar == '') {
            acender.src = 'img/apagada.jpg';
            botaoEnviar.textContent = 'Acender';
        } else {
            acender.src = 'img/acesa.jpg';
            botaoEnviar.textContent = 'Apagar';
        }
    }

 //Atividade 4

 function calcularDesconto() {
    const valorPedido = parseFloat(document.getElementById('inValorPedido').value);
    let percentualDesconto = 0;

    if (valorPedido >= 2000) {
        percentualDesconto = 1.5;
    } else if (valorPedido >= 1500) {
        percentualDesconto = 1.0;
    } else if (valorPedido >= 1000) {
        percentualDesconto = 0.8;
    } else if (valorPedido >= 500) {
        percentualDesconto = 0.5;
    }

    const valorDesconto = (percentualDesconto / 100) * valorPedido;
    const valorLiquido = valorPedido - valorDesconto;

    const resultadoDiv = document.getElementById('inValFinal');
    resultadoDiv.innerHTML = `
        Percentual de Desconto: ${percentualDesconto}
        Valor do Desconto: R$ ${valorDesconto.toFixed(2)} 
        Valor Líquido do Pedido: R$ ${valorLiquido.toFixed(2)}
    `;
}






        

    
