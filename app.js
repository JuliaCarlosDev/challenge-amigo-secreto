// Esta linha cria uma lista vazia para armazenar os nomes dos amigos.
let amigos = [];

// Esta função é chamada quando você clica no botão para adicionar um amigo.
function adicionarAmigo() {
    // Aqui, estamos pegando o valor do campo de texto onde você digita o nome do amigo.
    let nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value.trim();

    // Se o campo estiver vazio, mostramos uma mensagem pedindo para inserir um nome.
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adicionamos o nome do amigo à nossa lista de amigos.
    amigos.push(nome);

    // Limpa o campo de texto para que você possa digitar outro nome.
    nomeInput.value = '';

    // Pegamos a lista de amigos que é exibida na página.
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista para evitar que os nomes sejam duplicados.
    listaAmigos.innerHTML = "";

    // Criamos uma lista com todos os amigos adicionados até agora.
    for (let i = 0; i < amigos.length; i++) {
        // Criamos um novo item de lista para cada amigo.
        let itemLista = document.createElement('li');

        // Colocamos o nome do amigo dentro do item de lista.
        itemLista.textContent = amigos[i];

        // Adicionamos o item de lista à nossa lista de amigos na página.
        listaAmigos.appendChild(itemLista);
    }
}

// Esta função é chamada quando você clica no botão para sortear um amigo.
function sortearAmigo() {
    // Verifica se há amigos na lista antes de tentar sortear.
    if (amigos.length === 0) {
        alert('Por favor, adicione amigos antes de sortear.');
        return;
    }

    // Gera um número aleatório entre 0 e o número total de amigos.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Usa o número aleatório para escolher um amigo da lista.
    let amigoSorteado = amigos[indiceAleatorio];

    // Pegamos o elemento da página onde vamos mostrar o resultado.
    let resultadoElement = document.getElementById('resultado');

    // Mostramos o amigo sorteado na página.
    resultadoElement.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}