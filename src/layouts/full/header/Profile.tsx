import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";

import { IconListCheck, IconMail, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import menu from "public/images/logos/Menu.svg";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [menuClicked, setMenuClicked] = useState(false);
  const [menuButtonPosition, setMenuButtonPosition] = useState();
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
    setMenuClicked(true);

    setMenuButtonPosition(event.currentTarget.getBoundingClientRect());
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
    setMenuClicked(false);
  };


  return (
    <Box>
      {!menuClicked && (
      <IconButton
        size="large"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
        className="menu-button"
      >
        <Typography style={{ color: 'white', margin: '0.5rem' }}>Меню</Typography>
        <Image
          src={menu}
          alt="image"
          style={{ padding: '3px' }}
        />
      </IconButton>
      )}
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        anchorReference="anchorPosition"
        anchorPosition={menuButtonPosition}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            width: "20.83vw",
            height: "25.52vw",
            background: 'transparent',
            backgroundColor: 'rgba(128, 128, 128, 0.3)',
            backdropFilter: 'blur(5px)',
            borderRadius: '1rem',
            color: 'white',
            border: 'solid 1px rgba(128, 128, 128, 0.5)'
          },
          "ul": {
            marginTop: '5rem'
          },
          "li:hover":{
            display: 'table'
          },
          "li div": {
            paddingBottom: '1px',
          },
          "li div:hover": {
            paddingBottom: 0,
            borderBottom: '1px solid white',
          },
        }}
      >
        <MenuItem>
          <ListItemText className="menuItemText">Кейсы</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText className="menuItemText">Услуги</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText className="menuItemText">Отзывы</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText className="menuItemText">Контакты</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
