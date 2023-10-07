import React, { useState } from "react";

import { TextField, Button, Stack } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useCreateUser } from "./queries/helpers";

function SignUpForm(){
    const [formState, setFormState] = useState({
        userName: "",
        email: "",
        password: "",
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();

        // create user functionality on form submit
      };
    return (
        <div className="newAccountFormContainer">
          <form
            className="bg-white m-4 border border-dark rounded text-dark newAccountForm"
            onSubmit={handleFormSubmit}
          >
            <Stack
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <h2>Create a new Account</h2>
              <TextField
                label="Username"
                variant="outlined"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
                size="small"
                margin="normal"
              />
              <TextField
                name="email"
                type="email"
                value={formState.email}
                label="Your Email"
                onChange={handleChange}
                variant="outlined"
                size="small"
                margin="normal"
              />
              <TextField
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                size="small"
                margin="normal"
              />
    
              <Button
                type="submit"
                size="small"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      );
    };
    
function LoginForm(){
    const [formState, setFormState] = useState({
        userName: "",
        password: "",
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();

        // login user functionality on form submit
      };

      return(
        <div>
            <form
            className="bg-white m-4 border border-dark rounded text-dark newAccountForm"
            onSubmit={handleFormSubmit}
          >
            <Stack
              spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <h2>Login to your Account</h2>
              <TextField
                label="Username"
                variant="outlined"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
                size="small"
                margin="normal"
              />
              <TextField
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                size="small"
                margin="normal"
              />
    
              <Button
                type="submit"
                size="small"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      )
};

const User = (props) => {
    const [userType, setUserType] = React.useState('signup');

    const handleToggleChange = (event, newUserType) => {
        setUserType(newUserType);
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // form submit functionality
    };

    return (
        <div>
            <form 
            onSubmit={handleFormSubmit}
            >
                <ToggleButtonGroup
                color="primary"
                value={userType}
                exclusive
                onChange={handleToggleChange}
                aria-lable="Platform"
                >
                    <ToggleButton value="signup">Create an Account</ToggleButton>
                    <ToggleButton value="login">Login to your Account</ToggleButton>
                </ToggleButtonGroup>
                {/* {show signup or login form based on user selection} */}
                { userType === "login" ? <LoginForm/> : <SignUpForm/>}
            </form>
        </div>
    )
}

export default UserPage;