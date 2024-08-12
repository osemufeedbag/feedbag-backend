import { useEffect, useRef } from "react";

const useIntersectionObserver = (callback, options) => {
  const observer = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => callback(entry));
    }, options);

    const { current: currentObserver } = observer;
    const { current: elements } = elementsRef;

    elements.forEach((element) => element && currentObserver.observe(element));

    return () => currentObserver.disconnect();
  }, [callback, options]);

  const setElements = (elements) => {
    elementsRef.current = elements;
  };

  return setElements;
};

export default useIntersectionObserver;
