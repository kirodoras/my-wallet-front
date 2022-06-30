import styled from 'styled-components';
import FormStyled from "./shared_styles_components/FormStyled";

export default function Input() {
    return (
        <InputStyled>
            <span>
                <h2>Nova entrada</h2>
            </span>
            <FormStyled secondary>
                <input
                    type="number"
                    step="0.01"
                    placeholder="Valor"
                    autoComplete="off"
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    autoComplete="off"
                    required
                />
                <button
                    type='submit' >
                    Salvar entrada
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