# 🤖 Automation Exercise - Trabalho Final

**Disciplina:** Automação de Testes na Camada de Interface (WEB)  
**Professor:** Samuel Lucas  
**Autora:** Kelly Fiochi  
**Framework:** Cypress (JavaScript)  
**Relatórios:** Mochawesome

---

## 📂 Estrutura Modular

Cada funcionalidade (`login`, `signup`, `contact`, `products`, `subscription`, `checkout`) está separada em módulos:

- `index.js` → contém seletores e ações reutilizáveis
- `cy.js` → contém apenas asserts e cenários de teste

---

## 🧩 Casos Implementados

| Caso     | Descrição                                 |
| -------- | ----------------------------------------- |
| **TC01** | Register User                             |
| **TC02** | Login User (credenciais válidas)          |
| **TC03** | Login User (credenciais inválidas)        |
| **TC04** | Logout User                               |
| **TC05** | Register User com e-mail existente        |
| **TC06** | Contact Us Form                           |
| **TC08** | Verify All Products e Product Detail Page |
| **TC09** | Search Product                            |
| **TC10** | Verify Subscription in Home Page          |
| **TC15** | Place Order: Register before Checkout     |

---

## ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/<seu-usuario>/automation-exercise-test.git
   cd automation-exercise-test
   ```
