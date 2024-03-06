import React from "react";

import { Box, Container, Link, Typography } from "@mui/material";

import imagem001 from "../assets/images/image001.png";
import imagem003 from "../assets/images/image003.png";
import imagem005 from "../assets/images/image005.png";
import imagem010 from "../assets/images/image010.png";
import imagem013 from "../assets/images/image013.png";
import CardBreadcrumb from "./cards/CardBreadcrumb";

const FAQ = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/"
        homeText="Página Inicial"
        currentPage="FAQ"
      />

      <Typography
        variant="h4"
        mt={2}
        textTransform="uppercase"
      >
        Perguntas Frequentes - FAQ
      </Typography>
      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          O que é o Programa Redução da Pobreza e o que ele oferece?
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          O Programa Redução da Pobreza é um conjunto de ações destinadas a auxiliar as pessoas inscritas no Cadastro Único,
          preferencialmente aquelas com renda familiar de até ½ salário-mínimo por pessoa. Por meio do site do Programa Redução da Pobreza,
          você encontra cursos gratuitos de qualificação profissional nas modalidades presencial e de Ensino à Distância (EaD),
          possibilidade de acesso ao microcrédito produtivo orientado para investir no seu próprio negócio e também pode no próprio site,
          elaborar um currículo e se candidatar a vagas de emprego.
        </Typography>
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Se você já estiver no Cadastro Único e quiser participar do Programa Redução da Pobreza, acesse o site clicando
          <Link
            component="a"
            href="https://www.gov.br/mds/pt-br/acoes-e-programas/programa-reducao-da-pobreza 
            "
            color="primary.main"
            underline="always"
            sx={{ ml: 1, mr: 1 }}
          >
            aqui
          </Link>
          e faça seu cadastro.
        </Typography>
      </Box>

      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          Como faço meu cadastro no Portal Programa Redução da Pobreza?
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Para fazer o cadastro no Programa Redução da Pobreza, é necessário estar inscrito no Cadastro Único. Se você está inscrito no
          Cadastro Único, o seu CPF será identificado pelo sistema no momento que você estiver fazendo o seu cadastro no site Programa
          Redução da Pobreza. Para isso, acesse o site
          <Link
            component="a"
            href="https://www.gov.br/mds/pt-br/acoes-e-programas/programa-reducao-da-pobreza"
            color="primary.main"
            underline="always"
            sx={{ ml: 1, mr: 1 }}
          >
            aqui
          </Link>
          e clique nos botões Quero aprender, Quero empreender ou Quero emprego”. Ao acessar essa aba você é direcionado para a Conta de
          acesso única do Governo &lt;
          <Link
            component="a"
            href="http://www.acesso.gov.br/"
            color="primary.main"
            underline="always"
          >
            acesso.gov.br/
          </Link>
          &gt; para autenticar telefone e/ou e-mail preenchendo os dados solicitados. Depois desse cadastro o sistema irá informar se você
          está inscrito no Cadastro Único. Se você não estiver no Cadastro Único, procure o setor responsável pelo Cadastro Único em seu
          município, ou um Centro de Referência de Assistência Social (CRAS). Para fazer parte do Cadastro Único, é necessário ter renda
          mensal igual ou inferior a meio salário-mínimo por pessoa ou renda familiar mensal de até três salários mínimos.
        </Typography>
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          O Programa Redução da Pobreza oferece oportunidades de qualificação, de emprego e de renda e promove a autonomia das pessoas
          inscritas no Cadastro Único.
        </Typography>

        <ol>
          <li>
            Acessar o site clicando
            <Link
              component="a"
              href="https://www.gov.br/mds/pt-br/acoes-e-programas/programa-reducao-da-pobreza"
              color="primary.main"
              underline="always"
              sx={{ ml: 1, mr: 1 }}
            >
              aqui
            </Link>
          </li>
          <li>Clicar em uma das opções</li>
          <Box sx={{ mx: "auto", width: 750, mb: 2 }}>
            <img
              src={imagem001}
              style={{ width: 700 }}
            />
          </Box>

          <li>Informar o seu CPF, selecionar estado e acionar a opção “Não sou robô”</li>
          <Box sx={{ mx: "auto", width: 450, mb: 2 }}>
            <img
              src={imagem003}
              style={{ width: 400 }}
            />
          </Box>
          <li>Acionar opção (GOV.BR)</li>
          <Box sx={{ mx: "auto", width: 450, mb: 2 }}>
            <img src={imagem005} />
          </Box>

          <li>Informar CPF e senha no GOV.BR e caso usuário não tenha cadastro no GOV.BR deverá realizar um cadastro; </li>
          <Box sx={{ mx: "auto", width: 650, mb: 2 }}>
            <img
              src={imagem010}
              style={{ width: 600 }}
            />
          </Box>

          <li>Validar e-mail e/ou número de telefone;</li>
          <Box sx={{ mx: "auto", width: 750, mb: 2 }}>
            <img
              src={imagem013}
              style={{ width: 700 }}
            />
          </Box>

          <li>Aceitar termo de acesso ao PROGRAMA REDUÇÃO DA POBREZA.</li>
        </ol>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          OBS: Em caso de o usuário ter esquecido o e-mail cadastrado ele deve seguir as seguintes instruções, retirado do site dúvidas
          frequentes do GOV.BR clicando no
          <Link
            component="a"
            href="https://faq-login-unico.servicos.gov.br/en/latest/_perguntasdafaq/naotenhoacessoaoemailcadastradonologin.html"
            color="primary.main"
            underline="always"
            sx={{ ml: 1 }}
          >
            link
          </Link>
          .
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Para alterar o e-mail cadastrado, a Administração Pública precisa ter certeza de que você é você mesmo. Há diferentes modos de
          fazer isso:
        </Typography>
        <ul>
          <li>
            Validação facial no aplicativo gov.br (para quem possui carteira de motorista – CNH ou Título de Eleitor com biometria
            cadastrada - Tribunal Superior Eleitoral)
          </li>
          <li>
            Utilização de internet banking (para quem possui conta em um dos seguintes bancos: Banco do Brasil, Banrisul, Banese, Bradesco,
            Caixa Econômica Federal, Itaú, Santander ou Sicoob)
          </li>
          <li>Utilização do autoatendimento dos Bancos Credenciados</li>
        </ul>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Caso não se encaixe em nenhuma dessas situações, preencha o formulário Como Podemos te ajudar? com as informações:
        </Typography>
        <ol>
          <li>Preencher no campo assunto: Alteração do e-mail por solicitação do cidadão</li>
          <li>
            Preencher o conteúdo com as informações:
            <ul>
              <li>Serviço que deseja acessar com Login Único</li>
              <li>E-mail para alteração;</li>
              <li>
                Anexar arquivo com o Documento de Identificação e autofotografia de seu rosto, segurando o documento original com foto mais
                recente possível para checagem;
              </li>
              <li>
                Seguinte texto: Eu, nome do cidadão, portador do CPF, CPF do cidadão , autorizo o Ministério da Gestão e da Inovação em
                Serviços Públicos a alterar meus dados cadastrais da plataforma de autenticação Login Único (gov.br). Cidade residência do
                cidadão , data do preenchimento da autorização.
              </li>
            </ul>
          </li>
        </ol>
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Logo que o Ministério da Gestão e da Inovação em Serviços Públicos receber a solicitação, será realizada a análise de segurança e
          confirmação será encaminhada para email solicitado para alteração. Ausência das informações acima impossibilita análise e retorno.
        </Typography>
      </Box>

      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          Eu quero trabalhar/ Quero um emprego. Como o Programa Redução da Pobreza pode me ajudar?
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Primeiramente, você deve se cadastrar no Portal Programa Redução da Pobreza. Para isso, acesse o site clicando
          <Link
            component="a"
            href="https://www.gov.br/mds/pt-br/acoes-e-programas/programa-reducao-da-pobreza 
            "
            color="primary.main"
            underline="always"
            sx={{ ml: 1, mr: 1 }}
          >
            aqui
          </Link>
          e clique em um dos botões <b>QUERO APRENDER, QUERO EMPREENDER, QUERO EMPREGO</b>. Ao acessar essa aba você será direcionado para a
          Conta de acesso única do Governo &lt;
          <Link
            component="a"
            href="https://www.gov.br/mds/pt-br/acoes-e-programas/programa-reducao-da-pobreza"
            color="primary.main"
            underline="always"
          >
            acesso.gov.br/
          </Link>
          &gt; para autenticar telefone e/ou e-mail preenchendo os dados solicitados. IMPORTANTE! Para se cadastrar no Programa Redução da
          Pobreza é necessário estar inscrito no Cadastro Único. Ao preencher as informações solicitadas, será possível se candidatar a
          vagas de emprego, de estágio ou de jovem aprendiz em sua região, de acordo com o seu perfil profissional. Após o cadastramento
          inicial, clique no botão <b>“Vagas de Trabalho”</b>, depois em <b>“Meu Currículo”</b>.
        </Typography>
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          No Portal Programa Redução da Pobreza você poderá:
        </Typography>
        <ul>
          <li>Criar um currículo para você;</li>
          <li>
            Enviar seu currículo diretamente a empresas ofertantes de vagas de trabalho (se for uma vaga cadastrada diretamente pela
            empresa) ou acessar plataformas online parceiras do Programa Redução da Pobreza para se candidatar a uma vaga;
          </li>
          <li>Verificar se há oportunidades de trabalho em sua região;</li>
          <li>Verificar se alguma oportunidade de trabalho corresponde ao seu perfil profissional;</li>
          <li>Gravar seu currículo em formato PDF;</li>
          <li>Realizar a impressão do currículo;</li>
          <li>Se inscrever e participar de cursos presenciais e à distância (EaD), gratuitos;</li>
        </ul>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Há cada vez mais empresas divulgando oportunidades de trabalho no Portal Programa Redução da Pobreza. A utilização dessa
          ferramenta por empresas é resultado da articulação dos poderes públicos do seu município, juntamente com o Ministério do
          Desenvolvimento e Assistência Social, Família e combate à Fome.
        </Typography>
      </Box>

      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          Já estou empregado(a). Posso me cadastrar no Programa Redução da Pobreza?
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Sim! Mesmo se você estiver empregado(a), é possível se cadastrar no portal do Programa Redução da Pobreza para ter acesso a vagas
          de emprego, estágio ou Jovem Aprendiz, cursos de qualificação profissional e empreendedorismo na sua região.
        </Typography>
      </Box>

      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          Como posso atualizar as informações do meu currículo?
        </Typography>
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Para atualizar seu currículo, entre no site clicando
          <Link
            component="a"
            href="https://www.gov.br/mds/pt-br/acoes-e-programas/programa-reducao-da-pobreza 
            "
            color="primary.main"
            underline="always"
            sx={{ ml: 1 }}
          >
            aqui
          </Link>
          , clique nos botões QUERO APRENDER, QUERO EMPREENDER, QUERO EMPREGO. Depois é só inserir as informações solicitadas para acessar o
          Portal. Em seguida, na coluna à esquerda, clique em “<b>Vagas de Trabalho</b>”, depois em “<b>Meu Currículo</b>” e em seguida, na
          parte superior da tela, clique em “<b>Alterar Informações</b>”. Depois que fizer as alterações ou atualizações, clique em “
          <b>salvar</b>”.
        </Typography>
      </Box>

      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          Como é feita a seleção de vagas?
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          As empresas e instituições parceiras do Programa Redução da Pobreza podem ofertar vagas de trabalho (na forma de contrato de
          emprego, estágio ou jovem aprendiz) e vagas de cursos gratuitos de qualificação. O candidato a uma vaga de emprego, estágio ou
          Jovem Aprendiz, ao acessar o Portal Programa Redução da Pobreza clicando
          <Link
            component="a"
            href="https://www.gov.br/mds/pt-br/acoes-e-programas/programa-reducao-da-pobreza 
            "
            color="primary.main"
            underline="always"
            sx={{ ml: 1 }}
          >
            aqui
          </Link>
          , pode visualizar oportunidades de trabalho e cursos disponíveis em sua região; e, se já tiver um currículo cadastrado, pode
          manifestar interesse por uma vaga anunciada, ou pode ser contatado diretamente pela empresa para uma entrevista, mesmo sem ter
          manifestado o interesse na vaga.
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Vale lembrar que nenhuma vaga de emprego, estágio ou Jovem Aprendiz é exclusiva para o público do Programa Redução da Pobreza.
          Assim, o candidato participará de processo seletivo e a empresa não é obrigada a contratar o público do Programa Redução da
          Pobreza.
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Muitos trabalhadores já foram contratados por empresas que buscaram candidatos no Portal Programa Redução da Pobreza.
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          O Ministério do Desenvolvimento e Assistência Social, Família e combate à Fome não se responsabiliza pela contratação em qualquer
          que seja a modalidade, em nenhuma fase. O Programa Redução da Pobreza opera como um mediador entre as empresas ofertantes de vaga
          de trabalho e trabalhadores à procura de oportunidades de trabalho.
        </Typography>
      </Box>

      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          Quais são as ações de Qualificação no Programa Redução da Pobreza?
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          A Qualificação compreende cursos de:
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          a). Educação Financeira; esta ação está disponível no Portal Capacitação MDS:
          <Link
            component="a"
            href="https://novoead.cidadania.gov.br/index 
            "
            color="primary.main"
            underline="always"
            sx={{ ml: 1 }}
          >
            novoead.cidadania.gov.br/index
          </Link>
          ;
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          b). Inclusão Digital;
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          c). Cursos disponibilizados pelos parceiros em diversas áreas de conhecimento;
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          d). Cursos do sistema S.
        </Typography>
      </Box>

      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          Do que se trata a área de Educação Financeira?
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          O interessado nesta formação poderá acessar dois ambientes para a oferta deste curso:
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          <b>Cursos de Gestão de Finanças Pessoais e Educação Financeira nas Escolas</b>, que já está disponibilizado no Portal Programa
          Redução da Pobreza e o interessado poderá acessar seguindo os passos abaixo:
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Entre no site
          <Link
            component="a"
            href="https://www.gov.br/mds/pt-br/acoes-e-programas/programa-reducao-da-pobreza 
            "
            color="primary.main"
            underline="always"
            sx={{ ml: 0.5 }}
          >
            aqui
          </Link>
          ;
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Clique no botão QUERO APRENDER;
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Na plataforma do Programa Redução da Pobreza clique em “Cursos”. Você verá na tela uma lista de oferta de cursos gratuitos em
          várias áreas de conhecimento. O curso identificado está nas trilhas de cursos ofertados, onde há os cursos de Gestão de Finanças
          Pessoais e Educação Financeira nas Escolas.
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          <b>Curso EaD Educação Financeira para Empreendedores Populares</b>
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Ofertado pelo portal capacitação MDS:
          <Link
            component="a"
            href="https://novoead.cidadania.gov.br/admin/selection/inforequest/312668"
            color="primary.main"
            underline="always"
            sx={{ ml: 1, mr: 1 }}
          >
            novoead.cidadania.gov.br/admin/selection/inforequest/312668
          </Link>
        </Typography>
      </Box>

      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          Gostaria de fazer um curso no Programa Redução da Pobreza, mas não consigo acessar a plataforma porque não tenho computador. O que
          faço?
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          O Programa Redução da Pobreza é uma plataforma digital e que, necessariamente, precisa ser acessada por meio eletrônico.
          Orientamos que recorra ao CRAS mais próximo de seu domicílio para verificar possíveis cursos ofertados on-line ou presenciais em
          sua região. Um dispositivo com internet é necessário não só para realizar as inscrições, mas também para fazer o curso
          propriamente dito.
        </Typography>
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          O cidadão deve, necessariamente, estar inscrito no Cadastro Único Para Programas Sociais do Governo Federal, requisito obrigatório
          para acessar o Programa Redução da Pobreza.
        </Typography>
      </Box>

      <Box
        mt={2}
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "background.paper",
          padding: "16px",
          boxShadow: 5,
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 1, mb: 2 }}
        >
          Se eu participar do Programa Redução da Pobreza e minha renda aumentar, eu perco o benefício do Bolsa Família?
        </Typography>

        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Não, você não deixará de receber o Bolsa Família ao participar do Programa Redução da Pobreza
        </Typography>
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          Importante esclarecer que o Programa Bolsa Família possui regras de funcionamento que não estão vinculadas com o Programa Redução
          da Pobreza. O Programa Bolsa Família verifica a renda familiar por meio de entrevista realizada no CRAS quando da atualização do
          Cadastro Único da família. Portanto, um aumento de renda, sobretudo aquela advinda de atividades informais ou que variam de um mês
          para o outro, não implicará a perda do benefício do Programa Bolsa Família.
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQ;
