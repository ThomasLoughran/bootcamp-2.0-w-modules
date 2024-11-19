import { ErrorMessageStyled } from "./ErrorMessage.styled";

type ErrorMessageProps = {
  message: string;
};
export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <ErrorMessageStyled>
      <h2>An Error Has Occurred</h2>
      <p>{message}</p>
    </ErrorMessageStyled>
  );
};
