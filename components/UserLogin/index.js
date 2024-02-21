import {
  StyledLoginGridPage,
  StyledLogin,
  StyledLoginCard,
  ProviderButton,
  StyledDivider,
} from "./UserLogin.styled";
import UserLoginForm from "../UserLoginForm";

export default function UserLogin({ purpose }) {
  return (
    <StyledLoginGridPage>
      <StyledLogin>
        <StyledLoginCard>
          <UserLoginForm purpose={purpose} />
          {purpose === "login" && (
            <>
              <StyledDivider $text="or" />
              <ProviderButton
                provider="GitHub"
                $backcolor="#24292f"
                $textcolor="var(--color-white)"
              />
            </>
          )}
        </StyledLoginCard>
      </StyledLogin>
    </StyledLoginGridPage>
  );
}
