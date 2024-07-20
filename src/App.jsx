// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import NotFound from './components/notFound/NotFound';
import UserButton from './components/WaterDetailedInfo/UserPanel/UserPanel';
// import PrivateRoute from './components/PrivateRoute';
// import RestrictedRoute from './components/RestrictedRoute';
const user = {
  name: 'Nadia',
  photo: 'https://via.placeholder.com/40',
};
function App() {
  return (
    <>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
        
          {/* Це частина з налаштованою маршрутизацією по Private і Restricted route. Наразі залишаю її закоментованою, так як ще не готові елементи стану щоб все це працювало. Знизу залишаю робочу версію без налаштувань Private і Restricted route. Коли все буде готово, її видалимо. Імпорти які поки що не використовуються також закоментовані. */}
          {/* <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<div>SignUpPage</div>}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<div>SignInPage</div>}
              />
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<div>TrackerPage</div>}
              />
            }
          /> */}

          <Route path="/signup" element={<div>SignUpPage</div>} />
          <Route path="/signin" element={<div>SignInPage</div>} />
          <Route path="/tracker" element={<div>TrackerPage</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <UserButton user={user} />
      </SharedLayout>
    </>
  );
}

export default App;
