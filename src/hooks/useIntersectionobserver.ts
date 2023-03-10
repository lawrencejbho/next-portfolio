import { useEffect, useState } from "react";

const useIntersectionObserver = (
  id: string,
  amountToObserve: number
): [number] => {
  const [indexVisible, setIndexVisible] = useState<number>(0);
  let observer$: IntersectionObserver;

  const _handleIntersectionObserverEntries = (
    entries: IntersectionObserverEntry[]
  ) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) {
        return;
      }

      setIndexVisible(Number(entry.target.id.replace(id, "")));
    });
  };

  useEffect(() => {
    observer$ = new IntersectionObserver(_handleIntersectionObserverEntries, {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    });

    Array.apply(null, Array(amountToObserve)).forEach(
      (value: unknown, index: number) => {
        const htmlElementToObserve: HTMLElement | null =
          document.getElementById(`${id}${index}`);

        if (!htmlElementToObserve) {
          return;
        }

        observer$.observe(htmlElementToObserve);
      }
    );

    return () => {
      observer$ && observer$.disconnect();
    };
  }, []);

  return [indexVisible];
};

export default useIntersectionObserver;
