import React from 'react';
import './Content.css'
export function Content(props){
    return(
        <div className='conteudo'>
            {props.children}
        </div>
    );
}