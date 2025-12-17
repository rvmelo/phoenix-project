## Começar

1. Instalar dependências

   ```bash
   npm install
   ```

2. Utilizar a versão 18.20.5 do node, conforme é mostrado no arquivo .nvmrc

3. Criar um arquivo .env e preencher a variável de ambiente BASE_URL com 
a url da api do Nortus. O arquivo .env.example exemplifica esse passo

## Informações sobre o projeto

- Repositório público no github: https://github.com/rvmelo/phoenix-project

- Clickup para criação dos cards: https://app.clickup.com/90132856190/v/f/901315719013

- Deploy em produção no vercel: https://phoenix-project-fbdwep6ms-rvmelos-projects.vercel.app


## Pacotes utilizados 

### tailwindcss

Para gerar toda a estilização. Esse pacote foi instalado como dependência de
desenvolvimento porque toda sua estilização é gerada em tempo de build

### tailwind-merge

Pacote utilizado para evitar conflitos entre classes mutuamente exclusivas. Esse
pacote foi muito utilizado nos componentes de input, que foram reutilizados em
mais de uma tela.

### React Hook Form

Foi utilizado em componentes de input não controlados, para evitar renderizações
desnecessárias. Enquanto o zod foi utilizado para validação de esquemas

### React Query

Esse pacote foi utilizado na tela de gestão de tickets, para cachear os resultados
das requisições ao backend. Melhorando assim, o desempenho da listagem, paginação e filtragem dos dados da lista de tickets

### Zustand

Esse pacote tem a função de ajudar a implementar o estado global da aplicação. Nesse
projeto, ele armazenou dados do usuário logado. Na barra lateral, logo após o usuário
logar, é possível verificar as duas iniciais do seu nome. Esses dados são recuperados
do estado global da aplicação

## Componentes Reutilizáveis

### Inputs

Os inputs foram implementados em duas versões. Uma que já vêm integrada com o
react hook form, para recuperar os seus métodos a partir de um contexto. E outra
versão mais simples, sem o react hook form.

### Skeleton

Também foi implementado o Skeleton para feedback visual, enquanto os dados da
tabela de tickets estão carregando

## Ferramentas de IA

### Cursor

Para esse projeto foi utilizado o Cursor, em conjunto com o chat gpt na versão
5.1

### Forma de utilização

A IA foi utiliza para ajudar na resolução de bugs, para agilizar na escrita de
pequenos trechos de código, que logo em seguida eram resvisados. E também na 
configuraçao de certos pacotes

### Exemplos de prompt

**User**

E @src/pages/tickets/index.tsx:44 de acordo com o tipo de array que tickets é composto, eu preciso que vc me retorne o número de tickets com os estados de 'Aberto', 'Fechado' e 'Em andamento'

**User**

me passe os passos para configurar svg no next12

**User**

@package.json:17-19 essas versões estão compatíveis com o next na versão 12 e react e react dom na versao 18?