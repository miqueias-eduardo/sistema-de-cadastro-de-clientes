# 🗂 Cadastro de Clientes

Este projeto simples implementa um sistema de cadastro de clientes usando **HTML, CSS e JavaScript (ES Modules)**.  
Aqui explorei manipulação de DOM, validações básicas, modularização e persistência local via `localStorage`.

---

## ✨ Funcionalidades Principais

✅ **Cadastro de cliente**  
- Nome, e-mail, telefone e cidade  
- Todos os campos são obrigatórios (verificação de vazio)  

✅ **Edição de cliente**  
- Clicar em “Editar” abre um modal com os dados já preenchidos  
- Alterações são refletidas no DOM e no `localStorage`  

✅ **Exclusão de cliente**  
- Clicar em “Excluir” remove o cliente da lista e do storage  

✅ **Persistência local**  
- Os clientes permanecem salvos entre recarregamentos da página  
- Uso de JSON + `localStorage`  

✅ **Modal para interações**  
- Modal estilizado para criação / edição  
- Fechar clicando no fundo, no botão “fechar” ou após submissão  

---

## 🛠 Tecnologias Utilizadas

- **HTML5** — estrutura do app (formulário, lista, modal)  
- **CSS3** — estilos, layout responsivo, variáveis CSS  
- **JavaScript (ES6+)** — lógica de negócio, módulos, manipulação de DOM  
- **localStorage** — persistência de dados no navegador  

---

## 🌐 Acesse o projeto no GitHub Pages

🔗 **[Clique aqui para acessar](https://miqueias-eduardo.github.io/sistema-de-cadastro-de-clientes/)**  
> 

---

### 🔍 Detalhes sobre as futuras funcionalidades

- **Validação de formato de e-mail e telefone**: Implementar expressões regulares para garantir que os dados inseridos estejam no formato correto.

- **Mensagens de erro exibidas dentro do modal**: substituir alertas genéricos por mensagens próximas aos campos que falharem, para deixar claro o que deu errado.

- **Testes automatizados com Jest**: Implementar testes para verificar o funcionamento correto das funcionalidades, facilitando a manutenção e evolução do código.