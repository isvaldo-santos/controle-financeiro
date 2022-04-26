import React from 'react';
import ResumeItems from '../ResumeItems';
import * as C from "./styles";
import {FiArrowUpCircle} from 'react-icons/fi';
import {FiArrowDownCircle} from 'react-icons/fi';
import {GiMoneyStack} from 'react-icons/gi';



const Resume = () => {
    return (
        <C.Container>
            <ResumeItems title="Entradas" Icon={FiArrowUpCircle} value = "3000" />
            <ResumeItems title="Saídas" Icon={FiArrowDownCircle} value = "1500" />
            <ResumeItems title="Total" Icon={GiMoneyStack} value = "1500" />

        </C.Container>
    );
};

export default Resume;