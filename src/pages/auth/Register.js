import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import {Link as RouterLink} from "react-router-dom"
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <Stack spacing={2} sx={{mb:5 , position: "relative"}}>
        <Typography variant="h4">Đăng Kí Tài Khoản</Typography>
        <Stack direction={"row"} spacing={2}>
            <Typography variant='body2'>
                Bạn đã có tài khoản?
            </Typography>
            <Link component={RouterLink} to="/auth/login" variant='subtitle1'> Đăng nhập</Link>
        </Stack>
        {/* form register */}
        <Stack>
            <RegisterForm />
        </Stack>
    </Stack>
  )
}

export default Register