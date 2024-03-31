import { Box, Divider, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";
import { Nav_Buttons, Profile_Menu } from "../../data";
import avatar from "../../assets/Images/avatar.jpg";
import { Gear } from "phosphor-react";
import { useNavigate } from "react-router-dom";
const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/group";
    case 2:
      return "/call";
    case 3:
      return "/profile";
    default:
      break;
  }
};

const getMenuPath = (index) => {
  switch (index) {
    case 0:
      return "/profile";
    case 1:
      return "/settings";
    case 2:
      return "/auth/login";
    default:
      break;
  }
};
const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: "#323ea8",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack direction="column" alignItems={"center"} sx={{ width: "100%" }}>
        <Box
          sx={{
            backgroundColor: "black",
            height: 64,
            width: 64,
            borderRadius: "50%",
            objectFit: "scale-down",
          }}
        >
          <img src={avatar} alt={"Chat App"} />
        </Box>
        <Stack spacing={5} p={4}>
          {Nav_Buttons.map((el) =>
            el.index === selected ? (
              <Box p={1} sx={{ backgroundColor: "blue", borderRadius: "15px" }}>
                <IconButton
                  sx={{ width: "max-content", color: "#fff" }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(el.index);
                  navigate(getPath(el.index));
                }}
                sx={{ width: "max-content", color: "#000" }}
                key={el.index}
              >
                {el.icon}
              </IconButton>
            )
          )}
          <Divider sx={{ width: "48px" }} />
          {selected === 3 ? (
            <Box p={1} sx={{ backgroundColor: "black", borderRadius: "15px" }}>
              <IconButton>
                <Gear
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Stack spacing={1} px={1}>
                    {Profile_Menu.map((el, idx) => (
                      <MenuItem
                        onClick={() => {
                          handleClick();
                        }}
                      >
                        <Stack
                          onClick={()=> { navigate(getMenuPath(idx));}}
                          sx={{ width: 100 }}
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <span>{el.title}</span>
                          {el.icon}
                        </Stack>
                      </MenuItem>
                    ))}
                  </Stack>
                </Menu>
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => {
                setSelected(3);
                navigate(getPath(3));
              }}
            >
              <Gear />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
