import { Suspense } from 'react';
import Loader from './loader/Loader';

const SharedLayout = ({ children }) => {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;
