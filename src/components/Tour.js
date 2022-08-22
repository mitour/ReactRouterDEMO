import { Outlet } from "react-router-dom";

function Tour() {
  return (
    <>
      <h2>旅遊景點清單</h2>
      <Outlet />
    </>
  );
}
export default Tour;
