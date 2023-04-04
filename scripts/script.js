async function buscaEndereco (cep){
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error('CEP não existente!')
        }
    }
    catch (erro){
        console.log(erro);
    }
}

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
