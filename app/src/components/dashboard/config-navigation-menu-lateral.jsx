const user = JSON.parse(localStorage.getItem("user"));
const perfilUser = user?.ds_perfil_sso?.substring(2, user.ds_perfil_sso.length - 2);

let navConfig;

switch (perfilUser) {
  case "Servidor":
    navConfig = [
      {
        title: "Página Inicial",
        path: "/parceiro",
        color: "default",
        subTitles: {
          home: "/",
          perfil: "/profile",
        },
      },
    ];
    break;

  case "Parceiro":
    navConfig = [
      {
        title: "Página Inicial",
        path: "/parceiro",
        color: "default",
        subTitles: {
          perfil: "/profile",
        },
      },
      {
        title: "parceiro",
        path: "/parceiro",
        subTitles: {
          "listar parceiros": "/parceiro/listar_parceiros",
          "visualizar formulário": "/parceiro/visualizar_formulario",
        },
      },
    ];
    break;

  case "Trabalhador":
    navConfig = [
      {
        title: "Página Inicial",
        path: "/parceiro",
        color: "default",
        subTitles: {
          home: "/",
          perfil: "/profile",
        },
      },
    ];
    break;

  default:
    navConfig = [
      {
        title: "Perfil nao encontrado",
        path: "/parceiro",
        color: "default",
        subTitles: {
          perfil: "/profile",
        },
      },
    ];
    break;
}

export default navConfig;
