import React from 'react';
import Header from './components/Header'
import Resume from './components/Resume/index';
import Global from './styles/global';


const App = () => {
    return (
        <>
            <Header />
            <Resume />
            <Global />
        </>
    );
};

export default App;