import { Divider, IconButton, Stack } from '@mui/material'
import { FacebookLogo, GithubLogo, GoogleLogo } from 'phosphor-react'
import React from 'react'

const AuthSocial = () => {
  return (
    <div>
        <Divider sx={{my:2.5 , typography:'overline', color:'text.disable'}}>
            OR 
        </Divider>
        <Stack direction={'row'} justifyContent={'center'} spacing={2}>
            <IconButton>
                <GoogleLogo color='red' />
            </IconButton>
            <IconButton>
                <GithubLogo/>
            </IconButton>
            <IconButton>
                <FacebookLogo color='blue' />
            </IconButton>
        </Stack>
    </div>      
  )
}

export default AuthSocial