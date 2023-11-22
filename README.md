# projeto_es_eventix
Um sistema de compra e venda de ingresso construído para facilitar a compra e venda de ingressos de forma online na cidade de Lavras-MG, tendo em vista que atualmente as vendas de ingresso estão distribuídas em poucos sistemas, com altas taxas, dificultando assim a compra por parte de muitos usuários. Com isso, o Eventix tem a finalidade de diminuir esses problemas, sendo um sistema totalmente isento de taxas, com boa usabilidade e desempenho para contemplar grande parte dos interessados em eventos na cidade.

# Integrantes
- André Ulhoa Werneck
- Lucas Carvalho Ferreira
- Maria Clara Souza Rosa

# Descrição
O sistema de venda de ingressos para festas oferece uma abordagem abrangente, permitindo que organizadores, vendedores e clientes participem ativamente do processo. Todo o processo do sistema deve ser feito de forma autenticada, a fim de um melhor controle de permissões para cada usuário autenticado. 

Com uma interface simples, os organizadores podem cadastrar facilmente seus eventos, personalizando detalhes e realizando as possíveis alterações e adaptações, caso necessário.

Para ampliar a rede de venda, vendedores podem se cadastrar no sistema, tornando-se parceiros na comercialização de ingressos de eventos específicos. Essa funcionalidade proporciona uma abordagem colaborativa, permitindo que vendedores ampliem seu alcance.

E a plataforma não se limita aos bastidores, pois oferece também aos próprios clientes a possibilidade de explorar eventos, visualizar opções de ingressos e efetuar compras de forma direta.

# Estrutura do diretório
O código-fonte ficará na pasta src, separados pelas pastas backend e frontend. A pasta backend contém os arquivos do lado do servidor enquanto a pasta frontend contém os arquivos do lado do cliente na aplicação.

Exemplo de estrutura

|

|

| -- backend

|     -src
|       - routes
|           - eventoRoutes
|       - controller
|             - eventoController
|       - services
|             - eventoServices
|       - persistence
|             - BD
|             - eventoPersistence
|
| -- frontend
|
|     -src
|
|

# Boas Práticas
Será usado o princípio SOLID para que o código seja escalável, de fácil manutenção e preparado para receber testes. O código deve ter comentários que devem ser sucintos e de fácil entendimento e devem ser constantemente revisados. O sistema também terá documentação com os padrões adotados, documento de requisitos, como utilizar o sistema, entre outros. Os nomes das variáveis precisam ser diretos e de fácil entendimento, os métodos devem ser declarados como ações, por exemplo, "getVendas", "calcularPreco", etc. As funções devem ter uma única responsabilidade, realizando apenas uma ação. As classes também devem seguir o princípio da Responsabilidade Única, devem realizar somente aquilo que estiver dentro do contexto daquela classe. Os métodos também devem ser de fácil reutilização e manutenção, usando de princípios como herança e sobrecarga de método. O código também deve ter tratamento de erros, com blocos try-catch para capturar as exceções.

# Regras de Uso
Os commits devem ser feitos diretamente na branch main, sempre que um desenvolvedor estiver fazendo uma tarefa cadastrada no kanban do próprio GitHub na aba Projetos. Os códigos ficam na pasta 'src', a documentação está dividida entre as pastas 'Requisitos' e 'Padrões Adotados'.

# Tecnologias utilizadas
- Node (versão 20.1.0)
- React (versão 18.2.0)
- Elephant SQL (versão 12.0)
