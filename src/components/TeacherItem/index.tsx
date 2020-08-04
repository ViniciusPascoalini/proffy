import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
    <article className="teacher-item">
        <header>
            <img 
                src="https://avatars2.githubusercontent.com/u/65316815?s=460&u=db15f09dc6dee9de6582cfa82c4b64d3fcaaf3f5&v=4" 
                alt="Pascoalini"
            />
            <div>
                <strong>Vinícius Pascoalini</strong>
                <span>Forró</span>
            </div>
        </header>

        <p>
            Eu vou mostrar pra vocês
            <br/>
            Como se dança o baião 🎶

            <br/><br/>
            E quem quiser aprender
            <br/>
            É favor fazer ligação 📱👇
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 30,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
);
}

export default TeacherItem;