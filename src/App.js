import React from 'react';
import Header from './components/Header'
import Resume from './components/Resume/index';
import Global from './styles/global';
import Form from './components/Form';


const App = () => {
    return (
        <>
            <Header />
            <Resume />
            <Form />
            <Global />
        </>
    );
};

export default App;