import { useState } from 'react';
import './FormCliente.css'
export function FormCliente(props){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repSenha, setRepSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro,setBairro] = useState('')
    const [cep,setCep] = useState('');
    const [telefone,setTelefone] = useState('');

    function listaEstados(){
        const estadosBrasil = [
            "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", 
            "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", 
            "RS", "RO", "RR", "SC", "SP", "SE", "TO"
          ];
        
    return estadosBrasil.map((estado, index) => (
        <option key={index} value={estado}>{estado}</option>
    ));
    }

    function mostraAlgo(){
        var objeto = {
            "Nome":nome,
            "email":email,
            "senha":senha,
            "repSenha":repSenha,
            "endereco":endereco,
            "numero":numero,
            "nascimento":nascimento,
            "estado":estado,
            "cidade":cidade,
            "telefone":telefone,
            "cep":cep,
            "bairro":bairro,
        }

        if(senha === ''){
            alert("campo senha está vazio")
        }else{
            if(senha === repSenha){
                zerarTudo()
            }else{
                alert("As Senhas não estão idênticas")
            }
        }

        

        console.log(objeto)
    }

    function zerarTudo(){
        setNome('');
        setEmail('');
        setSenha('');
        setRepSenha('');
        setEndereco('');
        setNumero('');
        setNascimento('');
        setEstado('');
        setCidade('');
        setTelefone('');
        setBairro('');
        setCep('');
    }

    var style = {width:'10vw', marginLeft:'3px'}
    var style2 = {width:'25vw',marginLeft:'3px' }
    var style3 = {width:'5vw',marginLeft:'3px' }
return(
    <div className="meuform">
        <h3>Formulário de Cadastro</h3>
        <br />
        <div className='item'>
        <label>Nome:</label>
        <input type="text" placeholder="Digite seu Nome" value={nome} onChange={(e)=>setNome(e.target.value)} required/>
        </div>
        <div className='item'>
        <label>Email:</label>
        <input type="email" placeholder="Digite seu Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className='item'>
        <label>Senha:</label>
        <input type="password" placeholder="Digite sua Senha" value={senha} onChange={(e)=>setSenha(e.target.value)} required />
        </div>
        <div className='item'>
        <label>Repetir Senha:</label>
        <input type="password" placeholder="Repita sua Senha" value={repSenha} onChange={(e)=>setRepSenha(e.target.value)} required />
        </div>
        <div className='item'>
        <label>Endereço:</label>
        <input type="text" style={style2} placeholder="Digite seu Endereço" value={endereco} onChange={(e)=>setEndereco(e.target.value)} required />
        <label>Número:</label>
        <input type="text" style={style}  placeholder="Número" value={numero} onChange={(e)=>setNumero(e.target.value)} required />
        </div>
        <div className='item'>
        <label>Bairro:</label>
        <input type="text" style={style}  placeholder="Bairro" value={bairro} onChange={(e)=>setBairro(e.target.value)} required />
        <label>CEP:</label>
        <input type="text" style={style}  placeholder="CEP" value={cep} onChange={(e)=>setCep(e.target.value)} required />
        <label>Telefone:</label>
        <input type="text" style={style}  placeholder="Telefone" value={telefone} onChange={(e)=>setTelefone(e.target.value)} required />
        </div>
        <div className='item'>
            <div>
                <label>Data Nascimento:</label>
                <input type="date" placeholder="Data Nascimento"  style={style} value={nascimento} onChange={(e)=>setNascimento(e.target.value)} required />
                <label>Cidade:</label>
                <input type="text" placeholder="Cidade"  style={style} value={cidade} onChange={(e)=>setCidade(e.target.value)} required />
                <label>Estado:</label>
                <select placeholder="Estado" style={style3} value={estado} onChange={(e) => setEstado(e.target.value)}>{listaEstados()}</select>
            </div>
        </div>
        <div className='centralizado'>
        <button className='btn1' onClick={()=>props.setPagina('Home')}>Voltar</button>
        <button className='btn1' onClick={mostraAlgo}>Cadastrar</button>
        </div>
        
    </div>
);
}