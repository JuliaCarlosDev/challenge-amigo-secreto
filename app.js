let amigos = []; // Lista de amigos

function adicionarAmigo() {
    // Pega o nome do campo, tira espaços
    let nomeInput = document.getElementById('amigo');
    let nome = nomeInput.value.trim();

    // Se vazio, avisa e sai
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona na lista e limpa o campo
    amigos.push(nome);
    nomeInput.value = '';

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista

    let listaHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaHTML += `<li>${amigos[i]}</li>`;
    }
    listaAmigos.innerHTML = listaHTML;
}
