import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import NavLink from './NavLink';

export default function DeskTopDropDown({ childrens, navClose }) {
  return (
    <>
      <List sx={{ minWidth: '10rem' }}>
        {childrens.map((childrens, index) => (
          <ListItem sx={{ display: "block" }}>
            <NavLink key={index} navClose={navClose} {...childrens} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
