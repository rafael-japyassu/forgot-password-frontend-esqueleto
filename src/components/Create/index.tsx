import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const CreateForm: React.FC = () => {
    return(
        <>
            <h1>Cadastro de Usuário</h1>
            <span className="login-subtitle">Preencha seus dados</span>
            <div className="form-login">
                <form>
                    <label>Nome</label>
                    <input type="text" className="custom-input" required/>  

                    <label>Email</label>
                    <input type="email" className="custom-input" required/>   

                    <label>Senha</label>
                    <input type="password" className="custom-input" required />

                    <label>Confirme sua senha</label>
                    <input type="password" className="custom-input" required />

                    <button className="custom-buttom" type="submit">
                        Cadastrar
                    </button>

                    <div className="actions">
                        <Link to="/login">Já tenho uma conta</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreateForm;