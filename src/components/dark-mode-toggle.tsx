"use client";
import { Icon } from "@iconify/react";
import "../styles/toggle-mode.css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const { setTheme, theme } = useTheme();
  const [check, setCheck] = useState<boolean>(false);

  const checkHandler = () => {
    setCheck(!check);
    if (check) setTheme("light");
    else setTheme("dark");
  };

  useEffect(() => {
    if (theme === "light") setCheck(false);
    else setCheck(true);
  }, [theme]);

  return (
    <div>
      <input type="checkbox" className="checkbox" checked={check} onChange={checkHandler} />
      <label className="checkbox-label" onClick={checkHandler}>
        <Icon icon="material-symbols:light-mode-rounded" width="20" className="text-yellow-600" />
        <Icon icon="material-symbols-light:dark-mode" width="20" className="text-yellow-600" />
        <span className="ball"></span>
      </label>
    </div>
  );
}
