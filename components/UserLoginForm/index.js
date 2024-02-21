import {
  StyledForm,
  StyledInputContainer,
  StyledLabel,
  StyledInput,
} from "./UserLoginForm.styled";
import { StyledProviderButton } from "../UserLogin/UserLogin.styled";
import { signIn } from "next-auth/react";
import Router from "next/router";

export default function UserLoginForm({ purpose }) {
  const handleSignIn = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    signIn("credentials", { callbackUrl: "/", ...data });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("User is created");
      Router.push("/user/login");
    } else if (response.status === 400) {
      console.log("Email is already in use");
    } else {
      console.log("Error", response.error);
    }
  };

  if (purpose === "login") {
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
        <StyledProviderButton
          onClick={() => Router.push("/user/register")}
          provider="Credentials"
          $backcolor="var(--color-gray4)"
          $textcolor="var(--color-warning)"
          style={{ marginTop: "1rem" }}
        >
          <span>NEW? Register Account here</span>
        </StyledProviderButton>
      </StyledForm>
    );
  } else if (purpose === "register") {
    return (
      <StyledForm onSubmit={handleRegister}>
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
          <span>Register new with Email & Password</span>
        </StyledProviderButton>
      </StyledForm>
    );
  } else {
    return (
      <p style={{ color: "var(--color-warning)" }}>
        missing purpose @ UserLoginForm
      </p>
    );
  }
}
