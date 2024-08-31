# To-Do-List
Criando uma lista de tarefas
 
Objetivo: Desenvolver uma aplicação web simples de lista de tarefas (To-Do List) com funcionalidades básicas de criação, visualização, edição e exclusão de tarefas. A aplicação será dividida em duas partes: Frontend e Backend.

# Visão geral do projeto:
## É um software que ajuda a organizar tarefas a serem cumpridas, tanto a nivel pessoal, quanto a nivel profissional.
## Suas principais funcionalidades é:
   - Criar uma tarefa e adiciona-la a uma lista.
   - Editar uma tarefa já salva na lista.
   - Em caso da tarefa ter sido executada pelo usuário, a mesma pode ser checada na lista, deixando-a com uma aparencia de linha tachada na palavra e uma caixa com o icone cheked.
   - Excluir a tarefa da lista.

# Instruções de configuração e execução: Como instalar as dependências, configurar o ambiente e executar a aplicação.
   - Na página de downloads do Node, baixar e instalar no PC a versão atualizada LTS.
   - Para iniciar o npm, no terminal deve ser escrito o comando npm init, que vem junto com a instalação do Node.js, e fornecer alguns dados para criar um arquivo package.json.
   - Para instalar o express, digite no terminal npm i express para instalar as dependências do express no pacote do projeto, com isso criamos uma pasta node_modules e um arquivo package-lock.json.

# Descrição das tecnologias usadas:
## VS Code - editor de código-fonte de uma ampla gama de linguagens, possui recursos de depuração embutidos e testes.

## Node.js v20.17.0(LTS) - é um motor que roda Javascript baseado no Chrome para rodar uma aplicação localmente. No Node.js temos o:
   - npm para gerenciar os pacotes, frameworks e bibliotecas.
   - Express.js é uma biblioteca para desenvolver aplicações Javascript com o Node.js.

## Git - sistema para controlar as versões dos arquivos desenvolvidos com um histórico, caso haja algum problema voce pode desfazer as alterações e voltar para a versão que estava estáve. Isto é registrado localmente na máquina que se está desenvolvendo.

## Github - é uma plataforma online para armazenar os projetos e suas alterações.

## h2 database - é um sistema de gestão de banco de dados relacional, que servirá para persistir os dados da lista de tarefas.

Requisitos do Projeto
 
Frontend
 
Tecnologias: HTML, CSS, JavaScript.
 
Funcionalidades:
1. Exibir uma lista de tarefas:
   - A interface deve exibir uma lista de todas as tarefas salvas. Cada tarefa deve ser mostrada com seu título e um indicativo se está concluída ou não.
 
2. Formulário para adicionar novas tarefas:
   - Um formulário deve permitir ao usuário adicionar novas tarefas. O formulário deve ter um campo de entrada de texto para o título da tarefa e um botão para submeter a nova tarefa.
 
3. Botão para marcar tarefas como concluídas:
   - Cada tarefa na lista deve ter um botão ou opção para marcar a tarefa como concluída. Tarefas concluídas devem ser claramente indicadas (por exemplo, com um estilo de texto diferente, como riscado).
 
4. Botão para excluir tarefas:
   - Cada tarefa deve ter um botão ou opção para ser excluída da lista.
 
Requisitos Visuais:
1. Interface simples e amigável:
   - A interface deve ser intuitiva e fácil de usar, com botões claros e uma disposição lógica das tarefas.
 
2. Responsiva:
   - A aplicação deve ser responsiva e funcionar bem em dispositivos móveis e desktops, adaptando o layout conforme necessário para manter a usabilidade.
 
Backend
 
Tecnologias: Node.js, Express.js, H2 Database, ORM (Sequelize ou outro de sua escolha).
 
Funcionalidades:
1. API RESTful para gerenciar tarefas (CRUD - Create, Read, Update, Delete):
   - A API deve permitir a criação, leitura, atualização e exclusão de tarefas através de endpoints HTTP.
   - Cada endpoint deve responder com os dados apropriados e códigos de status HTTP, conforme as operações realizadas.
 
2. Persistência de dados no banco H2:
   - As tarefas devem ser persistidas em um banco de dados H2, que é um banco de dados leve, perfeito para desenvolvimento local e testes.
 
3. Validação básica de dados de entrada:
   - A API deve incluir validação de dados para garantir que o título da tarefa não esteja vazio e que outros campos tenham valores aceitáveis.
 
Requisitos de Estrutura:
1. Estruturar o projeto em camadas (controllers, services, models):
   - O projeto deve ser estruturado de forma a separar as responsabilidades.
   - Controllers: Gerenciam as requisições e respostas HTTP.
   - Services: Contêm a lógica de negócio da aplicação.
   - Models: Definem a estrutura dos dados e interagem diretamente com o banco de dados.
 
2. Usar boas práticas de escrita de código:
   - O código deve ser limpo e modular, utilizando boas práticas de desenvolvimento, como nomes de variáveis e funções significativos, e separação de responsabilidades.
 
Controle de Versão e Organização do Código
 
Requisitos de Versionamento:
1. Utilização de Git para controle de versão:
   - Todo o desenvolvimento deve ser feito utilizando Git como sistema de controle de versão.
 
2. Organização em branches:
   - O projeto deve ser organizado em branches claras para facilitar o desenvolvimento e a revisão de código.
   - Branch principal (main ou master): Deve conter a versão estável do código.
   - Branches de desenvolvimento (feature/, bugfix/, etc.): Cada nova funcionalidade ou correção de bug deve ser desenvolvida em uma branch separada. Exemplo: feature/adicionar-tarefa, bugfix/corrigir-botao-excluir.
   - Branch de integração (develop): Pode ser utilizada para integrar e testar o código antes de fundi-lo na branch principal.
 
3. Commits claros e documentados:
   - Cada commit deve ter uma mensagem clara e descritiva, explicando o que foi alterado e por quê.
   - As mensagens de commit devem seguir um padrão consistente, como "[ADD] Adiciona funcionalidade de criação de tarefa" ou "[FIX] Corrige bug no botão de exclusão de tarefas".
 
4. Documentação do Projeto:
   - Incluir um arquivo README.md detalhado na raiz do repositório, contendo:
     - Visão geral do projeto: Descrição do que a aplicação faz e suas principais funcionalidades.
     - Instruções de configuração e execução: Como instalar as dependências, configurar o ambiente e executar a aplicação.
     - Descrição das tecnologias usadas: Breve descrição das tecnologias e bibliotecas utilizadas.
     - Exemplos de uso da API: Exemplos de requisições e respostas para cada endpoint da API.
     - Informações sobre a estrutura do projeto: Explicação sobre como o projeto está estruturado e como as diferentes partes interagem.
