import styled from "styled-components";
import Ranking from "../Ranking/Ranking";
import { Link, useNavigate } from "react-router-dom";
import { REACT_APP_API_URL } from "../../API_URL";

export default function HomePageLogOff() {
    const navigate = useNavigate();
    function LoginButton(){
        navigate("/sign-in")
    }
    function RegisterButton(){
        navigate("/sign-up")
    }
  return (
    <>
      <Content>
        <TopBar>
            <Login onClick={LoginButton}>
              <p>Entrar</p>
            </Login>
          <Register onClick={RegisterButton}>
            <p>Cadastrar-se</p>
          </Register>
        </TopBar>
        <Ranking />
      </Content>
    </>
  );
}
const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const TopBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;
const Login = styled.div`
  cursor: pointer;
  padding: 1%;
  p:hover {
    
    color: #5d9040;
  }
`;
const Register = styled.div`
  cursor: pointer;
  padding: 1%;
  p:hover {
    color: #5d9040;
  }
`;
