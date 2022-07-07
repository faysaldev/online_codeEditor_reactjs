import { useEffect, useState } from "react";

const PREFIX = "online-codeEditor-";

export default function useLocalStorage(key, initialValue) {
  const fixedKay = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(fixedKay);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(fixedKay, JSON.stringify(value));
  }, [fixedKay, value]);

  return [value, setValue];
}
