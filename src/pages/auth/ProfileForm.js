import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Button,
  Stack,
} from "@mui/material";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
const ProfileForm = () => {
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Tên là bắt buộc"),
    about: Yup.string().required(''),
    avatarUrl: Yup.string().required("Avatar is required").nullable(true),
  });
  const defaultValues = {
    name : "Thành Trần",
    about:  "",

  };
  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });
  const {
    reset,
    watch,
    setValue,
    control,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessfulSuccessful },
  } = methods;

  const values           = watch();
  const handleDrop = useCallback((acceptedFiles)=>{
    const file = acceptedFiles[0];
    const newFile = Object.assign(file,{
        preview : URL.createObjectURL(file)
    })
    if (file) {
        setValue("avatarUrl",newFile,{shouldValidate:true});
    }
  },[setValue]);
  const onSubmit = async (data) => {
    try {
        console.log("Data",data);
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
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <RHFTextField name="name" label="Name" helperText={"Tên..."} />
        <RHFTextField multiline rows={4} maxRows={5}  name="about" label="About" />
      </Stack>
      <Stack direction={"row"} justifyContent={"flex-end"}>
        <Button color="primary" size="large" type="submit" variant="outlined">
            Lưu
        </Button>
      </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
