# Casa do Camarão

A "Casa do Camarão" é uma aplicação web destinada a oferecer um cardápio digital interativo para um restaurante especializado em pratos de camarão. Os usuários podem visualizar pratos disponíveis, registrar-se, fazer login e criar novos pratos se estiverem autenticados.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js
- npm ou yarn
- MySQL ou outro banco de dados compatível

## Instalação

Siga estas etapas para configurar o ambiente de desenvolvimento:

1. Clone o repositório:

```bash
git clone https://github.com/marcelldac/casa-do-camarao
```

2. Instale as dependências:

```bash
npm ci
```

ou

```bash
yarn
```

3. Configure o banco de dados:

   - Crie um banco de dados MySQL.
   - Configure suas credenciais de acesso no arquivo de configuração do banco de dados.

4. Inicie o servidor:

```bash
npm start
```

ou

```bash
yarn start
```

5. Inicie a aplicação:

```bash
npm run dev
```

## Utilização

### Visualizar o Cardápio

- Acesse a página inicial em `http://localhost:3333/`.
- Navegue até a seção "Nosso Cardápio" para ver os pratos disponíveis.

### Registrar-se

- Acesse a página de registro em `http://localhost:3333/register`.
- Preencha o formulário com seu nome de usuário e senha.
- Após o registro, você será redirecionado para a página de login.

### Login

- Acesse a página de login em `http://localhost:3333/login`.
- Insira seu nome de usuário e senha.
- Após o login, você poderá criar novos pratos se tiver permissões de administrador.

### Criar Novo Prato

- Após estar logado, navegue até `http://localhost:3333/create-dish`.
- Preencha o formulário com as informações do novo prato e envie.

## Contribuição

> Caso encontre um problema, crie um issue.
> Caso queira contribuir, faça um pull request.
