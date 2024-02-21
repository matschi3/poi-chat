import {
  StyledForm,
  StyledInputContainer,
  StyledLabel,
  StyledInput,
} from "./UserLoginForm.styled";
import { StyledProviderButton } from "../UserLogin/UserLogin.styled";
import { signIn } from "next-auth/react";

export default function UserLoginForm() {
  const handleSignIn = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("sign in with credentials");
    console.log(data.email);
    console.log(data.password);
    /* signIn("credentials", { callbackUrl: "/" }); */
  };
  return (
    <StyledForm onSubmit={handleSignIn}>
      <StyledInputContainer>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          name="email"
          placeholder="mail@provider.com"
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput type="password" id="password" name="password" />
      </StyledInputContainer>
      <StyledProviderButton
        type="submit"
        provider="Credentials"
        $backcolor="var(--color-gray3)"
        $textcolor="var(--color-black)"
      >
        <span>Sign in with Email & Password</span>
      </StyledProviderButton>
    </StyledForm>
  );
}
