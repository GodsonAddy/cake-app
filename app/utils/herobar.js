"use client";
import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import {
  montserrat,
  montserrat500,
  cinzel,
  cinzel700,
  montserrat600,
} from "../font";
import {
  AppBar,
  Typography,
  Button,
  Grid,
  Toolbar,
  Container,
  Box,
  Menu,
  MenuItem,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Paper,
  MenuList,
  ClickAwayListener,
  Grow,
  Popper,
  Collapse,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter, usePathname } from "next/navigation";
import MUILink from "@mui/material/Link";
import { StyledList, pages } from "./mobilebar";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 30,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function HeroBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const anchorRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = () => {
    // const scrollTop = window.pageYOffset;
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setOpenDropdown(true);
  };
  const handleToggleClose = (event) => {
    setOpenDropdown(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenDropdown(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenDropdown(false);
    } else if (event.key === "Escape") {
      setOpenDropdown(false);
    }
  }

  const prevOpen = useRef(openDropdown);
  useEffect(() => {
    if (prevOpen.current && !openDropdown) {
      anchorRef.current.focus();
    }

    prevOpen.current = openDropdown;
  }, [openDropdown]);

  const handleMenuOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };

  const handleMobileClick = () => {
    setMobileOpen(!mobileOpen);
  };

  const birthdays = pathname === "/birthdays";
  const weddings = pathname === "/weddings";
  const asian = pathname === "/asian";
  const occasions = pathname === "/occasions";
  const portfolio = pathname === "/portfolio";
  const mainpage = pathname === "/";
  const about = pathname === "/about";
  const quote = pathname === "/quote";
  const training = pathname === "/training";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        component="nav"
        sx={{
          color: "tertiary.main",
          backgroundColor:
            isScrolled && (mainpage || training)
              ? "tertiary.main"
              : isScrolled
              ? "secondary.main"
              : "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            <Box>
              <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
                columnSpacing={11}
              >
                {!(mainpage || training) && (
                  <Grid item mr={5} mt={3}>
                    <Link href="/">
                      <Image
                        src="/logo_black.png"
                        width={64}
                        height={69}
                        alt="logo"
                        priority
                        placeholder="blur"
                        blurDataURL="/logo_black.png"
                      />
                    </Link>
                  </Grid>
                )}
                {(mainpage || training) && (
                  <Grid item mb={-2}>
                    <Link href="/">
                      <Image
                        src="/logo_white.png"
                        width={145}
                        height={128}
                        alt="logo"
                        priority
                        placeholder="blur"
                        blurDataURL="/logo_white.png"
                      />
                    </Link>
                  </Grid>
                )}
                <Grid item>
                  <Link href="/about">
                    <Button
                      variant="text"
                      color={
                        isScrolled && about
                          ? "primary"
                          : mainpage || about || training
                          ? "secondary"
                          : "tertiary"
                      }
                      sx={{
                        fontSize: 16,
                      }}
                      style={montserrat600.style}
                    >
                      ABOUT US
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/portfolio">
                    <Button
                      variant="text"
                      color={
                        portfolio
                          ? "primary"
                          : mainpage || training
                          ? "secondary"
                          : "tertiary"
                      }
                      sx={{
                        fontSize: 16,
                      }}
                      style={montserrat600.style}
                    >
                      OUR SHOWCASE
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button
                    variant="text"
                    color={
                      about && isScrolled
                        ? "tertiary"
                        : mainpage || about || training
                        ? "secondary"
                        : "tertiary"
                    }
                    sx={{
                      fontSize: 16,
                    }}
                    style={montserrat600.style}
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={
                      openDropdown ? "composition-menu" : undefined
                    }
                    aria-expanded={openDropdown ? "true" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handleToggle}
                    onMouseLeave={handleToggleClose}
                  >
                    OCCASIONS
                  </Button>

                  <Popper
                    open={openDropdown}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    onMouseLeave={handleClose}
                    onMouseEnter={handleToggle}
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper
                          sx={{
                            py: 1,
                            mt: 3.5,
                            backgroundColor: "#f0f0f0",
                          }}
                        >
                          <Container>
                            <ClickAwayListener
                              onClickAway={handleClose}
                              //onMouseLeave={handleClose}
                            >
                              <MenuList
                                autoFocusItem={openDropdown}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                              >
                                <MUILink href="/weddings" underline="none">
                                  <MenuItem
                                    onClick={handleClose}
                                    sx={{
                                      fontSize: 14,
                                    }}
                                    style={montserrat600.style}
                                    color="tertiary"
                                  >
                                    WEDDINGS
                                  </MenuItem>
                                </MUILink>

                                <MUILink href="/birthdays" underline="none">
                                  <MenuItem
                                    onClick={handleClose}
                                    sx={{
                                      fontSize: 14,
                                      mt: 1,
                                    }}
                                    style={montserrat600.style}
                                    color="tertiary"
                                  >
                                    BIRTHDAYS
                                  </MenuItem>
                                </MUILink>

                                <MUILink href="/occasions" underline="none">
                                  <MenuItem
                                    onClick={handleClose}
                                    sx={{
                                      fontSize: 14,
                                      mt: 1,
                                    }}
                                    style={montserrat600.style}
                                    color="tertiary"
                                  >
                                    SPECIAL OCCASIONS
                                  </MenuItem>
                                </MUILink>

                                <MUILink href="/asian" underline="none">
                                  <MenuItem
                                    onClick={handleClose}
                                    sx={{
                                      fontSize: 14,
                                      mt: 1,
                                    }}
                                    style={montserrat600.style}
                                    color="tertiary"
                                  >
                                    ASIAN
                                  </MenuItem>
                                </MUILink>
                              </MenuList>
                            </ClickAwayListener>
                          </Container>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </Grid>

                <Grid item>
                  <Link href="/quote">
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: 16,
                        backgroundColor: "primary.main",
                        color: "secondary.main",
                        "&:hover": {
                          backgroundColor: "secondary.main",
                          color: "tertiary.main",
                        },
                      }}
                      style={montserrat600.style}
                    >
                      REQUEST A QUOTE
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
          {/* App bar mobile */}
          {(mainpage || about || training) && !(isScrolled && about) && (
            <Box sx={{ display: { xs: "flex", lg: "none" }, flexGrow: 1 }}>
              <Image
                src="/logo_white.png"
                width={108}
                height={108}
                alt="logo"
                priority
                placeholder="blur"
                blurDataURL="/logo_white.png"
              />
            </Box>
          )}
          {!(mainpage || about || training) && (
            <Box sx={{ display: { xs: "flex", lg: "none" }, flexGrow: 1 }}>
              <Link href="/">
                <Image
                  src="/logo_black.png"
                  width={64}
                  height={69}
                  alt="logo"
                  priority
                  placeholder="blur"
                  blurDataURL="/logo_black.png"
                />
              </Link>
            </Box>
          )}

          {about && isScrolled && (
            <Box sx={{ display: { xs: "flex", lg: "none" }, flexGrow: 1 }}>
              <Link href="/">
                <Image
                  src="/logo_black.png"
                  width={64}
                  height={69}
                  alt="logo"
                  priority
                  placeholder="blur"
                  blurDataURL="/logo_black.png"
                />
              </Link>
            </Box>
          )}

          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MenuIcon
                color={
                  isScrolled && about
                    ? "tertiary"
                    : mainpage || about || training
                    ? "secondary"
                    : "tertiary"
                }
              />
            </IconButton>

            <BootstrapDialog
              onClose={handleMenuClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              fullScreen
              sx={{
                display: { xs: "block", lg: "none" },
              }}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleMenuClose}
              >
                <Link href="/">
                  <Image
                    src="/logo_black.png"
                    width={64}
                    height={69}
                    alt="logo"
                    priority
                    placeholder="blur"
                    blurDataURL="/logo_black.png"
                  />
                </Link>
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <StyledList>
                  {pages.map(({ id, name, url, items }) => {
                    return (
                      <Box key={id}>
                        {items !== null ? (
                          <Box key={id}>
                            <ListItemButton onClick={handleMobileClick}>
                              <ListItemText
                                primary={name}
                                primaryTypographyProps={{
                                  fontSize: 16,
                                }}
                                style={montserrat600.style}
                              />
                              {mobileOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse
                              in={mobileOpen}
                              timeout="auto"
                              unmountOnExit
                            >
                              <List component="div" disablePadding>
                                {items.map(
                                  ({
                                    id: childKey,
                                    name: childLabel,
                                    url: childLink,
                                  }) => (
                                    <MUILink
                                      href={childLink}
                                      key={childKey}
                                      underline="none"
                                    >
                                      <ListItemButton
                                        key={childKey}
                                        selected={pathname === childLink}
                                      >
                                        <ListItemText
                                          primary={childLabel}
                                          primaryTypographyProps={{
                                            ml: 3,
                                            fontSize: 13,
                                          }}
                                          style={montserrat.style}
                                        />
                                      </ListItemButton>
                                    </MUILink>
                                  )
                                )}
                              </List>
                            </Collapse>
                          </Box>
                        ) : (
                          <MUILink href={url} underline="none">
                            <ListItemButton
                              key={id}
                              selected={pathname === url}
                            >
                              <ListItemText
                                primary={name}
                                primaryTypographyProps={{
                                  fontSize: 16,
                                }}
                                style={montserrat600.style}
                              />
                            </ListItemButton>
                          </MUILink>
                        )}
                        <Divider />
                      </Box>
                    );
                  })}
                </StyledList>
              </DialogContent>
            </BootstrapDialog>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
