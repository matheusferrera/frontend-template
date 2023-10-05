# Interface FrontEnd

<p>O microsserviço de Interface Web é a camada visível do sistema que proporciona aos usuários a capacidade de interagir intuitivamente com as funcionalidades oferecidas. Por meio de uma interface de usuário (UI) intuitiva, os usuários podem navegar pelo sistema, criar e atualizar seus perfis, acessar oportunidades de trabalho e cursos, além de se beneficiar das facilidades proporcionadas pelo programa. Pretende-se utilizar uma interface web moderna baseada na tecnologia JavaScript React na qual os usuários do sistema irão se conectar via browser em uma url acessível via Internet. Além disso, pretende utilizar o protocolo HTTP com JWT para a comunicação entre este microsserviço e o API Gateway.</p>

### Configurando o ambiente

Não será necessário configurar o ambiente, pois o FrontEnd é um microsserviço que não possui banco de dados e não se comunica diretamente com o banco de dados. Ele se comunica com o microsserviço API, que por sua vez se comunica com todo os backend do sistema.

Além disso, o `docker-compose.yml` do projeto base já está configurado para subir o FrontEnd.