import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import UserPage from "./pages/UserPage";
import Posts from "./pages/Posts";
import SliderToggleProvider from "./context/SliderToggleContext";

function App() {
  return (
    <SliderToggleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Posts />} />
            <Route path="user" element={<UserPage />} />
            <Route path="*" element={<h1> Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SliderToggleProvider>
  );
}

export default App;
