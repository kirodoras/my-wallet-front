import styled from 'styled-components';

const LogoCardStyled = styled.div`
    width: 18rem;
    max-width: 100%;
    height: ${props => props.login ? '17rem' : '10rem'};
        
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
        width: ${props => props.login ? '9rem' : '4rem'};
        max-width: 100%;
    }

    h1 {
        color: #F9F8D0;
        font-weight: 900;
        font-size: 1.3rem;
        line-height: 1.4rem;
    }
`;

export default LogoCardStyled;