# integracaoSQL

Aplicativo mobile em React Native (Expo) para cadastro e visualizacao de produtos e categorias.

O projeto atualmente esta com dados em memoria (mock/local state) e preparado para evolucao com persistencia em SQLite.

## Objetivo

Este app foi desenvolvido como base para uma atividade de integracao com banco local, com foco em:

- Navegacao entre telas com React Navigation
- Fluxo de cadastro e listagem
- Estrutura simples para evoluir para CRUD com SQLite
- Interface com estilo minimalista e padronizado

## Tecnologias

- Expo 54
- React 19
- React Native 0.81
- TypeScript
- React Navigation (Native Stack)
- react-native-element-dropdown

## Estrutura atual

- App.tsx: configuracao do Stack Navigator e tipagem das rotas
- index.ts: ponto de entrada do app
- src/screens/home/index.tsx: tela inicial com atalhos para Produtos e Categorias
- src/screens/produtos/index.tsx: listagem de produtos, busca por nome, controle de quantidade e botao para novo produto
- src/screens/categorias/index.tsx: listagem de categorias com botoes de editar/excluir
- src/screens/criarProduto/index.tsx: formulario para cadastrar produto com dropdown de categoria
- src/screens/criarCategoria/index.tsx: formulario para cadastrar categoria

## Rotas cadastradas

No Stack principal:

- Home
- Produtos
- Categorias
- CriarCategoria
- CriarProduto

## Funcionalidades implementadas hoje

- Navegacao entre todas as telas principais
- Tela Home com acesso rapido a modulos
- Tela Produtos:
  - Busca por nome
  - Lista de produtos mockados
  - Ajuste de quantidade por item
  - Acao visual de adicionar
- Tela Categorias:
  - Lista de categorias mockadas
  - Acoes visuais de editar e excluir
- Formularios:
  - Criar categoria
  - Criar produto com selecao de categoria via dropdown

## Estado atual da persistencia

Atualmente nao ha banco de dados integrado.

- Produtos e categorias sao arrays locais nas telas
- Nao existe salvamento persistente entre execucoes
- Botoes de salvar/editar/excluir ainda nao gravam dados em banco

## Proxima etapa: integracao com SQLite

Como voce comentou, o proximo passo e conectar SQLite para registrar produtos e categorias.

### Sugestao de modelagem inicial

Tabela categorias

- id INTEGER PRIMARY KEY AUTOINCREMENT
- nome TEXT NOT NULL UNIQUE

Tabela produtos

- id INTEGER PRIMARY KEY AUTOINCREMENT
- nome TEXT NOT NULL
- valor_a_vista REAL NOT NULL
- categoria_id INTEGER
- FOREIGN KEY (categoria_id) REFERENCES categorias(id)

### Fluxo sugerido de implementacao

1. Adicionar dependencia SQLite no Expo (preferencialmente expo-sqlite).
2. Criar camada de banco em src/database (conexao, criacao de tabelas, migrations simples).
3. Criar funcoes de repositorio/servico:
   - categorias: create, list, update, delete
   - produtos: create, list, update, delete
4. Substituir arrays mock por leitura real do banco.
5. Conectar formularios de cadastro com INSERT no banco.
6. Atualizar listagens apos insercao/edicao/exclusao.
7. Adicionar validacoes basicas de formulario (campo obrigatorio, valor numerico, etc.).

## Como executar

### Requisitos

- Node.js LTS
- npm
- Expo Go (Android/iOS) ou emulador configurado

### Instalar dependencias

npm install

### Rodar o projeto

npm run start

Opcional:

- npm run android
- npm run ios
- npm run web

## Scripts disponiveis

- start: expo start
- android: expo start --android
- ios: expo start --ios
- web: expo start --web

## Melhorias recomendadas apos SQLite

- Separar tipos em pasta dedicada (ex.: src/types)
- Criar componentes reutilizaveis de UI (botao, input, card)
- Centralizar tema de cores/espacamento
- Adicionar tratamento de erros de banco
- Adicionar testes para regras de validacao e repositorios

## Observacoes

- O design das telas ja esta padronizado em uma linha visual minimalista.
- O projeto esta bem posicionado para evoluir de prototipo para CRUD local com SQLite.
