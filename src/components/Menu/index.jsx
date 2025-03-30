import React from 'react';
import './Menu.css'
export function Menu(props){
    return(
        <div className='menu'>
            <a href="./" className='brand'>Site Pessoal</a>
            <ul>
                <li>
                    <a href="./" onClick={()=>props.setPagina('Home')}>Home</a>
                </li>
                <li>
                    <a onClick={()=>props.setPagina('QuemSomos')}>Quem Somos</a>
                </li>
                <li>
                    <a  onClick={()=>props.setPagina('FormCliente')}>Cadastro</a>
                </li>
                <li>
                    <a  onClick={()=>props.setPagina('Contato')} >Contato</a>
                </li>
            </ul>
        </div>
    );
}