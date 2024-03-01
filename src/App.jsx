import AppLayout from "./ui/AppLayout";
import UserPage from "./pages/UserPage";
import Posts from "./pages/Posts";
import SliderToggleProvider from "./context/SliderToggleContext";
import Topics from "./pages/Topics";
import Dashboard from "./pages/Dashboard";
import Preview from "./pages/Preview";
import PreviewTopicProvider from "./context/PreviewTopicContext";
import AddPost from "./ui/AddPost";
import UserUpdate from "./ui/UserUpdate";
import AddExplanation from "./features/explanation/AddExplanation";
import UserInfo from "./ui/UserInfo";
import TheExplanationPage from "./features/topics/TheExplanationPage";
import UpdateTopic from "./features/topics/UpdateTopic";

import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

function App() {
  return (
    <SliderToggleProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
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
              <Route path="topics" element={<Topics />} />
              <Route path="topics/:id" element={<TheExplanationPage />} />
              <Route path="topics/edit/:id" element={<UpdateTopic />} />

              <Route path="posts" element={<Posts />} />
              <Route path="preview" element={<Preview />} />
              <Route path="*" element={<h1> Page Not Found</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer autoClose={3000} position="top-center" />
      </QueryClientProvider>
    </SliderToggleProvider>
  );
}

export default App;
