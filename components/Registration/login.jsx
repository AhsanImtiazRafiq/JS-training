import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Stack, TextField, Button } from "@mui/material";

export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={{ xs: 5 }} alignItems="flex-start">
        <TextField
          label="Username"
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
          helperText={errors.username?.message}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
        />
        <Button onClick={() => navigate("/reset-password")}>
          Forgot Password?
        </Button>
        <Button variant="contained" size="lg" fullWidth type="submit">
          Sign in
        </Button>
      </Stack>
    </form>
  );
};
