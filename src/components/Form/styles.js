import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    gap: 10px;
    justify-content: space-around;
    padding: 15px 0px;

    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;


        button {
            padding: 1rem;
            align-self: flex-end;
            margin-right: 20px;
        }

        label {
            align-self: center;
        }

        input {
            padding: 0.8rem;
            align-self: center;
        }

    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
   outline: none;
   border-radius: 5px;
   padding: 5px 10px;
   font-size: 15px;
   border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        cursor: pointer;
        margin-left: 20px;
        accent-color: #99f2c8;
        margin-top: 0;
    }

    @media (max-width: 750px) {
        display: flex;
        align-items: center;
    }

`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background: #15d47a;

`;