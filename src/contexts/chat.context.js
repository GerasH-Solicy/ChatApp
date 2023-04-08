import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLigth, setIsLight] = useState(true);

  return (
    <ThemeContext.Provider value={[isLigth, setIsLight]}>
      {children}
    </ThemeContext.Provider>
  );
};
