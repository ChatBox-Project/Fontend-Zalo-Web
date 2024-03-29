import {Link as RouterLink} from "react-router-dom"
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import AuthSocial from "./AuthSocial";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{mb:5 ,position:"relative"}}>
        <Typography variant="h5">Đăng Nhập</Typography>
        <Stack direction={'row'} spacing={0.5}>
            <Typography variant="body2">Bạn chưa có tài khoản?</Typography>
            <Link to={"/auth/register"} component={RouterLink} variant="subtitle2">
                Tạo tài khoản mới
            </Link>
        </Stack>
        {/*Login form */}
        <LoginForm />
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
