const endpoint = "https://vanborapp.azurewebsites.net/viagem/percentual"
const endpoint2 = "https://vanborapp.azurewebsites.net/avaliacaoCorrida/estrelas"
const endpoint3 = "https://vanborapp.azurewebsites.net/viagem/passageirosPorFaixa"
const endpoint4 = "https://vanborapp.azurewebsites.net/suporte/percentual"
const endpoint5 = "https://vanborapp.azurewebsites.net/avaliacaoSuporte/estrelas"

var raw = "";

var requestOptions = {
    method: 'GET',
    
    redirect: 'follow'
};
    fetch(endpoint, requestOptions)
        .then(res => res.json())
        .then(res => {
            valores[0] = res.viagemCompartilhada
            valores[1] = res.viagemPrivada
            grafico1.update()
        })
        .catch(erro => {
            console.log("ERRO:" + erro)
        }) 

        fetch(endpoint2, requestOptions)
        .then(res => res.json())
        .then(res => {
            valoresY[0] = res.qtdEstrelas1
            valoresY[1] = res.qtdEstrelas2
            valoresY[2] = res.qtdEstrelas3
            valoresY[3] = res.qtdEstrelas4
            valoresY[4] = res.qtdEstrelas5
            grafico2.update()
        })
        .catch(erro => {
            console.log("ERRO:" + erro)
        })

        fetch(endpoint3, requestOptions)
        .then(res => res.json())
        .then(res => {
            valoresZ[0] = res.menosDe4
            valoresZ[1] = res.entre4e6
            valoresZ[2] = res.entre6e10
            valoresZ[3] = res.maisDe10
            grafico3.update()
        })
        .catch(erro => {
            console.log("ERRO:" + erro)
        }) 

        fetch(endpoint4, requestOptions)
        .then(res => res.json())
        .then(res => {
            valores4[0] = res.resolvidos
            valores4[1] = res.naoResolvidos
            grafico4.update()
        })
        .catch(erro => {
            console.log("ERRO:" + erro)
        })
    


fetch(endpoint5, requestOptions)
    .then(res => res.json())
    .then(res => {
        valores5[0] = res.qtdEstrelas1
        valores5[1] = res.qtdEstrelas2
        valores5[2] = res.qtdEstrelas3
        valores5[3] = res.qtdEstrelas4
        valores5[4] = res.qtdEstrelas5
        grafico5.update()
    })
    .catch(erro => {
        console.log("ERRO:" + erro)
    })


