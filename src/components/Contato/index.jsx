import React, { useState } from 'react';
import './Contato.css'
export function Contato(props){

    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [meuTexto,setTexto] = useState('');

    var styles = {
        fontSize:"20px",
        textAlign:"justify",
        padding:'10px'
    }
    var styles2 = {
        display:'flex',
        flexDirection:'column',
        alignItems:'start',
        marginLeft:'auto',
        marginRight:'auto',
    }

    function msg(){
        var obj = {
            'Nome: ':nome,
            'Email: ':email,
            'meuTexto':meuTexto
        }
        console.log(obj);
    }

    let texto = (
        <>
        <p style={styles}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
         The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
         as opposed to using 'Content here, content here', making it look like readable English. 
        </p>
        </>
    );

    return(
        <div>
            <h3>Contato</h3>
            {texto}
            <div className='contato'>
            <div style={styles2}>
            <label htmlFor="nome">Nome</label>
            <input type="text"  value={nome} onChange={(e)=>setNome(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="texto">Mensagem</label>
            <textarea name="msg" id="msg" value={meuTexto} onChange={(e)=>setTexto(e.target.value)} ></textarea>
            </div>
            </div>

            <div className='centralizado'>
                <button className='btn1' onClick={()=>props.setPagina('Home')}>Voltar</button>
                <button className='btn1' onClick={msg}>Enviar</button>
            </div>

        </div>
    );
}