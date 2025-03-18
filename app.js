let listaDeAmigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('input');
    if (nomeAmigo.value ==="") {
        alert ("Por favor, insira um nome")
    } else {
       listaDeAmigos.push(nomeAmigo.value);
    };
    nomeAmigo.value = '';
    acrescentarNaLista();
} ;

function acrescentarNaLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
         lista.insertAdjacentElement("beforeend",li);
    }
    console.log(listaDeAmigos)
}

function sortearAmigo(){
    let numeroDoAmigo = parseInt(Math.random() * listaDeAmigos.length);
    let amigoEscolhido = listaDeAmigos[numeroDoAmigo];
    let nomeNaTela = document.getElementById('resultado');
    nomeNaTela.innerHTML = `${amigoEscolhido}`;
   }
   acrescentarNaLista()