import React from 'react';
import './SideItem.css'
export function SideItem(props){

    //const [ cont , setCont] = useState('');

    var styles = {
        fontSize:"13px",
        textAlign:"justify",
        padding:'1px'
    }

    return(
        <div className='sideitem' style={styles}>
            {props.conteudo}
        </div>
    );
}