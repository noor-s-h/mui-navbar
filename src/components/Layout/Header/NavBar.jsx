import { useState } from 'react';
import MobileNav from './MobileNav';
import NavData from './NavData';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import DeskNav from './DeskNav';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AuthBtn from './AuthBtn';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NavBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [nav, setNavOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  const navToggle = () => {
    setNavOpen(!nav);
  };

  const navClose = () => {
    setNavOpen(close);
  };

  return (
    <Box
      component="nav"
      sx={{
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Logo navClose={navClose} />
      {matches ? (
        <>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 'auto' }}
            onClick={navToggle}
          >
            {nav ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Collapse in={nav} timeout="auto" unmountOnExit>
            <List
              sx={{
                position: 'fixed',
                top: '3.1rem',
                left: '0',
                right: '0',
                background: '#fff',
                boxShadow: 'rgb(170 180 190 / 30%) 0px 4px 20px',
              }}
            >
              {NavData.map((item, index) => (
                <MobileNav key={index} {...item} navClose={navClose} />
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <>
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            {NavData.map((item, index) => (
              <DeskNav key={index} {...item} />
            ))}
          </List>
        </>
      )}
      <AuthBtn navClose={navClose} />
    </Box>
  );
}
