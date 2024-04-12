import React from "react";
import FormBase from "../../components/form/formBase";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";
import { Box, Link } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      const user = { email: "example@example.com", password: "password123" };
      if (values.email === user.email && values.password === user.password) {
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
      resetForm();
    },
  });

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "120vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "25%",
          zIndex: 1, // Set a higher z-index for the form box
        }}
      >
        <FormBase
          title="Login"
          buttonText="Log In"
          LinkDesc="Don't have an account?"
          linkText="Sign Up"
          linkTo="/signUp"
          handleSubmit={formik.handleSubmit}
          inputFields={[
            {
              id: "email",
              name: "email",
              type: "email",
              label: "Email",
              error: formik.touched.email && Boolean(formik.errors.email),
              helperText: formik.touched.email && formik.errors.email,
              value: formik.values.email,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
            },
            {
              id: "password",
              name: "password",
              type: "password",
              label: "Password",
              error: formik.touched.password && Boolean(formik.errors.password),
              helperText: formik.touched.password && formik.errors.password,
              value: formik.values.password,
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
            },
          ]}
        />
      </Box>
      <Box sx={{ textAlign: "center", zIndex: 2, mt: 55 }}>
        <Link href="/forgotPassword" sx={{ color: "#000000" }}>
          Forgot Password?
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
