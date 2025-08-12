# Amigo Secreto

Este projeto contém um pequeno script em JavaScript para realizar sorteios de Amigo Secreto no navegador. Ele permite adicionar participantes, listar os nomes inseridos, realizar o sorteio de forma que ninguém se tire e reiniciar a lista quando desejar.

## Como usar

1. Crie uma página HTML com:
   - Um campo de texto com `id="amigo"` para digitar os nomes.
   - Uma lista `<ul id="listaAmigos"></ul>` para exibir os participantes.
   - Uma lista `<ul id="resultado"></ul>` para mostrar os pares sorteados.
   - Botões que chamem as funções `adicionarAmigo()`, `sortearAmigo()` e `reiniciar()`.
2. Importe o arquivo [`amigo-secreto.js`](amigo-secreto.js) na página HTML.
3. Abra a página no navegador e siga as instruções na tela.

## Funções disponíveis

- **adicionarAmigo()** – adiciona um novo nome à lista.
- **listarAmigos()** – atualiza a lista de participantes exibida na tela.
- **sortearAmigo()** – realiza o sorteio garantindo que ninguém tire a si mesmo.
- **reiniciar()** – limpa todos os dados para iniciar um novo sorteio.

Divirta-se organizando seu Amigo Secreto!

