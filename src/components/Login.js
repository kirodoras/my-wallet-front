import { Link } from "react-router-dom";

import styled from 'styled-components';
import LogoCardStyled from "./shared_styles_components/LogoCardStyled";
import FormStyled from "./shared_styles_components/FormStyled"
import logoImg from '../assets/logo.png';

export default function Login() {
    return (
        <LoginStyled >
            <LogoCardStyled login>
                <img src={logoImg} alt="Logo MyWallet" />
                <h1>MyWallet</h1>
            </LogoCardStyled>

            <FormStyled>
                <input
                    type="email"
                    placeholder="E-mail"
                    autoComplete="off"
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    autoComplete="off"
                    required
                />
                <button
                    type='submit' >
                    Entrar
                </button>
            </FormStyled>

            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #F9F8D0;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        margin-top: 2.2rem;
    }
`;