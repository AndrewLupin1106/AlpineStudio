import React from 'react';
import { useState, useEffect } from "react";
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';
import PropTypes from 'prop-types';

// components
import Profile from './Profile';
import Image from "next/image";
import logo from "public/images/logos/logo.svg";

interface ItemType {
  toggleMobileSidebar:  (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({toggleMobileSidebar}: ItemType) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 10; // adjust to your preference
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: isScrolled ? "rgba(255, 255, 255, 0.3)" : "black",
    width: isScrolled ? "90%" : "100%",
    borderRadius: isScrolled ? "24px": 0,
    border: isScrolled ? "1px solid rgba(255, 255, 255, 0.2)" : 'none',
    margin: 'auto',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          size="large"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
        >
          <Image
            src={logo}
            alt="img"
          />
        </IconButton>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
