import { useEffect, useRef, useState } from "react";

const LazyImage = (props) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      /*       if (ref?.current) {
        observer.unobserve(ref.current);
      } */

      observer.disconnect();
    };
  }, []);

  return inView ? (
    <img {...props} />
  ) : (
    <img
      ref={ref}
      style={{ width: "1000px", height: "1000px", backgroundColor: "#535bf2" }}
    />
  );
};

export default LazyImage;
