import React, { Component } from "react";
import { Container } from "@mui/material";
import { v4 as uuid } from "uuid";
import {connect} from 'react-redux';
import { TextField, Button } from "@mui/material";
import { onGetEmp } from "../../action";

class Form extends Component {
  state = {
    email: "",
    password: "",
    error: {
      emailError: "",
      passwordError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    console.log(e);

    if (e.target.id === "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.id == "password") {
      this.validatePassword(e.target.value);
    }
  };

  validateEmail = (email) => {
    let formValid = this.state.formValid;
    let emailError = this.state.error.emailError;

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(email)) {
      emailError = "Please enter valid email";
      formValid = false;
    } else {
      emailError = "";
      formValid = true;
    }

    this.setState({
      email,
      formValid,
      error: { ...this.state.error, emailError },
    });

    return formValid;
  };

  validatePassword = (password) => {
    let formValid = true;
    
    //add validation
    this.setState({
      password,
      formValid,
    });
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.validateEmail(this.state.email) &&
      this.validatePassword(this.state.password)
    ) {
      const unique_id = uuid().slice(0, 8); //hiej89e00ej

      this.props.onGetEmployee({ ...this.state, id: unique_id });

      alert("Thank you for submitting the form");
      this.setState({
        email: "",
        password: "",
      });
    }
  };

  render() {
    return (
      <Container
        maxWidth="sm"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <TextField
          id="email"
          variant="outlined"
          label="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <p style={{ color: "red" }}>{this.state.error.emailError}</p>

        <TextField
          id="password"
          variant="outlined"
          label="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <p>{this.state.error.passwordError}</p>
        <Button variant="contained" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetEmployee: (emp) => dispatch(onGetEmp(emp)) 
  }
}

export default connect(null, mapDispatchToProps)(Form);
