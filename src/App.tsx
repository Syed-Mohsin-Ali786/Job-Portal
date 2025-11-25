import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Applyjob from "./pages/Applyjob";
import Applications from "./pages/Applications";
import RecuritorLogin from "./components/RecuritorLogin";
import useContextProvider from "./hooks/useContext";
import ViewApplication from "./pages/_Dashboard/ViewApplication";
import AddJobs from "./pages/_Dashboard/AddJobs";
import ManageJobs from "./pages/_Dashboard/ManageJobs";
import { ToastContainer } from "react-toastify";

import "quill/dist/quill.snow.css";

import Dashboard from "./pages/_Dashboard/Dashboard";
function App() {
  const { showRecruiterLogin, companyToken } = useContextProvider();

  return (
    <div>
      {showRecruiterLogin && <RecuritorLogin />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Applyjob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {companyToken ? (
            <>
              <Route path="manage-job" element={<ManageJobs />} />
              <Route path="add-job" element={<AddJobs />} />
              <Route path="view-application" element={<ViewApplication />} />
            </>
          ) : null}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
