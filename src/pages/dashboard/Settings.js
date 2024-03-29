import { useTheme } from "@emotion/react";
import { Box, IconButton, Stack, Typography , Avatar} from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { faker } from "@faker-js/faker";

const Settings = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Box
        sx={{
          overflowY: "scroll",
          height: "100vh",
          width: 320,
          backgroundColor: theme.palette.mode ==="light" ? "F8FAFF" : theme.palette.backgroundColor,
          boxShadow: "0px opx 2px rgba(0,0,0,0.25)"
        }}
      >
        <Stack p={4} spacing={5}>
            {/* Header */}
            <Stack direction={'row'} alignItems={'center'} spacing={3}>  
              <IconButton>
                <CaretLeft size={24} color={"#4B4B4B"}  />
              </IconButton>
              <Typography variant="subtitle1">Settings</Typography>
            </Stack>
            {/* Profile */}
            <Stack direction={'row'} spacing={3}>
              <Avatar sx={{width: 56 , height: 56}} src={faker.image.avatar()} alt={faker.name.fullName()} /> 
              <Stack spacing={0.5}>
                  <Typography variant="article">
                    {faker.name.fullName()}
                  </Typography>
                  <Typography variant="body">
                    {faker.random.words()}
                  </Typography>        
               </Stack>
            </Stack>
            {/* List of actions */}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Settings;
