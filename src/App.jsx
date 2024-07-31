import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import NotFound from './components/notFound/NotFound';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

function App() {
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
