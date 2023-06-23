# employ-front-end
Sistema de gerenciamento de tarefas com uma autenticação de usuário. É possível criar um usuário e após isso fazer login e gerenciar suas tarefas, como: vizualizá-las, criá-las, deletá-las e atualizá-las.

## Pré-requisitos
Para esse projeto rodar na sua máquina será preciso ter o node instalado nela. Você pode fazer isso por esse link: https://nodejs.org/en/download . Lá escolha o sistema operacional da sua máquina. Após instalá-lo é interessante abrir o terminal e rodar o comando:
```bash
node --version
```
Ele deve mostrar qual a versão instalada na sua máquina.

## Instalação
Após ter o node instalado na sua máquina. Abra o terminal na raiz do diretório do projeto e rode o comando:
```bash
npm i
```
Esse comando irá baixar todas as dependências do projeto. Após ele terminar de baixar todas as dependências, você deve rodar o seguinte comando:
```bash
npm run dev
```
Ele irá criar um servidor local onde a aplicação rodará em cima. A saída desse comando vai ser algo como: localhost/porta.
Você deve copiar isso e colar no seu navegador. Com isso você poderá ver a tela inicial da aplicação.
## Implantação
O sistema está depositado na Vercel, você pode acessá-lo por esse link: https://employ-front-end.vercel.app/index.html . Para essa implantação funcionar foi necessário adicionar os arquivos ```vercel.json``` e ```vite.config.js``` apenas para funcionar na plataforma citada. Não há garantias que vá funcionar em outras plataformas.
## Construído com
● HTML: Linguaguem de Marcação de Hipertexto.
● CSS: Folhas de Estilo em Cascatas.
● JavaScript: Linguaguem de programação com suporte de script para manipulação do DOM.
● JQuery: Biblioteca JavaScript que permite manipular o DOM de forma mais simples.
● Ajax: Nas requisões para comunicação com o servidor.
