import styled from "styled-components";
import Image from "next/image";
import { signIn } from "next-auth/react";

export const StyledLoginGridPage = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  place-items: center;
  background-color: var(--color-gray4);
`;

export const StyledLogin = styled.div`
  text-align: center;
  margin: 1rem 0;
  width: 343px;
`;

export const StyledLoginCard = styled.div`
  margin: 2rem 0;
  background-color: var(--color-gray5);
  border-radius: 2rem;
  padding: 1.25rem 2rem;
`;

export const ProviderButton = ({ provider, $backcolor, $textcolor }) => {
  const loverCaseProvider = provider.toLowerCase();
  return (
    <StyledProviderButton
      onClick={() => signIn(`${loverCaseProvider}`, { callbackUrl: "/" })}
      $backcolor={$backcolor}
      $textcolor={$textcolor}
    >
      <Image
        src={`https://authjs.dev/img/providers/${loverCaseProvider}.svg`}
        alt={`${provider} Logo`}
        width="24"
        height="24"
        loading="lazy"
      />
      <span>Sign in with {provider}</span>
    </StyledProviderButton>
  );
};

const StyledProviderButton = styled.button`
  align-items: center;
  background-color: ${(props) => props.$backcolor || "var(--color-gray5)"};
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  color: ${(props) => props.$textcolor || "var(--color-gray3)"};
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  justify-content: space-evenly;
  min-height: 62px;
  padding: 0.75rem 1rem;
  position: relative;
  transition: all 0.1s ease-in-out;
  width: 100%;
`;
