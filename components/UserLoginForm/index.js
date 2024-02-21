import {
  StyledForm,
  StyledInputContainer,
  StyledLabel,
  StyledInput,
} from "./UserLoginForm.styled";
import { StyledProviderButton } from "../UserLoginForm/UserLoginForm.styled";

export default function UserLoginForm() {
  const handleSignIn = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("sign in with credentials");
    console.log(data.email);
    signIn("credentials", { callbackUrl: "/" });
  };
  return (
    <StyledForm>
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
        onClick={handleSignIn}
        provider="Credentials"
        $backcolor="var(--color-gray3)"
        $textcolor="var(--color-black)"
      >
        <span>Sign in with Email & Password</span>
      </StyledProviderButton>
    </StyledForm>
  );
}
