import { Box } from "@mui/material";
import React from "react";
import FormBase from "../../components/form/formBase";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm();
    },
  });

  // Log initial values
  console.log("Initial Values:", formik.initialValues);

  return (
    <Box sx={{ backgroundColor: "#13082A" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "25%",
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
              name: "password", // Remove the extra space
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
    </Box>
  );
};

export default Login;
