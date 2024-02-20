import {
  StyledLoginGridPage,
  StyledLogin,
  StyledLoginCard,
  ProviderButton,
  StyledDivider,
} from "./UserLogin.styled";

export default function UserLogin() {
  return (
    <StyledLoginGridPage>
      <StyledLogin>
        <StyledLoginCard>
          <ProviderButton provider={"GitHub"} />
          <StyledDivider $text="or" />
        </StyledLoginCard>
      </StyledLogin>
    </StyledLoginGridPage>
  );
}
