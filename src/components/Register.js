import React from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Loading from './shared_components/Loading';
import styled from 'styled-components';
import LogoCardStyled from "./shared_styles_components/LogoCardStyled";
import FormStyled from "./shared_styles_components/FormStyled"
import logoImg from '../assets/logo.png';

export default function Register() {
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [disabled, setDisabled] = React.useState(false);
    const [buttonContent, setButtonContent] = React.useState('Cadastrar');

    function submitData(event) {
        event.preventDefault();
        setDisabled(true);
        setButtonContent(<Loading size={50} />);
        if (password !== confirmPassword) {
            alert('Verifique se digitou corretamente a senha');
            setDisabled(false);
            setButtonContent('Cadastrar');
            return;
        }
        const URL = `https://myprettywallet.herokuapp.com/sign-up`;
        const promise = axios.post(URL,
            {
                email: email,
                name: name,
                password: password
            });
        promise.then((response) => {
            navigate('/');
            console.log(response);
        }).catch((err) => {
            if(err.response.status === 409){
                alert('Email já cadastrado');
            } else {
                alert('Erro no cadastro');
            }
            setDisabled(false);
            setButtonContent('Cadastrar');
            console.log(err);
        });
    }

    return (
        <RegisterStyled >
            <LogoCardStyled>
                <img src={logoImg} alt="Logo MyWallet" />
                <h1>MyWallet</h1>
            </LogoCardStyled>

            <FormStyled onSubmit={submitData}>
                <input
                    disabled={disabled}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="name"
                    placeholder="Nome"
                    autoComplete="off"
                    required
                />
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
                <input
                    disabled={disabled}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirme a senha"
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
                to="/">
                Já tem uma conta? Entre agora!
            </Link>
        </RegisterStyled>
    );
}

const RegisterStyled = styled.div`
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