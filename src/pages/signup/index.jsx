import React from "react";
import FormBase from "../../components/form/formBase";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm();
    },
  });
  return (
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
        title="Register"
        buttonText="Register"
        LinkDesc="Already a member?"
        linkText="Login"
        linkTo="/login"
        handleSubmit={formik.handleSubmit}
        inputFields={[
          {
            id: "name",
            name: "name",
            type: "text",
            label: "Name",
            error: formik.touched.name && Boolean(formik.errors.name),
            helperText: formik.touched.name && formik.errors.name,
            value: formik.values.name,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
          },
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
  );
};

export default Signup;
