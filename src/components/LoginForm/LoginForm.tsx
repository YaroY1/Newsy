import { Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

interface LoginFormValues {
    email: string;
    password: string;
}

const LoginForm = () => {
    const {register, handleSubmit}= useForm<LoginFormValues>();

    const logUserIn = ({email, password}: LoginFormValues) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log(("Successfully login user"))
        })
        .catch((err) => `Failed to login user, ${err.message}`)
          
      };
  return (
    <form 
    onSubmit={handleSubmit(logUserIn)} 
    style={{ display: "flex", flexDirection: "column" }}>
  <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
    Login
  </Typography>
  <TextField
    type="email"
    placeholder="email"
    variant="outlined"
    sx={{ display: "block", mx: "auto", my: ".5rem" }}
    {...register("email", {required: true})}
  />
  <TextField
    type="password"
    placeholder="password"
    variant="outlined"
    sx={{ display: "block", mx: "auto", my: ".5rem" }}
    {...register("password", {required: true})}
  />
  <Button variant='contained' type='submit' sx={{display: 'block', mx: 'auto'}}>Log in</Button>
</form>
  )
}

export default LoginForm


