import Logo from './Logo';
import Navbar from './Navbar';
// import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { AppBar, Toolbar } from '@mui/material';



const useStyles = makeStyles({
    nav: {
         background: '#ffffff !important',
        width: "100%",
        boxShadow: 'none !important'
    },
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.nav}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters className={classes.navbar}>
                        <Logo />
                        <Navbar />
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    )

}

export default Header