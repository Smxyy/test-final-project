import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/error-page/NotFoundPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import AboutUs from "./pages/about-us/AboutUs.jsx";
import ContactUs from "./pages/contact-us/ContactUs.jsx";
import SkillPage from "./pages/skill-page/SkillPage.jsx";
import SkillLevel from "./pages/skill-level/SkillLevel.jsx";
import SkillExercise from "./pages/skill-exercise-page/SkillExercise.jsx";
import LessonDetail from "./pages/lesson-detail-page/LessonDetail.jsx";
import VocabularyDetail from "./pages/vocabulary-detail-page/VocabularyDetail.jsx";
import GrammarDetail from "./pages/grammar-detail-page/GrammarDetail.jsx";
import EditProfile from "./pages/auth/EditProfile.jsx";
import Login from "./pages/auth/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Register from "./pages/auth/Register.jsx";
import VerifyOTP from "./pages/auth/VerifyOTP.jsx";
import NewPassword from "./pages/auth/NewPassword.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/skills",
        element: <SkillPage />,
      },
      {
        path: "/skills/:skill_name",
        element: <SkillLevel />,
      },
      {
        path: "/skills/:skill_name/:skill_level-skill_name",
        element: <SkillExercise />,
      },
      {
        path: "/skills/:skill_name/:skill_level-skill_name/:title",
        element: <LessonDetail />,
      },
      {
        path: "/grammar",
        element: <SkillLevel />,
      },
      {
        path: "/vocabulary",
        element: <SkillLevel />,
      },
      {
        path: "/grammar/:level-:grammar",
        element: <SkillExercise />,
      },
      {
        path: "/vocabulary/:level-vocabulary",
        element: <SkillExercise />,
      },
      {
        path: "/grammar/:level-grammar/:title",
        element: <GrammarDetail />,
      },
      {
        path: "/vocabulary/:level-vocabulary/:title",
        element: <VocabularyDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyOTP />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
