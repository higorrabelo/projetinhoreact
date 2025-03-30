import React from 'react';
import './Contato.css'
export function Contato(){

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
            <label htmlFor="">Nome</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Mensagem</label>
            <textarea name="msg" id="msg"></textarea>
            </div>
            </div>

            <button>Enviar</button>

        </div>
    );
}