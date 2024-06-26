import * as Yup from "yup";

export const loginSchema = Yup.object({
  // name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first Name "),
  LastName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your Last Name "),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
});
