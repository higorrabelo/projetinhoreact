import { useState } from 'react';
import './Contador.css';
export function Contador(props){

    let [numero,setNumero] = useState(0);

    function addNumber(){
        setNumero(numero+1);
    }
    function subNumber(){
        if(numero>0){
            setNumero(numero-1);
        }
    }

return(
    <div className='contador'>
        <input type="number" value={numero} readOnly />
        <button onClick={subNumber}>-</button>
        <button onClick={addNumber}>+</button>
    </div>
);
}