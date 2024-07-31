import { Suspense } from 'react';
import { Hearts } from 'react-loader-spinner';
import Loader from './loader/Loader';

const SharedLayout = ({ children }) => {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;
