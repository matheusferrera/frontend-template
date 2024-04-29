import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const Activate = () => {
  const { activate } = useAuth();
  const navigate = useNavigate();

  const token = useParams().token;

  const activateToken = token => {
    activate(token)
      .then(response => {
        navigate("/parceiro_login");
        alert(response);
      })
      .catch(error => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        alert(resMessage);
      })
      .finally(() => {
        navigate("/parceiro_login");
      });
  };

  activateToken(token);
};

export default Activate;
