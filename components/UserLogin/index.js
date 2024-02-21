import {
  StyledLoginGridPage,
  StyledLogin,
  StyledLoginCard,
  ProviderButton,
  StyledDivider,
} from "./UserLogin.styled";
import UserLoginForm from "@components/UserLoginForm";

export default function UserLogin() {
  return (
    <StyledLoginGridPage>
      <StyledLogin>
        <StyledLoginCard>
          <UserLoginForm />
          <StyledDivider $text="or" />
          <ProviderButton
            provider="GitHub"
            $backcolor="#24292f"
            $textcolor="var(--color-white)"
          />
        </StyledLoginCard>
      </StyledLogin>
    </StyledLoginGridPage>
  );
}
