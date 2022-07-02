import React from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

import styled from 'styled-components';

export default function Transactions() {
    const navigate = useNavigate();
    const { name, token } = useContext(UserContext);
    const [balance, setBalance] = React.useState([]);
    const [transactions, setTransactions] = React.useState([]);

    React.useEffect(() => {
        if (token.length > 0) {
            const URL = `http://localhost:5000/ios`;
            const AUT = { headers: { Authorization: `Bearer ${token}` } };
            const promise = axios.get(URL, AUT);
            promise.then((response) => {
                setBalance(response.data.balance);
                setTransactions(response.data.transactions);
                console.log(response.data);
            }).catch((err) => {
                console.log(err);
            });
        } else {
            navigate("/");
        }
    }, [token, navigate]);

    return (
        <TransactionsStyled>
            <span>
                <h2>{`Olá, ${name}`}</h2>
                <Link to="/">
                    <ion-icon name="exit-outline"></ion-icon>
                </Link>
            </span>
            {transactions ? <Historic balance={balance} transactions={transactions} /> : <NoHistoric />}
            <LinksToAdd />
        </TransactionsStyled>
    );
}

function Historic({ balance, transactions }) {
    return (
        <HistoricStyled >
            <HistoricItemsStyled>
                {transactions.map((value, index) =>
                    <Item
                        key={index}
                        day={value.day}
                        value={value.value}
                        description={value.description}
                        type={value.type} />)}
            </HistoricItemsStyled>
            <HistoricBalanceStyled balance={Number(balance)}>
                <span>SALDO</span>
                <span>{Number(balance).toFixed(2)}</span>
            </HistoricBalanceStyled>
        </HistoricStyled>
    );
}

function Item({ day, value, description, type }) {
    return (
        <ItemStyled type={type}>
            <div>
                <span>{day}</span>
                <span>{description}</span>
            </div>
            <span>{Number(value).toFixed(2)}</span>
        </ItemStyled>
    );
}

function NoHistoric() {
    return (
        <NoHistoricStyled >
            <span>Não há registros de</span>
            <span>entrada ou saída</span>
        </NoHistoricStyled>
    );
}

function LinksToAdd() {
    return (
        <LinksToAddStyled>
            <Link to="/input">
                <ion-icon name="add-circle-outline"></ion-icon>
                <span>Nova entrada</span>
            </Link>
            <Link to="/output">
                <ion-icon name="remove-circle-outline"></ion-icon>
                <span>Nova saída</span>
            </Link>
        </LinksToAddStyled>
    );
}

const TransactionsStyled = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    &>span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 18rem;
        max-width: 100%;
        margin-top: 2.2rem;

        h2 {
            color: #F9F8D0;
            font-weight: 600;
            font-size: 1.5rem;
            line-height: 1rem;
            letter-spacing: 0.05em;
        }
    }
`;

const HistoricStyled = styled.div`
    width: 18rem;
    max-width: 100%;
    height: 28rem;
    max-height: 100%;
    
    background-color: #F9F8D0;
    border: 1px solid #550096;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 26px;

    margin-top: 1rem;
    margin-bottom: 1.1rem;
    padding: 0.7rem;

    font-family: 'Roboto', sans-serif;
`;

const HistoricItemsStyled = styled.div`
    width: 100%;
    max-width: 100%;
    height: 94%;
    
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    overflow: auto;
`;

const ItemStyled = styled.div`
    width: 100%;
    max-width: 100%;
    min-height: 1.7rem;
    max-height: 100%;

    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    word-wrap: break-word;
    border-bottom: 1px solid rgba(134, 6, 235, 0.1);
    div {
        width: 74%;
        min-height: 1.7rem;

        &>span:nth-child(1) {
            color: rgba(134, 6, 235, 0.8);
            margin-right: 0.2rem;
        }

        &>span:nth-child(2) {
            color: #000000;
        }
    }

    &>span {
        display: flex;
        justify-content: flex-end;
        width: 26%;
        color: ${props => props.type === 'input' ? '#03AC00' : '#C70000'}
    }
`;

const HistoricBalanceStyled = styled.div`
    width: 100%;
    max-width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(134, 6, 235, 0.2);
    padding: 0.3rem 0.4rem 0.2rem 0.4rem;
    &>span:nth-child(1) {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }

    &>span:nth-child(2) {
        color: ${props => props.balance > 0 ? '#03AC00' : '#C70000'};
    }
`;

const NoHistoricStyled = styled.div`
    width: 18rem;
    max-width: 100%;
    height: 28rem;
    max-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background-color: #F9F8D0;
    border: 1px solid #550096;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 26px;

    margin-top: 1rem;
    margin-bottom: 1.1rem;

    &>span {
        color: #040404;
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.4rem;
    }
`;

const LinksToAddStyled = styled.div`
    width: 18rem;
    max-width: 100%;
    height: 7.2rem;
    max-height: 100%;

    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 46.5%;
        border-radius: 10px;
        color: #F9F8D0;
        padding: 0.7rem;
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.4rem;

        &>span {
            width: 90%;
        }
    }

    &>a:nth-child(1) {
        background: rgba(134, 6, 235, 0.8);
        box-shadow: -4px 4px 2px rgba(134, 6, 235, 0.42);
    }

    &>a:nth-child(2) {
        background: #1B1B1B;
        box-shadow: -4px 4px 2px rgba(249, 248, 208, 0.42);
    }
`;