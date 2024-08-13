import React, { useState, useEffect, lazy, Suspense } from "react";

function LazyLoad({ children }) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {hasLoaded ? (
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      ) : (
        <div style={{ height: "100vh" }}>Loading...</div>
      )}
    </div>
  );
}

export default LazyLoad;
