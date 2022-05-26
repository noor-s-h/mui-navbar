import { useState } from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import NavLink from './NavLink'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MobileDropDown from './MobileDropDown'

export default function MobileNav({ label, href, childrens, navClose }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ListItem sx={{width: '100%', display: "block"}}>
      {childrens ? (
        <>
          <Button variant="link" sx={{ textTransform: 'none', fontSize: '1rem', justifyContent: 'space-between', width: "100%", paddingInline: "0" }} onClick={handleClick}>
            {label}
            <ExpandMoreIcon
              sx={{
                transition: '0.3s',
                transform: open ? 'rotate(180deg)' : 'rotate(0)',
              }}
            />
          </Button>
          <Collapse in={open} animateOpacity>
            <MobileDropDown navClose={navClose} childrens={childrens} />
          </Collapse>
        </>
      ) : (
        <NavLink href={href} label={label} navClose={navClose} />
      )}
    </ListItem>
  );
}
