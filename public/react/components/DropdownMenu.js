import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
                <MenuItem onClick={handleClose}>Aircraft Carriers</MenuItem>
                <MenuItem onClick={handleClose}>Aircrafts</MenuItem>
                <MenuItem onClick={handleClose}>About Us</MenuItem>
                <MenuItem onClick={handleClose}>Help</MenuItem>
                <MenuItem onClick={handleClose}>FAQ</MenuItem>
                <MenuItem onClick={handleClose}>Partners</MenuItem>
            </Menu>
        </div>
    );
}