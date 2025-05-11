type Props = {
  title: string;
  onClick: VoidFunction;
};

export const Button = ({ title, onClick }: Props) => (
  <button onClick={onClick}>{title}</button>
);
