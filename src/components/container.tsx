interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="px-4 py-3">{children}</div>;
};
