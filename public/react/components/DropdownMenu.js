import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'

export default function SimpleMenu({ anchorEl, close }) {
    function handleClose() {
        close()
    }
    return (
        <div>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >   
                <Link to="/"><MenuItem onClick={handleClose}>Aircraft Carriers</MenuItem></Link>
                <Link to="/aircrafts"><MenuItem onClick={handleClose}>Aircrafts</MenuItem></Link>
                <Link to="/about"><MenuItem onClick={handleClose}>About Us</MenuItem></Link>
                <Link to="/help"><MenuItem onClick={handleClose}>Help</MenuItem></Link>
                <Link to="/FAQ"><MenuItem onClick={handleClose}>FAQ</MenuItem></Link>
                <Link to="/partners"><MenuItem onClick={handleClose}>Partners</MenuItem></Link>
            </Menu>
        </div>
    );
}