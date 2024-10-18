interface ContainerProps {
  children: JSX.Element;
}

const Container = ({ children }: ContainerProps) => {
  return <div>{children}</div>;
};

export default Container;
