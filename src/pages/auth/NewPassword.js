import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import NewPassForm from "./NewPassForm";
import { CaretLeft } from "phosphor-react";

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography>Mật khẩu mới</Typography>
      </Stack>
      <NewPassForm />
      {/* New pass */}
      <Link
        component={RouterLink}
        to="/auth/login"
        color={"inherit"}
        variant="subtitle2"
        sx={{ mt: 3, mx: "auto", alignItems: "center", display: "inline-flex" }}
      >
        <CaretLeft />
        Quay lại trang đăng nhập
      </Link>
    </>
  );
};

export default NewPassword;
