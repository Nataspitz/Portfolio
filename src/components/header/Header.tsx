import { useState } from 'react'
import { StyleHeader } from './StyleHeader'
import { TiThMenu } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'


export function Header(){
    const [openMenu, setOpenMenu] = useState(false)

    const menuEvents = () =>{
        if(openMenu){
            setOpenMenu(false)
        }else(
            setOpenMenu(true)
        )
    }

    return(
        <StyleHeader>
            <div className='containerHeader'>
                <h2>Natâ</h2>
                <div onClick={menuEvents}>
                    { !openMenu ? <TiThMenu/> : <FaTimes/>}
                </div>
            </div>
            {openMenu? (
                    <div className='menu'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/projetos'>Projetos</Link></li>
                            <li><Link to='/contatos'>Contatos</Link></li>
                            <li><Link to='/midias'>Midias Digitas</Link></li>
                        </ul>
                    </div>
                ) : null}
        </StyleHeader>
    )
}