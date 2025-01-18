# Jogo do Número Secreto 🕹️

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Finalizado](https://img.shields.io/badge/Status-Finalizado-green)](https://github.com/henriquestoni/01_jogo-numero-secreto)

Este é um jogo simples e divertido onde você precisa adivinhar um número secreto gerado aleatoriamente pelo computador. 🤖

## Descrição 📝

O jogo "Número Secreto" é um desafio de adivinhação onde o jogador precisa descobrir um número aleatório dentro de um determinado intervalo. Com dicas de "maior" ou "menor", o jogador deve usar sua lógica e intuição para encontrar o número secreto no menor número de tentativas possível.

[![Tela principal do aplicativo](https://github.com/user-attachments/assets/58cba98e-4a46-47c7-a39a-eb912a873794)](https://henriquestoni.github.io/01_jogo-numero-secreto/)

## Funcionalidades Principais ✅

*   **Geração de número secreto:** O sistema gera um número aleatório dentro de um intervalo configurável.
*   **Validação da entrada do usuário:** O sistema valida se a entrada do usuário é um número válido dentro do intervalo permitido.
*   **Dicas:** O sistema fornece dicas informando se o número secreto é maior ou menor que o palpite do usuário.
*   **Contagem de tentativas:** O sistema conta o número de tentativas do usuário.
*   **Reiniciar o jogo:** Permite que o usuário reinicie o jogo com um novo número secreto.
*   **Leitura por voz:** O sistema usa a API de Web Speech para ler as mensagens do jogo em voz alta.
*   **Acessibilidade:** O sistema foi projetado com foco em acessibilidade, com interface simples e uso de cores contrastantes.
*   **Alterar Limite:**
    *   O botão "Chutar" se transforma em um botão "Alterar o Limite" antes do jogador dar inicio ao jogo, ou após a descoberta do número secreto.
    *   Ao clicar em "Alterar o Limite", o jogador pode definir um novo limite máximo para o número secreto.
    *   O jogo é reiniciado com o novo limite, permitindo que o jogador personalize o nível de dificuldade.
    *   Após encontrar o número secreto, caso o jogador clique em "Novo Jogo", o jogo será reiniciado mantendo o mesmo nível de dificuldade.

## Estrutura do Código 💻

* `gerarNumeroAleatorio(limite)`: Gera um número aleatório entre 1 e o limite especificado, evitando repetições.
* `exibirTextoNaTela(tag, texto)`: Exibe um texto na tela e usa a API de Web Speech para ler o texto em voz alta.
* `botaoChutar(controle)`: Controla o estado do botão "Chutar", "Alterar Limite" e "Novo Jogo".
* `exibirMensagemInicial()`: Exibe a mensagem inicial na tela.
* `habilitarChute()`: Habilita o botão de chute quando o input recebe foco.
* `limparInputs()`: Limpa o campo de entrada.
* `inserirDepois(novo, target)`: Insere um novo elemento HTML depois de um elemento alvo.
* `elementoAdicional(target, tipo, id, txt)`: Adiciona um elemento HTML à página ou remove um elemento existente.
* `valorEntrada(txt)`: Obtém um valor numérico do usuário através de um prompt.
* `reiniciarJogo()`: Reinicia o jogo.
* `verificarChute()`: Verifica o palpite do usuário e fornece feedback.

## Interface do Usuário 👀

  * Um título principal exibe o nome do jogo: "Jogo do número secreto".
  * Um parágrafo informativo instrui o jogador a escolher um número dentro do intervalo definido.
  * Um campo de entrada numérica permite que o jogador insira seu palpite.
  * Botão "Alterar Limite", disponível antes do usuário colocar o foco no campo input (ou após a descoberta do número secreto), permite que o jogador personalize o nível de dificuldade, definindo um novo limite máximo para o número secreto.
  * Botões "Chutar" e "Novo Jogo" permitem que o jogador envie seu palpite ou reinicie o jogo.

## Fluxo do Jogo ➡️

1.  O sistema gera um número secreto aleatório dentro do intervalo predefinido (inicialmente de 1 a 10).
2.  O jogador insere um palpite no campo de entrada.
3.  O jogador clica no botão "Chutar".
4.  O sistema verifica o palpite e exibe uma mensagem informando se o número secreto é maior ou menor.
5.  O jogador continua inserindo palpites até acertar o número secreto.
6.  O sistema exibe uma mensagem de parabéns e o número de tentativas.
7.  O jogador pode alterar o nível de dificuldade ou reiniciar o jogo e tentar novamente.

## Como Jogar 🤔

1.  Abra o jogo no seu navegador web.
2.  Digite um número no campo de entrada.
3.  Clique no botão "Chutar" para verificar seu palpite.
4.  Continue tentando até adivinhar o número secreto\!

## Como Contribuir 💪

Sinta-se à vontade para contribuir com o projeto\! Você pode:

  * Reportar bugs e problemas encontrados.
  * Sugerir novas funcionalidades e melhorias.
  * Criar pull requests com correções e implementações.

## Deploy 🚀

**Jogue agora mesmo\!** ✨

[Clique aqui para experimentar o Jogo do Número Secreto\!](https://henriquestoni.github.io/01_jogo-numero-secreto/)

## Autor ✒️

  * [Toni Henriques](https://www.linkedin.com/in/henriquestoni/) - [GitHub](https://github.com/henriquestoni)

## Licença 📄

Este projeto está licenciado sob a licença MIT.

## Sobre o Projeto ℹ️

Esse projeto foi desenvolvido como parte do desafio individual da fase de seleção do curso de Iniciante em Programação (Turma G8) do programa Oracle Next Education. O objetivo do desafio era criar um jogo web funcional de adivinhação de números. O projeto está finalizado e atendeu a todos os requisitos do desafio.
