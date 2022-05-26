import Button from '@mui/material/Button';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import {
  usePopupState,
  bindHover,
  bindPopover,
} from 'material-ui-popup-state/hooks';
import NavLink from './NavLink';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import DesktopDropDown from './DesktopDropDown'

export default function DeskNav({ label, href, childrens, navClose }) {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  })

  return (
    <ListItem>
      {childrens ? (
        <>
          <Button
            sx={{ textTransform: 'none', fontSize: '1rem' }}
            variant="text"
            color="inherit"
            {...bindHover(popupState)}
          >
            {label}
            <ExpandMoreIcon />
          </Button>
          <HoverPopover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <DesktopDropDown navClose={popupState.close} childrens={childrens} />
          </HoverPopover>
        </>
      ) : (
        <NavLink href={href} label={label} navClose={navClose} />
      )}
    </ListItem>
  );
}
