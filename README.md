# diagnosys

#### Membros:
- Mateus Henrique (Fullstack, PO)
- Iago Nathan (Fullstack)
- Filipe Pirola (Back-end)
- Hideki Yoshizane (Front-end)

#### Tecnologias
- Front-end: Vue.js
- Back-end: Node.js/Express
- Banco de Dados: MySQL

#### Objetivo do sistema

DiagnoSys é um sistema que buscar facilitar toda a rotina médica de uma consulta, realização de exames e compra de medicamentos. Através de uma plataforma unificada, que visa centralizar as informações dos pacientes, como histórico médico (consultas, exames realizados, medicamentos controlados), o sistema tem o objetivo de fazer com que consultas médicas sejam cada vez mais eficientes, uma vez que os médicos terão todas as informações de cada paciente em um mesmo lugar.

Além disso, o sistema busca facilitar a realização de exames e compra de medicamentos através do gerenciamento de receitas e pedidos de exames resultantes de uma consulta realizada. O acesso a esses documentos através de um documento de identificação do paciente, tem por objetivo a otimização de tempo do paciente e a redução de imprevistos como por exemplo a perda do pedido impresso.

#### Funcionalidades do sistema:

- Agendamento de consultas e exames médicos
  - Cadastro de pedidos de exame
  - Cadastro de consultas
  - Consulta dos registros cadastrados

- Cadastramento de novos pacientes
  - Gerenciamento dos pacientes cadastrados no sistema
  - Cadastro de novos pacientes
  - Consulta do histórico médico de cada paciente

- Gerenciamento de receitas e pedidos de exames médicos
  - Consulta de pedidos e receitas cadastradas para cada paciente

- Armazenamento do histórico médico dos pacientes
  - Listagem de consultas, exames, medicamentos utilizados por cada paciente

## Sprint Planning I

### Backlog do Produto

 1. Como usuário, eu gostaria de me cadastrar e gerenciar meu cadastro no sistema.
 2. Como usuário, eu gostaria de ver uma página principal com os médicos disponíveis.
 3. Como usuário, eu gostaria de pesquisar um médico.
 4. Como usuário, eu gostaria de armazenar o histórico médico completo de cada paciente, incluindo consultas, exames e medicamentos utilizados.
 5. Como usuário, eu gostaria de consultar os meus registros cadastrados (consultas, exames, medicamentos).
 6. Como usuário, eu gostaria de agendar consultas e exames médicos.
 7. Como usuário, eu gostaria de ver o status da minha receita médica.
 8. Como usuário, eu gostaria de ver informações sobre a minha consulta.
 9. Como médico, eu gostaria de me cadastrar no sistema.
 10. Como médico, eu gostaria de gerenciar meu cadastro no sistema.
 11. Como médico, eu gostaria de cadastrar consultas para os meus pacientes.
 12. Como médico, eu gostaria de cadastrar pedidos de exame para os meus pacientes.
 13. Como médico, eu gostaria de visualizar e gerenciar as receitas e pedidos de exames cadastrados para os meus pacientes.
 14. Como médico, eu gostaria de associar receitas e pedidos de exames às consultas correspondentes.
 15. Como médico, eu gostaria de acessar os dados do paciente.
 16. Como administrador, eu gostaria de excluir um usuário.
 17. Como administrador, eu gostaria de excluir um médico.

### Backlog da Sprint

- História #1: Como usuário, eu gostaria de ver uma página principal com os médicos disponíveis.
    
    **Tarefas e responsáveis**:
    
    1. Criar setup
    2. Criar entidades principais do projeto
    3. Configurar banco de dados MySQL
    4. Criar design de tela inicial no figma
    5. Criar tela inicial no frontend
    6. Implementar funcionalidade de ver os médicos disponíveis na tela inicial no frontend 
    7. Implementar funcionalidade de listar médicos no backend
       
- História #2: Como usuário, eu gostaria de me cadastrar e gerenciar meu cadastro no sistema.
    
    **Tarefas e responsáveis**:
    
    1. Criar tela de cadastro no figma
    2. Criar tela de cadastro no frontend
    3. Implementar funcionalidade de criar usuário no backend
    4. Implementar funcionalidade de deletar usuário no backend
    5. Implementar funcionalidade de ler usuário no backend

- História #3: Como usuário, eu gostaria de pesquisar um médico.
    
    **Tarefas e responsáveis**:
    
    1. Implementar funcionalidade de pesquisar livros no frontend 
    2. Implementar funcionalidade de listar médicos coerentes com a pesquisa no backend

- História #4: Como usuário, eu gostaria de consultar os meus registros cadastrados (consultas, exames, medicamentos).
    
    **Tarefas e responsáveis**:
    
    1. Criar tela de registros no figma
    2. Criar tela de registros no frontend
    3. Implementar funcionalidade de ver os registros cadastrados na tela de registros no frontend 
    4. Implementar funcionalidade de listar os registros cadastrados no backend
      
- História #5: Como médico, eu gostaria de cadastrar consultas para os meus pacientes.
    
    **Tarefas e responsáveis**:
    
    1. Criar tela de cadastro de consulta no figma
    2. Criar tela de cadastro de consulta no frontend
    3. Implementar funcionalidade de cadastrar consulta no backend
    4. Implementar funcionalidade de deletar consulta cadastrada no backend
    5. Implementar funcionalidade de ver consulta cadastrada no backend

- História #6: Como médico, eu gostaria de visualizar e gerenciar as receitas e pedidos de exames cadastrados para os meus pacientes.
    
    **Tarefas e responsáveis**:
    
    1. Implementar funcionalidade de ver os registros cadastrados na tela de registros do usuário no frontend 
    2. Implementar funcionalidade de listar os registros cadastrados do usuário no backend
    3. Implementar funcionalidade de deletar um registro no backend
 
- História #7: Como médico, eu gostaria de acessar os dados do paciente.
    
    **Tarefas e responsáveis**:

    1. Criar tela de pacientes no figma
    2. Criar tela de pacientes no frontend
    3. Implementar funcionalidade de ver os pacientes do médico no frontend 
    4. Implementar funcionalidade de listar os pacientes do médico no backend
 
- História #8: Como administrador, eu gostaria de excluir um usuário.
    
    **Tarefas e responsáveis**:

    1. Criar tela de usuários no figma
    2. Criar tela de usuários no frontend
    3. Implementar funcionalidade de ver todos os usuários no frontend 
    4. Implementar funcionalidade de listar os usuários no backend
    5. Implementar funcionalidade de deletar um usuário no backend
    
