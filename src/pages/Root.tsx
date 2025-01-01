import NavigationPages from "../components/navigation/navigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="home-container1">
        <NavigationPages path="/" btn="לעמוד הבית" />
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-content-container1"></div>
              <Outlet />
            </div>
            {window.innerWidth > 991 && (
              <div className="home-blue-background"></div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default RootLayout;
