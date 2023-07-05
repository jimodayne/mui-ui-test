import { useState } from 'react';

const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, handleOpenMenu, open, handleClose };
};

export default useMenu;
