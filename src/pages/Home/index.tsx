import React from 'react';

const Home: React.FC = () => {
    return(
        <div style={{ color: '#32C7AB', margin: 30 }}>
            <h1>Bem vindo { localStorage.getItem("app_user") }</h1>
        </div>
    );
}

export default Home;