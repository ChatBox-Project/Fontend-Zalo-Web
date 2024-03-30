import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {Link as RouterLink} from "react-router-dom"
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";
import { ThemeContext } from "@emotion/react";
const NewPassForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string().min(6,"Mật khẩu lớn hơn 6 kí tự").required("Mật khẩu là bắt buộc"),
    confirmNewPass : Yup.string().required("Bắt buộc nhập").oneOf([Yup.ref('newPassword'),null],"Phải khớp với mật khẩu đã nhập"),
  });
  const defaultValues = {
    newPassword: "",
    confirmNewPass:"",
  };
  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessfulSuccessful },
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
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <RHFTextField
          name="newPassword"
          label="Mật Khẩu"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name="confirmNewPass"
          label="Xác nhận lại mật khẩu"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Button
        sx={{
          bgcolor: "text.primary",
          color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover":{
            bgcolor: "text.primary",
            color: (theme) => theme.palette.mode === "light" ?"common.white" : "grey.800",
          }
        }}
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
      >
        Xác Nhận
      </Button>
    </FormProvider>
  );
};

export default NewPassForm;
