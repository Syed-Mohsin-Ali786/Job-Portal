import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Applications from "./pages/Applications";
import RecuritorLogin from "./components/RecuritorLogin";
import useContextProvider from "./hooks/useContext";
import ViewApplication from "./pages/ViewApplication";
import AddJobs from "./pages/AddJobs";
import ManageJobs from "./pages/ManageJobs";

function App() {
  const { showRecuriterLogin } = useContextProvider();

  return (
    <div>
      {showRecuriterLogin && <RecuritorLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Applyjob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<ViewApplication />}>
          <Route path="manage-job" element={<ManageJobs />} />
          <Route path="add-job" element={<AddJobs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
