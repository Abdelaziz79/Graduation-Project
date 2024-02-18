import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import UserPage from "./pages/UserPage";
import Posts from "./pages/Posts";
import SliderToggleProvider from "./context/SliderToggleContext";
import Toipcs from "./pages/Toipcs";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <SliderToggleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Posts />} />
            <Route path="user" element={<UserPage />} />
            <Route path="toipcs" element={<Toipcs />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<h1> Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SliderToggleProvider>
  );
}

export default App;
