import {
  Routes,
  Route,
  useNavigationType,
  useLocation
} from "react-router-dom";
import DashboardKid from "./pages/DashboardKid";
import AddFunds from "./pages/AddFunds";
import ActivitiesKId from "./pages/ActivitiesKId";
import PasswordAndDOB from "./pages/PasswordAndDOB";
import LaunchPage from "./pages/LaunchPage";
import FrameComponent from "./pages/FrameComponent";
import ActivitiesComponent from "./pages/Activities";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/add-funds":
        title = "";
        metaDescription = "";
        break;
      case "/activities":
        title = "";
        metaDescription = "";
        break;  
      case "/activities-kid":
        title = "";
        metaDescription = "";
        break;
      case "/password-and-dob":
        title = "";
        metaDescription = "";
        break;
      case "/launch-page":
        title = "";
        metaDescription = "";
        break;
      case "/frame-2608788":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/home" element={<DashboardKid />} />
      <Route path="/" element={<PasswordAndDOB />} />
      <Route path="/activities" element={<ActivitiesComponent />} />
      <Route path="/add-funds" element={<AddFunds />} />
      <Route path="/goal" element={<ActivitiesKId />} />
      <Route path="/launch-page" element={<LaunchPage />} />
      <Route path="/goal-add" element={<FrameComponent />} />
    </Routes>
    
  );
}
export default App;
