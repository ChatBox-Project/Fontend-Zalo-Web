import { Link, Stack, Typography } from '@mui/material'
import {Link as RouterLink} from "react-router-dom"
import React from 'react'
import { CaretLeft } from 'phosphor-react'
import ResetPassForm from './ResetPassForm'

const ResetPassword = () => {
  return (
    <Stack spacing={2} sx={{mb:5 , position:'relative'}}>
        <Typography variant='h4' paragraph>Quên Mật Khẩu</Typography>
        <Typography>Nhập địa chỉ email mà bạn đăng kí tương ứng với tài khoản , mật khẩu mới sẽ gửi về email cho bạn</Typography>
        {/*Reset password*/}
        <ResetPassForm />
        <Link component={RouterLink} to="/auth/login" color={"inherit"} variant='subtitle2'sx={{mt:3,mx:"auto",alignItems:'center', display:'inline'}}> 
            <CaretLeft/>
            Quay lại trang đăng nhập
        </Link>
    </Stack>
  )
}

export default ResetPassword