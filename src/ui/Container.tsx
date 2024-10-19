interface ContainerProps {
  children: JSX.Element;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="w-full">{children}</div>;
};

export default Container;
