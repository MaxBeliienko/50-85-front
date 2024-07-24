import { Suspense } from 'react';
import { Hearts } from 'react-loader-spinner';

const SharedLayout = ({ children }) => {
  return (
    <div className="container">
      <Suspense
        fallback={
          <Hearts
            height="300"
            width="300"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            wrapperClass="my-custom-class"
            visible={true}
            backgroundColor="#f0f0f0"
            secondaryColor="#ff6347"
            strokeWidth={3}
            animationDuration={800}
          />
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default SharedLayout;
