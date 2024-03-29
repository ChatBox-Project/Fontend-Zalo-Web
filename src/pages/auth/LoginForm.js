import React , {useState} from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Alert, Button, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email là bắt buộc")
      .email("Email phải hợp lệ"),
    password: Yup.string().required("Mật khẩu là bắt buộc")
  });
  const defaultValues = {
    email: "tranthethanh@gmail.com",
    password: "123",
  };
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors , isSubmitting, isSubmitSuccessfulSuccessful},
  } = methods;

  const onSubmit = async (data) => {
    try {
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
      <RHFTextField name="email" label="Email" />

      <RHFTextField name="password" label="Password"  type={showPassword ? "text" : "password"}
        InputProps={{
            endAdornment:(
                <InputAdornment>
                    <IconButton onClick={()=>{setShowPassword(!showPassword);}}>
                        {showPassword ? <Eye/> : <EyeSlash/>}
                    </IconButton>
                </InputAdornment>
            )
        }}/>
        </Stack>
        <Stack alignItems={'flex-end'} sx={{my:2}}>
            <Link variant="body2" color={"inherit"} underline="always">Quên mật khẩu ?</Link>
        </Stack>
        <Button sx={{bgcolor: 'text.primary', color: (theme)=> theme.palette.mode ==="light"}} fullWidth color="inherit" size="large" type="submit" variant="contained">
            Đăng Nhập
        </Button>
    </FormProvider>
  );
};

export default LoginForm;
