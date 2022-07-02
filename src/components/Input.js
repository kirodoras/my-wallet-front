import React from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import Loading from './shared_components/Loading';
import styled from 'styled-components';
import FormStyled from "./shared_styles_components/FormStyled";

export default function Input() {
    const navigate = useNavigate();
    const [value, setValue] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [disabled, setDisabled] = React.useState(false);
    const [buttonContent, setButtonContent] = React.useState('Salvar entrada');

    const { token } = useContext(UserContext);

    React.useEffect(() => {
        if(!token){
            navigate("/");
        }
    }, [token, navigate]);

    function submitData(event) {
        event.preventDefault();
        setDisabled(true);
        setButtonContent(<Loading size={50} />);
        const URL = `http://localhost:5000/ios`;
        const AUT = { headers: { Authorization: `Bearer ${token}` } };
        const promise = axios.post(URL,
            {
                type: 'input',
                value: Number(value),
                description: description
            }, AUT);
        promise.then((response) => {
            alert('Entrada salva com sucesso');
            setDisabled(false);
            setButtonContent('Salvar entrada');
            console.log(response);
        }).catch((err) => {
            alert('Falha em salvar entrada');
            setDisabled(false);
            setButtonContent('Salvar entrada');
            console.log(err);
        });
    }

    return (
        <InputStyled>
            <span>
                <h2>Nova entrada</h2>
            </span>
            <FormStyled onSubmit={submitData} secondary>
                <input
                    disabled={disabled}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    min="0.01"
                    type="number"
                    step="0.01"
                    placeholder="Valor"
                    autoComplete="off"
                    required
                />
                <input
                    disabled={disabled}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Descrição"
                    autoComplete="off"
                    required
                />
                <button
                    disabled={disabled}
                    type='submit' >
                    {buttonContent}
                </button>
            </FormStyled>
        </InputStyled>
    );
}

const InputStyled = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        width: 18rem;
        max-width: 100%;
        margin-top: 2.5rem;

        h2 {
            color: #F9F8D0;
            font-weight: 600;
            font-size: 1.5rem;
            line-height: 1rem;
            letter-spacing: 0.05em;
        }
    }
`;