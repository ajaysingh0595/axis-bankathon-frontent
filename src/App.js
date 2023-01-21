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
import DisplaySpends from "./pages/DisplaySpends";
import { useEffect } from "react";
import GoalDashboard from "./pages/GoalDashboard"

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
      case "/spends":
        title = "";
        metaDescription = "";
        break;
      case "/goal-dashboard":
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
      <Route path="/" element={<LaunchPage />} />
      <Route path="/login" element={<PasswordAndDOB />} />
      <Route path="/activities" element={<ActivitiesComponent />} />
      <Route path="/add-funds" element={<AddFunds />} />
      <Route path="/goal" element={<GoalDashboard />} />
      {/* <Route path="/launch-page" element={<LaunchPage />} /> */}
      <Route path="/goal-add" element={<FrameComponent />} />
      <Route path="/spends" element={<DisplaySpends />} />
      <Route path="/goal-details" element={<ActivitiesKId />} />
    </Routes>
    
  );
}
export default App;
