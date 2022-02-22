import { useState, useEffect } from "react";

function useDebounce(input: string, time: number) {
  const [value, setValue] = useState(input);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(input);
    }, time);
    return () => clearTimeout(handler);
  }, [input, time]);

  return value;
}

export default useDebounce;
