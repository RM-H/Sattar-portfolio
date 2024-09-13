import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {blueGrey} from '@mui/material/colors'

import {Link} from 'react-router-dom'



function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar  position="static" sx={{bgcolor:blueGrey[700] , minHeight:'6rem'  , justifyContent:'center' }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <img className='is-hidden-mobile' src="/images/logo-removebg-preview.png" alt="" style={{maxWidth:'6rem'}}/>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"

                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Dr. Sattarzadeh
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <img src="/images/logo-removebg-preview.png" alt="" style={{maxWidth: '6rem'}}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to='/'>


                                        <Typography sx={{ textAlign: 'center' }}>home </Typography>
                                    </Link>
                                </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/about'>

                                    <Typography sx={{ textAlign: 'center' }}>about</Typography>
                                </Link>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/publications'>

                                    <Typography sx={{ textAlign: 'center' }}>publications</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to='/contact'>

                                    <Typography sx={{ textAlign: 'center' }}>contact info</Typography>
                                </Link>
                            </MenuItem>

                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: 'center' }}>clinic</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Dr. Sattarzadeh
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent:'center' }}>


                        <Link to='/'>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>

                        </Link>



                        <Link to='/about'>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                about
                            </Button>



                        </Link>







                        <Link to='/publications'>


                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                publications
                            </Button>
                        </Link>



                        <Link to='/contact'>
                            <Button

                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                contact info
                            </Button>

                        </Link>









                        <Button

                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            clinic
                        </Button>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;