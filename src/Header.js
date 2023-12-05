import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import './Header.css';
import { useState } from 'react';
import Menu from './Menu';
import logo from "./logo.png";

export function Header(){
    const [openMenu, setOpenMenu] = useState(false);

    return(    
    <div>
    <div className='header'>
        <img src={logo} height='100px' width='150px'></img>
        <div className='menu-btn' onClick={()=> setOpenMenu(true)}><IconButton><MenuIcon/></IconButton></div>
    </div>
    {openMenu ? <Menu setOpenMenu={setOpenMenu}/> : null}
    </div>
    
    );
}