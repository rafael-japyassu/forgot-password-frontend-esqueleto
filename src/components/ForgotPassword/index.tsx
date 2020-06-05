import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const ForgotPasswordForm: React.FC = () => {
    return(
        <>
            <h1>Recuperar Senha</h1>
            <span className="login-subtitle text-center">Informe seu email para enviarmos o procedimento de recuperação de senha</span>
            <div className="form-login">
                <form>
                    <label>Email</label>
                    <input type="email" className="custom-input" required/>

                    <button className="custom-buttom" type="submit">
                        Enviar
                    </button>

                    <div className="actions">
                        <Link to="/login">Voltar para o Login</Link>
                        <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ForgotPasswordForm;