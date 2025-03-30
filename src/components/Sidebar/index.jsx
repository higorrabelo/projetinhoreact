import React from 'react';
import './Sidebar.css'
import { SideItem } from '../SideItem';
export function Sidebar(props){

    let texto = (
        <p>
        <h4>Why do we use it?</h4>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
         as opposed to using 'Content here, content here', making it look like readable English. 
        </p>
    );

    return(
        <div className='sidebar'>
            <SideItem conteudo={texto}/>
            <SideItem conteudo={texto}/>
            <SideItem conteudo={texto}/>
            <SideItem conteudo={texto}/>
            <SideItem conteudo={texto}/>
            <SideItem conteudo={texto}/>
        </div>
    );
}