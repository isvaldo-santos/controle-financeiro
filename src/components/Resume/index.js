import React from 'react';
import ResumeItems from '../ResumeItems';
import * as C from "./styles";
import {FiArrowUpCircle} from 'react-icons/fi';
import {FiArrowDownCircle} from 'react-icons/fi';
import {GiMoneyStack} from 'react-icons/gi';



const Resume = ({ income, expense, total }) => {
    return (
        <C.Container>
            <ResumeItems title="Entradas" Icon={FiArrowUpCircle} value={income} />
            <ResumeItems title="Saídas" Icon={FiArrowDownCircle} value={expense} />
            <ResumeItems title="Total" Icon={GiMoneyStack} value={total} />

        </C.Container>
    );
};

export default Resume;