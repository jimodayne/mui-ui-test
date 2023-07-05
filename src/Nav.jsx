import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import useMenu from './useMenu';

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((open) => !open);
  };

  const { anchorEl, open, handleClose, handleOpenMenu } = useMenu();

  return (
    <nav className="navbar">
      <div>
        <MenuIcon onClick={toggleDrawer} />
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <div>Content of drawer</div>
        </Drawer>
      </div>

      <div className="navbar__user" onClick={handleOpenMenu}>
        <Avatar style={{ marginRight: '4px' }} sx={{ bgcolor: deepOrange[500] }}>
          N
        </Avatar>
        <span>Jim Tran</span>
      </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </nav>
  );
};

export default Nav;
