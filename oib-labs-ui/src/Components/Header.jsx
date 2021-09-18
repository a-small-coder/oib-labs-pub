import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import{ Container } from "@material-ui/core"
import './styles/Menu.scss';
import { NavLink, Link } from "react-router-dom";

function Header(props) {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const variant = "Вариант № 5"
    const menuItems = [
        {id: 1, title: 'lab1', slug: 'slug1'} ,
        {id: 2, title: 'lab2', slug: 'slug2/login'},
        {id: 3, title: 'lab3', slug: 'slug3'} ,
        {id: 4, title: 'lab4', slug: 'slug4'},
        {id: 5, title: 'lab5', slug: 'slug5'} ,
    ]
    const menuSideItems = [
        {id: 1, title: 'Профиль', link: 'profile'} ,
        {id: 2, title: 'Отчеты', link: 'docs'},
    ]
    const menuElements = menuItems.map(mel => (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} key={mel.id} className="main-menu__item">
            <NavLink to={`/${mel.slug}`} activeClassName="navlink_selected" className="navlink">
                {mel.title}
            </NavLink>
        </Typography>
    ))

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getAuth = (auth, menuItems) =>{
        if (!auth){
            return  null
        }
        const menuElements = menuItems.map(mel => (
            <MenuItem onClick={handleClose} key={mel.id}><Link to={`/${mel.link}`}>{mel.title}</Link></MenuItem>
        ))
        return (
            <div>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {menuElements}
                </Menu>
            </div>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static">
                <Container fixed>
                    <Toolbar sx={{ justifyContent: "space-beetwen"}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className="menu-burger"
                        >
                            <MenuIcon />
                        </IconButton>
                        {menuElements}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="space"></Typography>
                        {getAuth(auth, menuSideItems)}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 0 }} >{variant}</Typography>
                    </Toolbar>
                </Container>
                
            </AppBar>
        </Box>
      );
}

export default Header;