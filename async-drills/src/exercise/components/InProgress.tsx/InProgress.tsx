import { InProgressStyled } from "./InProgress.styled";

type InProgressProps = {
  inProgressMessage: string;
};
export const InProgress = ({ inProgressMessage }: InProgressProps) => {
  return (
    <InProgressStyled>
      <img src="/loading-spinner.gif" width={24} alt="spinner" />
      <div>{inProgressMessage}</div>
    </InProgressStyled>
  );
};
