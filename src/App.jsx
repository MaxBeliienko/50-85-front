import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import NotFound from './components/notFound/NotFound';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import { Toaster } from 'react-hot-toast';
// import CalendarSection from './components/CalendarSection/CalendarSection.jsx';

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
          <Route path="/" element={<HomePage />} />
          {/* Це частина з налаштованою маршрутизацією по Private і Restricted route. Наразі залишаю її закоментованою, так як ще не готові елементи стану щоб все це працювало. Знизу залишаю робочу версію без налаштувань Private і Restricted route. Коли все буде готово, її видалимо. Імпорти які поки що не використовуються також закоментовані. */}
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
