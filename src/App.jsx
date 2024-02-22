import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import UserPage from "./pages/UserPage";
import Posts from "./pages/Posts";
import SliderToggleProvider from "./context/SliderToggleContext";
import Toipcs from "./pages/Toipcs";
import Dashboard from "./pages/Dashboard";
import Preview from "./pages/Preview";
import PreviewTopicProvider from "./context/PreviewTopicContext";
import AddPost from "./ui/AddPost";
import UserUpdate from "./ui/UserUpdate";
import AddExplanation from "./ui/AddExplanation";
import UserInfo from "./ui/UserInfo";

function App() {
  return (
    <SliderToggleProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PreviewTopicProvider>
                <AppLayout />
              </PreviewTopicProvider>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="user" element={<UserPage />}>
              <Route path=":id" index element={<UserInfo />} />
              <Route path="addpost" element={<AddPost />} />
              <Route path="update" element={<UserUpdate />} />
              <Route path="addtopic" element={<AddExplanation />} />
            </Route>
            <Route path="toipcs" element={<Toipcs />} />
            <Route path="posts" element={<Posts />} />
            <Route path="preview" element={<Preview />} />
            <Route path="*" element={<h1> Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SliderToggleProvider>
  );
}

export default App;
