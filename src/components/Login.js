import { Link } from "react-router-dom";

import styled from 'styled-components';
import logoImg from '../assets/logo.png';

export default function Login() {
    return (
        <LoginStyled >
            <LogoCard>
                <img src={logoImg} alt="Logo MyWallet" />
                <h1>MyWallet</h1>
            </LogoCard>

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

const LogoCard = styled.div`
    width: 18rem;
    height: 17rem;
        
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background-color: #550096;
    border: 1px solid #550096;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 26px;

    margin-top: 4.5rem;
    img {
        width: 9rem;
    }

    h1 {
        color: #F9F8D0;
        font-weight: 900;
        font-size: 1.3rem;
        line-height: 1.4rem;
    }
`;

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 18rem;
    margin-top: 3.5rem;

    input {
        height: 2.5rem;
            
        background: #540394;
        border-radius: 0.7rem;

        padding-left: 1rem;

        font-weight: 500;
        font-size: 0.9rem;
        line-height: 1rem;
        letter-spacing: 0.05em;

        color: #F9F8D0;

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #F9F8D0;
            opacity: 1; 
        }

        :-ms-input-placeholder { 
            color: #F9F8D0;
        }

        ::-ms-input-placeholder {
            color: #F9F8D0;
        }
    }

    button {
        align-content: center;
        height: 2.5rem;
        background: #0F0815;
        border-radius: 0.7rem;
        color: #F9F8D0;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1rem;
        letter-spacing: 0.05em;
    }
`;