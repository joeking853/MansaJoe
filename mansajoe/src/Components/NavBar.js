import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
            <appbar position="static">
                <toolbar>
                    <iconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <menuIcon />
                </iconButton>
                <typography variant="h6" className={classes.title}>
                News
                </typography>
                <button color="inherit">Login</button>
                </toolbar>
            </appbar>
        </div>
    )
}

export default NavBar;