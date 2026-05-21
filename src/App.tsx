import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TrackStatus from "./pages/TrackStatus";
import ReportIncident from "./pages/ReportIncident";
import ApplyForServices from "./pages/ApplyForServices";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/track-status" element={<TrackStatus />} />
        <Route path="/report-incident" element={<ReportIncident />} />
        <Route path="/apply-for-services" element={<ApplyForServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
