import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Paper, Stack, Typography } from "@mui/material";
import InputBase from "../inputBase";
import Button from "../../button";
import { Link } from "react-router-dom";

const FormBase = ({
  title,
  buttonText,
  linkText,
  linkTo,
  LinkDesc,
  inputFields,
  handleSubmit,
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={4} className={classes.formContainer}>
      <Typography className={classes.formCaption}>{title}</Typography>
      <form
        className={classes.formBase}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {inputFields.map((value, index) => (
          <InputBase
            key={index}
            label={value.label}
            name={value.name}
            type={value.type}
            value={value.value}
            onChange={value.onChange}
            error={value.error}
            helperText={value.helperText}
            onBlur={value.onBlur}
          />
        ))}
        <Box className={classes.formActions}>
          <Button variant="contained" onClick={(e) => console.log("submited")}>
            {buttonText}
          </Button>
          <Stack direction="row" gap={1} justifyContent="center">
            <Typography>{LinkDesc}</Typography>
            <Link to={linkTo}>{linkText}</Link>
          </Stack>
        </Box>
      </form>
    </Paper>
  );
};

export default FormBase;

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: "2rem",
    textAlign: "center",
    width: "100%",
  },
  formCaption: {
    fontSize: "1.875rem !important",
    fontWeight: "700 !important",
    marginBottom: "1rem !important",
  },
  formBase: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1.5rem",
  },
  formActions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "0.5rem",
  },
}));
