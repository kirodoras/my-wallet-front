import React from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import Loading from './shared_components/Loading';
import styled from 'styled-components';
import LogoCardStyled from "./shared_styles_components/LogoCardStyled";
import FormStyled from "./shared_styles_components/FormStyled"
import logoImg from '../assets/logo.png';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [disabled, setDisabled] = React.useState(false);
    const [buttonContent, setButtonContent] = React.useState('Cadastrar');

    const { name, token, setName, setToken } = useContext(UserContext);

    React.useEffect(() => {
        if (token !== '' && token !== undefined && token !== null &&
            name !== undefined && name !== null && name !== '') {
            navigate("/transactions");
        }
    }, [token, name, navigate]);

    function submitData(event) {
        event.preventDefault();
        setDisabled(true);
        setButtonContent(<Loading size={50} />);
        const URL = `http://localhost:5000/sign-in`;
        const promise = axios.post(URL,
            {
                email: email,
                password: password
            });
        promise.then((response) => {
            setName(response.data.name);
            setToken(response.data.token);
            localStorage.setItem('MyWallet-Name', response.data.name);
            localStorage.setItem('MyWallet-Token', response.data.token);
            navigate("/transactions");
            console.log(response.data);
        }).catch((err) => {
            if (err.response.status === 404) {
                alert('Usuário não cadastrado, cadastre-se');
                navigate('/sign-up');
            }
            if (err.response.status === 401) {
                alert('Senha ou email errados');
            }
            setDisabled(false);
            setButtonContent('Cadastrar');
            console.log(err);
        });
    }

    return (
        <LoginStyled >
            <LogoCardStyled login>
                <img src={logoImg} alt="Logo MyWallet" />
                <h1>MyWallet</h1>
            </LogoCardStyled>

            <FormStyled onSubmit={submitData}>
                <input
                    disabled={disabled}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="E-mail"
                    autoComplete="off"
                    required
                />
                <input
                    disabled={disabled}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Senha"
                    autoComplete="off"
                    required
                />
                <button
                    disabled={disabled}
                    type='submit' >
                    {buttonContent}
                </button>
            </FormStyled>

            <Link
                disabled={disabled}
                to="/sign-up">
                Primeira vez? Cadastre-se!
            </Link>
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