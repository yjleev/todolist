import { useState, useEffect } from "react";
import { light, dark } from "../style/theme";

const saveTheme = "theme";

function useTheme() {
  const [theme, setTheme] = useState<typeof light | typeof dark>(light);

  useEffect(() => {
    const stored = localStorage.getItem(saveTheme);
    if (stored === "dark") setTheme(dark);
    else setTheme(light);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === light ? dark : light;
      localStorage.setItem(saveTheme, next === dark ? "dark" : "light");
      return next;
    });
  };

  return { theme, toggle };
}

export default useTheme;
