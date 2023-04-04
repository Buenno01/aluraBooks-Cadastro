async function buscaEndereco (cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = ""
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error('CEP não existente!')
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
    }
    catch (erro){
        console.log(erro);
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

    // var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    // .then(resposta => resposta.json())
    // .then(r => {
    //     if (r.erro){
    //         throw Error('Esse CEP não existe');
    //     } else
    //     console.log (r);
    // })
    // .catch (erro => console.log(erro))
    // .finally(msg => console.log ('processamento concluído.'));
