import { useEffect, useState } from "react";

const useMedia = (queries) => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));

  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return index;
  };

  const [value, setValue] = useState(getValue);
  useEffect(() => {
    const handler = () => setValue(getValue);

    mediaQueryLists.forEach((mql) => mql.addListener(handler));

    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, []);
  return value;
};
export default useMedia;
