import { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import NotFound from "./components/notFound/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import { Toaster } from "react-hot-toast";
import { selectLoading } from "./redux/water/selectors";
import { selectIsLoading } from "./redux/auth/selectors";
import Loader from "./components/loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const TrackerPage = lazy(() => import("./pages/TrackerPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./pages/TermsOfServicePage"));
const ConfirmGoogleAuth = lazy(() => import("./pages/ConfirmGoogleAuth"));

function App() {
  const authLoading = useSelector(selectIsLoading);
  const waterLoading = useSelector(selectLoading);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SharedLayout>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/tracker" component={<HomePage />} />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<SignInPage />}
              />
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
            }
          />
          <Route path="/confirm-google-auth" element={<ConfirmGoogleAuth />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {(authLoading || waterLoading) && <Loader />}
      </SharedLayout>
    </>
  );
}

export default App;
