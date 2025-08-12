// Array global para armazenar os nomes
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Digite um nome válido!');
    return;
  }

  amigos.push(nome);
  input.value = ''; // limpa o campo
  listarAmigos();   // atualiza o <ul>
  input.focus();
}

function listarAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // limpa antes de recriar

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert('É preciso ter pelo menos dois participantes.');
    return;
  }

  // Cria uma cópia da lista e embaralha
  let sorteio = [...amigos];

  // Embaralhamento Fisher‑Yates
  for (let i = sorteio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
  }

  // Garante que ninguém tire a si mesmo (tenta embaralhar até resolver)
  let tentativas = 0;
  while (sorteio.some((nome, idx) => nome === amigos[idx]) && tentativas < 100) {
    for (let i = sorteio.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
    }
    tentativas++;
  }

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  // Cria os pares: “Fulano → Beltrano”
  amigos.forEach((nome, idx) => {
    const li = document.createElement('li');
    li.textContent = `${nome} → ${sorteio[idx]}`;
    resultado.appendChild(li);
  });
}

// Opcional: função para reiniciar a lista
function reiniciar() {
  amigos = [];
  document.getElementById('listaAmigos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
}
