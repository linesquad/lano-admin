import { Outlet } from "react-router-dom";
import Container from "./Container";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default AppLayout;
