import styled from 'styled-components';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 18rem;
    max-width: 100%;
    margin-top: ${props => props.secondary ? '2rem' : '3.5rem'};

    input {
        max-width: 100%;
        height: 2.5rem;
            
        background: #540394;
        border-radius: 0.7rem;
        border: 1px solid #0F0815;
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
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 2.5rem;
        background: #0F0815;
        border-radius: 0.7rem;
        color: #F9F8D0;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1rem;
        letter-spacing: 0.05em;
        border: 1px solid #540394;
    }
`;

export default FormStyled;