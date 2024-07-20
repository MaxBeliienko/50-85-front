import { Suspense } from 'react';

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;
