import { Box, IconButton, Stack, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { CaretLeft } from 'phosphor-react';
import React from 'react'
import ProfileForm from '../auth/ProfileForm';

const Profile = () => {
    const theme = useTheme();
  return (
    <>
    <Stack direction="row" sx={{ width: "100%" }}>
    <Box
        sx={{
          height: "100vh",
          width: 320,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,

          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
         <Stack p={4} spacing={5}>
         <Stack direction="row" alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color={"#4B4B4B"} />
              </IconButton>

              <Typography variant="h5">Profile</Typography>
            </Stack>
            <ProfileForm />
         </Stack>
         {/* Header */}
      </Box>

    </Stack>
    </>
  )
}

export default Profile