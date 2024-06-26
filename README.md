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

 1. Como usuário, eu gostaria de me cadastrar no sistema.
 2. Como usuário, eu gostaria de gerenciar meu cadastro no sistema.
 3. Como usuário, eu gostaria de ver uma página principal com os médicos disponíveis.
 4. Como usuário, eu gostaria de pesquisar um médico.
 5. Como usuário, eu gostaria de armazenar o histórico médico completo de cada paciente, incluindo consultas, exames e medicamentos utilizados.
 6. Como usuário, eu gostaria de consultar os meus registros cadastrados (consultas, exames, medicamentos).
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
 18. Como administrador, eu gostaria de gerenciar um usuário.
 19. Como administrador, eu gostaria de gerenciar um médico.
 20. Como administrador, eu gostaria de visualizar um usuário.
 21. Como administrador, eu gostaria de visualizar um médico.

### Backlog da Sprint

- História #1: Como usuário, eu gostaria de ver uma página principal com os médicos disponíveis.
    
    **Tarefas e responsáveis**:
    
    1. Criar setup [Mateus]
    2. Criar entidades principais do projeto [Mateus]
    3. Configurar banco de dados MySQL [Mateus]
    4. Criar design de tela inicial no figma [Hideki]
    5. Criar tela inicial no frontend [Mateus]
    6. Implementar funcionalidade de ver os médicos disponíveis na tela inicial no frontend [Hideki]
    7. Implementar funcionalidade de listar médicos no backend [Iago]
       
- História #2: Como usuário, eu gostaria de me cadastrar e gerenciar meu cadastro no sistema.
    
    **Tarefas e responsáveis**:
    
    1. Criar tela de cadastro no figma [Hideki]
    2. Criar tela de cadastro no frontend [Hideki]
    3. Implementar funcionalidade de criar usuário no backend [Filipe]
    4. Implementar funcionalidade de deletar usuário no backend [Filipe]
    5. Implementar funcionalidade de ler usuário no backend [Filipe]

- História #3: Como usuário, eu gostaria de pesquisar um médico.
    
    **Tarefas e responsáveis**:
    
    1. Implementar funcionalidade de pesquisar médicos no frontend [Iago]
    2. Implementar funcionalidade de listar médicos coerentes com a pesquisa no backend [Iago]

- História #4: Como usuário, eu gostaria de consultar os meus registros cadastrados (consultas, exames, medicamentos).
    
    **Tarefas e responsáveis**:
    
    1. Criar tela de registros no figma [Hideki]
    2. Criar tela de registros no frontend [Hideki]
    3. Implementar funcionalidade de ver os registros cadastrados na tela de registros no frontend [Iago]
    4. Implementar funcionalidade de listar os registros cadastrados no backend [Filipe]
      
- História #5: Como médico, eu gostaria de cadastrar consultas para os meus pacientes.
    
    **Tarefas e responsáveis**:
    
    1. Criar tela de cadastro de consulta no figma [Hideki]
    2. Criar tela de cadastro de consulta no frontend [Hideki]
    3. Implementar funcionalidade de cadastrar consulta no backend [Iago]
    4. Implementar funcionalidade de deletar consulta cadastrada no backend [Iago]
    5. Implementar funcionalidade de ver consulta cadastrada no backend [Iago]

- História #6: Como médico, eu gostaria de visualizar e gerenciar as receitas e pedidos de exames cadastrados para os meus pacientes.
    
    **Tarefas e responsáveis**:
    
    1. Implementar funcionalidade de ver os registros cadastrados na tela de registros do usuário no frontend [Mateus]
    2. Implementar funcionalidade de listar os registros cadastrados do usuário no backend [Filipe]
    3. Implementar funcionalidade de deletar um registro no backend [Filipe]
 
- História #7: Como médico, eu gostaria de acessar os dados do paciente.
    
    **Tarefas e responsáveis**:

    1. Criar tela de pacientes no figma [Hideki]
    2. Criar tela de pacientes no frontend [Mateus]
    3. Implementar funcionalidade de ver os pacientes do médico no frontend [Iago]
    4. Implementar funcionalidade de listar os pacientes do médico no backend [Filipe]
 
- História #8: Como administrador, eu gostaria de excluir um usuário.
    
    **Tarefas e responsáveis**:

    1. Criar tela de usuários no figma [Hideki]
    2. Criar tela de usuários no frontend [Mateus]
    3. Implementar funcionalidade de ver todos os usuários no frontend [Iago]
    4. Implementar funcionalidade de listar os usuários no backend [Iago]
    5. Implementar funcionalidade de deletar um usuário no backend [Iago]

### Backlog da Sprint - REVISADO

- História Revisada #1: Como usuário, eu gostaria de ver uma página principal com os médicos disponíveis.
    
    **Tarefas e responsáveis**:
    
    1. Criar setup [Mateus]
    2. Criar entidades principais do projeto [Mateus]
    3. Configurar banco de dados MySQL [Mateus]
    4. Criar design de tela inicial no figma [Hideki]
    5. Criar tela inicial no frontend [Filipe]
    6. Implementar funcionalidade de ver os médicos disponíveis na tela inicial no frontend [Filipe]
    7. Implementar funcionalidade de listar médicos no backend [Filipe]

 (A antiga história 2, foi dividida entre as histórias 2, 3 e 4, visto que percebemos que o usuário precisava conseguir entrar no sistema e não poder excluir sua conta e sim alterar seus dados)
 
- História Revisada #2: Como usuário, eu gostaria de me cadastrar no sistema.

    **Tarefas e responsáveis**:
    
    1. Criar tela de cadastro no figma [Hideki]
    2. Criar tela de cadastro no frontend [Mateus]
    3. Implementar funcionalidade de criar usuário no backend [Filipe]
    4. Implementar funcionalidade de ler usuário no backend [Filipe]

- História Adicionada #3: Como usuário, eu gostaria gerenciar meu cadastro no sistema.

    **Tarefas e responsáveis**:
    
    1. Criar tela de perfil no frontend [Mateus]
    2. Implementar funcionalidade de listar os dados do usuário no backend [Filipe]
    3. Implementar funcionalidade de alterar os dados usuário no backend [Filipe]
    4. Implementar uma verificação para os dados alterados [Mateus]

- História Adicionada #4: Como usuário, eu gostaria de entrar no sistema.

    **Tarefas e responsáveis**:
    
    1. Criar tela de login no figma [Hideki]
    2. Criar tela de login no frontend [Mateus]
    3. Implementar funcionalidade de autenticação no backend [Mateus]
    4. Implementar funcionalidade de sessão no frontend [Mateus]
    5. Implementar funcionalidade de logout no frontend [Filipe]
    6. Implementar funcionalidade de logout no backend [Mateus]

- História Revisada #5: Como usuário, eu gostaria de pesquisar um médico.
    
    **Tarefas e responsáveis**:
    
    1. Implementar funcionalidade de pesquisar médicos no frontend [Filipe]
    2. Implementar funcionalidade de listar médicos coerentes com a pesquisa no backend [Mateus]

(A antiga história 4, foi dividida entre as histórias 6 e 7, visto que separamos receitas e consultas como duas coisas diferentes, já que fazia mais sentido para o nosso sistema)

- História Adicionada #6: Como usuário, eu gostaria de consultar as minhas receitas cadastradas.
    
    **Tarefas e responsáveis**:
    
    1. Criar tela de receitas no figma [Hideki]
    2. Criar tela de receitas no frontend [Mateus]
    3. Implementar funcionalidade de ver as receitas cadastradas na tela de receitas no frontend [Filipe]
    4. Implementar funcionalidade de listar as receitas cadastradas no backend [Filipe]

- História Adicionada #7: Como usuário, eu gostaria de consultar as minhas consultas cadastradas.
    
    **Tarefas e responsáveis**:
    
    1. Criar tela de consultas no figma [Hideki]
    2. Criar tela de consultas no frontend [Mateus]
    3. Implementar funcionalidade de ver as consultas cadastradas na tela de consultas no frontend [Filipe]
    4. Implementar funcionalidade de listar as consultas cadastradas no backend [Filipe]

- História Revisada #8: Como médico, eu gostaria de cadastrar consultas para os meus pacientes.
    
    **Tarefas e responsáveis**:
    
    1. Criar tela de cadastro de consulta no figma [Hideki]
    2. Criar tela de cadastro de consulta no frontend [Mateus]
    3. Implementar funcionalidade de cadastrar consulta no backend [Filipe]
    4. Implementar funcionalidade de ver consulta cadastrada no backend [Filipe]

(Repartimos a antiga história 6 nas histórias 9 e 10, visto que separamos o que é uma consulta e uma receita e cada uma agora tinha uma página específica. Além disso, a antiga história 7 passou a integrar essas novas histórias, pois é possível ver os dados do paciente nesse momento)

- História Adicionada #9: Como médico, eu gostaria de visualizar as consultas cadastradas para os meus pacientes.
    
    **Tarefas e responsáveis**:

    1. Criar tela de consultas do médico no frontend [Mateus]
    2. Implementar funcionalidade de ver as consultas cadastradas na tela de registros do usuário no frontend [Mateus]
    3. Implementar funcionalidade de listar as consultas cadastradas do usuário no backend [Filipe]
 
- História Adicionada #10: Como médico, eu gostaria de visualizar as receitas cadastradas para os meus pacientes.
    
    **Tarefas e responsáveis**:

    1. Criar tela de receitas do médico no frontend [Mateus]
    2. Implementar funcionalidade de ver as receitas cadastradas na tela de registros do usuário no frontend [Mateus]
    3. Implementar funcionalidade de listar as receitas cadastradas do usuário no backend [Filipe]

 (Por fim, removemos a história 8, visto que não se encaixava nesse momento da sprint desenvolver um administrador. Além disso, com as novas histórias, o trabalho demandou mais tempo do que esperado o que dificultou na execução dessa parte)

### Arquitetura Hexagonal

A arquitetura hexagonal visa isolar o núcleo do sistema (a lógica de negócios) das dependências externas, facilitando a manutenção, os testes e a escalabilidade. Nessa linha de pensamento, faz sentido usar essa arquitetura para desenvolver o sistema, visto que, em primeiro lugar, a implementação do sistema fica mais fácil e, em segundo lugar, vamos precisar realizar uma bateria grande de testes, o que é facilitado utilizando esse tipo de arquitetura.

### Por que o sistema está adotando essa arquitetura?
O Diagnosys adota a arquitetura hexagonal pelos seguintes motivos:

- Manutenção: A separação clara entre o núcleo do sistema e suas dependências externas facilita a manutenção. Mudanças nas interfaces de usuário ou nas tecnologias de armazenamento não afetam a lógica de negócios.
 
- Testes: A arquitetura permite testar o núcleo do sistema de maneira isolada, utilizando mocks para as dependências externas. Isso facilita a criação de testes unitários e de integração.

- Escalabilidade: A arquitetura hexagonal facilita a adição de novas funcionalidades e adaptações a novos requisitos sem a necessidade de reescrever grandes partes do sistema.

- Flexibilidade: A substituição ou atualização das dependências externas pode ser feita com mínimo impacto no núcleo do sistema.

### Domínio e Adaptadores

#### Portas

As portas são interfaces que definem como os adaptadores externos podem interagir com o núcleo do sistema. No Diagnosys, temos:

Repositórios: Interfaces que definem as operações de armazenamento e recuperação de dados, nesse caso usamos o sequelize como porta.

Serviços de Aplicação: Interfaces que expõem funcionalidades do núcleo para os adaptadores externos, como os controladores da web.

#### Adaptadores

Os adaptadores são implementações concretas das interfaces definidas pelas portas. Eles permitem a comunicação com sistemas externos e são divididos em dois tipos:

- Adaptadores de Entrada: Incluem os controladores da web que recebem as solicitações dos usuários e chamam os serviços de aplicação apropriados, como usuarioCOntroller.ts.

- Adaptadores de Saída: Implementam as interfaces dos repositórios utilizando tecnologias externas, como bancos de dados, como usuarioService.ts.

