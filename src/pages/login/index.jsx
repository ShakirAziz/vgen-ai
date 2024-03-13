import { Box } from "@mui/material";
import React from "react";
import FormBase from "../../components/form/formBase";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      console.log("Current Values:", values);
      const user = { email: "example@example.com", password: "password123" };
      if (values.email === user.email && values.password === user.password) {
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
      action.resetForm();
    },
  });
  console.log(formik.values);
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
    </Box>
  );
};

export default Login;
