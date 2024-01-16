import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>I am admin</h1>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
