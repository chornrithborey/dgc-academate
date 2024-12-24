import React from "react";
import {
  Box,
  TextField,
  FormLabel,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Link,
  Stack,
  Checkbox,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface AuthFormProps {
  title: string;
  showPasswordField?: boolean;
  showRememberMe?: boolean;
  onSubmit: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  showPasswordField = true,
  showRememberMe = true,
  onSubmit,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        borderRadius: "24px",
        border: "1px solid #E0E0E0",
        textAlign: "center",
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <FormLabel sx={{ display: "block", textAlign: "left", marginTop: "1rem" }} htmlFor="email">
        Email or phone number
      </FormLabel>
      <TextField
        slotProps={{ input: { sx: { borderRadius: "12px" } } }}
        placeholder="Enter your email/phone number"
        variant="outlined"
        fullWidth
      />
      {showPasswordField && (
        <>
          <FormLabel sx={{ display: "block", textAlign: "left", marginTop: "1rem" }} htmlFor="password">
            Password
          </FormLabel>
          <OutlinedInput
            sx={{ borderRadius: "12px" }}
            fullWidth
            id="outlined-adornment-password"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </>
      )}
      {showRememberMe && (
        <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
          <div>
            <Checkbox size="small" />
            <Typography color="grey" variant="caption">
              Remember me
            </Typography>
          </div>
          <Link color="textPrimary" href="#" variant="body2">
            Forgot password?
          </Link>
        </Stack>
      )}
      <Button
        disableElevation
        variant="contained"
        fullWidth
        sx={{
          borderRadius: "12px",
          marginTop: "1rem",
        }}
        onClick={onSubmit}
      >
        {title}
      </Button>
      <Box display={"flex"} flexDirection="column" justifyContent="center" alignItems="center" mt={2}>
        <Link color="textPrimary" href="#" variant="body2">
          Other issues with sign in?
        </Link>
        <Typography color="grey" variant="caption" textAlign="center" mt={1}>
          By continuing, you agree to the{" "}
          <Link href="#" color="textPrimary" variant="caption">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="#" color="textPrimary" variant="caption">
            Privacy Notice
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthForm;