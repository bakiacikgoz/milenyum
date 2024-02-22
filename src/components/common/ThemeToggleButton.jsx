import React from 'react';
import { useGlobal } from '../../context/GlobalContext.jsx';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useGlobal();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
        <button onClick={toggleTheme} className='button '>
      Temayı Değiştir: Şu anki tema {theme}
    </button>
    </>
  );
};

export default ThemeToggleButton;
