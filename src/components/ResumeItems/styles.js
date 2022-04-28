import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;
    box-shadow: 0px 0px 5px #ccc;

    @media (max-width: 750px) {

        box-shadow: 0px 0px 5px #ccc;
        padding-right: 5rem; 
        padding-left: 5rem; 

        p {
            font-size: 20px;
        }

        span {
            font-size: 20px;
        }

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`;