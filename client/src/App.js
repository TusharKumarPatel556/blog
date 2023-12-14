import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register/registerPage";
import LoginPage from "./pages/Login/loginPage";
import Header from "./components/navigation/header";
import Error from "./pages/Error/error";
import Blogs from "./components/AllBlogs/blogs";
import Newblogpost from "./components/NewBlogPost/newblogpost";
import Login from "./components/login/login";
import Register from "./components/register/register";

const LazyUserProfile = React.lazy(() =>
  import("./pages/userProfile/userProfile")
);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/userprofile"
          element={
            <React.Suspense fallback={"Loading Page"}>
              <LazyUserProfile />
            </React.Suspense>
          }
        >
          <Route path="blogs" element={<Blogs />} />
          <Route path="newpost" element={<Newblogpost />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
export default App;
