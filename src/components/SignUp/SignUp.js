import React from "react";
import { Grid} from "@material-ui/core";
import SignUpForm from "./Forms/SignUpForm";

const Signup = ({setRegister}) => {

  return (
    <Grid container justifyContent="center">
      <SignUpForm setRegister={setRegister}/>
    </Grid>
  );
};

export default Signup;
