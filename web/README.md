📘 Testes Automatizados – WebDojo (Cypress)

Este repositório contém a aplicação WebDojo e sua suíte de testes automatizados desenvolvida em Cypress, garantindo a qualidade e estabilidade das funcionalidades principais.

🚀 Visão Geral

A automação cobre cenários funcionais da aplicação WebDojo utilizando Cypress, explorando boas práticas como organização modular, uso de fixtures, commands e actions.

📂 Estrutura do Projeto (Cypress)

A estrutura da pasta cypress/ segue o seguinte formato:

cypress/
│
├── e2e/                         # Testes end-to-end
│
├── fixtures/                    # Massa de dados e arquivos
│   ├── cep.json
│   ├── consultancy.json
│   └── Document.pdf
│
└── support/
    ├── actions/                 # Ações reutilizáveis (Page Actions)
    │   └── consultancy.actions.js
    │
    ├── commands.js             # Comandos customizados
    ├── e2e.js                  # Executado antes dos testes
    └── utils.js                # Funções utilitárias

🛠️ Instalação

Instale as dependências necessárias do projeto:

npm install

▶️ Executando a Aplicação WebDojo

A aplicação WebDojo está no mesmo repositório.
Para iniciar o ambiente de desenvolvimento:

npm run dev


A aplicação será disponibilizada localmente na porta configurada (geralmente 3000).

🧪 Scripts de Execução dos Testes

Os seguintes scripts estão configurados no package.json:

🔹 Executar todos os testes (modo headless)
npm run test


Configuração de viewport: 1400x900

🔹 Abrir o Cypress em modo interativo (UI)
npm run test:ui

🔹 Executar apenas o teste de Login
npm run test:login

🔹 Executar teste de Login em modo mobile
npm run test:login:mobile


Viewport: 414x896

🧱 Arquitetura dos Testes

Este projeto utiliza uma arquitetura organizada em camadas:

✔️ Testes E2E

Arquivos .cy.js localizados em cypress/e2e.

✔️ Actions (Page Actions)

Padrão de automação que encapsula interações com elementos.
Local: cypress/support/actions/

✔️ Commands

Comandos reutilizáveis registrados no Cypress.
Local: cypress/support/commands.js

✔️ Fixtures

JSON e arquivos usados como massa de dados.
Local: cypress/fixtures/

✔️ Utils

Funções utilitárias que dão suporte aos testes.
Local: cypress/support/utils.js

📄 Boas Práticas Utilizadas

Estrutura modular para facilitar manutenção.

Separação clara entre testes, ações, commands e fixtures.

Reutilização de código para cenários repetitivos.

Massa de dados centralizada em arquivos JSON.

Testes configurados para desktop e mobile.

Padronização de seletores e ações para facilitar escalabilidade.

🧾 Requisitos

Node.js (versão recomendada: LTS)

Cypress (instalado via dependências do projeto)

📚 Contribuindo

Para contribuir:

Crie um branch a partir da main

Desenvolva suas alterações

Abra um Pull Request detalhando as mudanças

Pull requests são bem-vindos!

📌 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.