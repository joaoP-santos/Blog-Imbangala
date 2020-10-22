import React from 'react'
import '../styles/navbar.css'

import Logotype from '../images/Logotype.png'
import WhoWeAreIcon from '../images/WhoWeAreIcon.svg'
import PostsIcon from '../images/PostsIcon.svg'
import SignUpIcon from '../images/SignUpIcon.svg'
import LoginIcon from '../images/LoginIcon.svg'


function Navbar() {
    return(
       <nav id="navbar">
           <div id="logo">
                <img id="logotype" src={Logotype} alt="Logotipo"/>
                <h1>IMBANGALA</h1>
           </div>
           <div id="links">
            <a className="navbar-link" href="#">
                <img src={WhoWeAreIcon} alt="Ícone Quem Somos"/>
                QUEM SOMOS
            </a>
            <a className="navbar-link" href="#">
                <img src={PostsIcon} alt="Ícone Postagens"/>
                POSTAGENS
            </a>
            <a className="navbar-link" href="#">
                <img src={SignUpIcon} alt="Ícone Criar Conta"/>
                CRIAR CONTA
            </a>
            <a className="navbar-link" href="#">
                <img src={LoginIcon} alt="Ícone Entrar"/>
                ENTRAR
            </a>
           </div>
       </nav> 
    )
}

export default Navbar