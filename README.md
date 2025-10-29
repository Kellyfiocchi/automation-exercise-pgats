# 🤖 Automation Exercise - Trabalho Final

**Disciplina:** Automação de Testes na Camada de Interface (WEB)\*\*  
**Professor:** Samuel Lucas\*\*  
**Autora:** Kelly Fiochi\*\*  
**Framework:** Cypress (JavaScript)\*\*  
**Relatórios:** Mochawesome (HTML + JSON)

---

## 📂 Estrutura Modular

Cada funcionalidade (`login`, `signup`, `contact`, `products`, `subscription`, `checkout`) está separada em módulos:

- `index.js` → contém seletores e ações reutilizáveis
- `cy.js` → contém apenas asserts e cenários de teste

---

## 🧩 Casos Implementados

| Caso     | Descrição                                        |
| -------- | ------------------------------------------------ |
| **TC01** | Registrar novo usuário                           |
| **TC02** | Login de usuário com credenciais válidas         |
| **TC03** | Login de usuário com credenciais inválidas       |
| **TC04** | Logout de usuário                                |
| **TC05** | Registrar usuário com e-mail já existente        |
| **TC06** | Formulário “Contact Us”                          |
| **TC08** | Verificar lista de produtos e página de detalhes |
| **TC09** | Pesquisar produto                                |
| **TC10** | Verificar inscrição na página inicial            |
| **TC15** | Realizar pedido: registrar antes do checkout     |

---

## ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Kellyfiocchi/automation-exercise-pgats.git
   cd automation-exercise-pgats
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute os testes em modo interativo:

   ```bash
   npx cypress open
   ```

4. Ou execute os testes em modo headless (terminal):
   ```bash
   npx cypress run --browser chrome --headless
   ```

## 🚀 Integração Contínua (GitHub Actions)

Este projeto utiliza GitHub Actions para execução automática dos testes em cada push ou pull request na branch main.

O workflow realiza as seguintes etapas:

- Instala as dependências (npm install)

- Executa os testes Cypress em modo headless

- Gera e salva o relatório Mochawesome como artefato

## 📄 Arquivo do workflow:

.github/workflows/tests.yml

O relatório HTML pode ser baixado diretamente no GitHub:

Actions → Cypress Tests → Artifacts → cypress-html-report
