import Header from "../../component/common/Header";
import { useAuth } from "../../Hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

function PrivetRoute() {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <div>
          <Header />
          <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default PrivetRoute;
