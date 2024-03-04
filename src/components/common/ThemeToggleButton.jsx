import React, { useEffect, useState } from 'react';
import { useGlobal } from '../../context/GlobalContext.jsx';
import MoonSun from './MoonSun.jsx';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useGlobal();

  const [icon, setIcon] = useState(null);
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect( () => {
     if( theme === 'dark') setIcon(MoonSun.sun)
     if( theme === 'light') setIcon(MoonSun.moon)
  },[theme])

  return (
    <>
        <button type="button" onClick={toggleTheme} className="text-white bg-black dark:bg-white  hover:bg-gradient-to-br rounded-full p-3 absolute top-2 right-2 z-50">{icon}</button>
    </>
  );
};

export default ThemeToggleButton;
