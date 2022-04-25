import React from 'react';
import ResumeItems from '../ResumeItems';
import * as C from "./styles";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";


const Resume = () => {
    return (
        <C.Container>
            <ResumeItems title="Entradas" Icon={FaRegArrowAltCircleUp} />
            <ResumeItems title="Saídas" Icon={FaRegArrowAltCircleDown} />
            <ResumeItems title="Total" Icon={FaDollarSign} />
        </C.Container>
    );
};

export default Resume;