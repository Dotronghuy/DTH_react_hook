import React, { createContext, useContext, useState } from 'react'
import DTHUseContext1 from './DTHUseContext1';
export const ThemeContext = createContext(`red`); //Tạo ngữ cảnh để chia sẻ
export default function  DTHUseContext() {
    //state
    const [Theme,setTheme]=useState(`red`);

    
  return (
    <ThemeContext.Provider value={Theme}>
    <div>
        <h2>Demo UseContext </h2>
        <DTHUseContext1/>
        
    </div> 
    </ThemeContext.Provider>
    
  )
}
