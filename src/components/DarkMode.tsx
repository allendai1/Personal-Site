import React, {FunctionComponent, useEffect,useState} from 'react'

type Props = {
  children: JSX.Element;
}

export default function DarkMode({children}: Props): JSX.Element {
  const windowGlobal = typeof window !== 'undefined' && window
    const [darkMode,setDarkMode] = useState(windowGlobal.localStorage?.getItem("darkMode"));
    function handleClick(e:any):void{
      e.preventDefault();
      if(darkMode==="true"){
        windowGlobal.localStorage.setItem("darkMode", "false");
        document.documentElement.setAttribute("theme", "");
        setDarkMode("false");

      }
      else if(darkMode==="false"){
        windowGlobal.localStorage.setItem("darkMode", "true");
        document.documentElement.setAttribute("theme", "dark");
        setDarkMode("true");
      }
      else if(darkMode===null){
        windowGlobal.localStorage.setItem("darkMode", "true");
        document.documentElement.setAttribute("theme", "dark");
        setDarkMode("true");
      }


    }
    

        
       
      

    return(
      // <div onDoubleClick={handleClick}>
      // {children}
      // </div>
      <div className="nav-item" onClick={handleClick}>
            <svg width="30" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.37 5.51C9.18938 6.15786 9.09853 6.82744 9.1 7.5C9.1 11.58 12.42 14.9 16.5 14.9C17.18 14.9 17.85 14.81 18.49 14.63C17.9647 15.9207 17.0668 17.0257 15.9109 17.804C14.7551 18.5823 13.3935 18.9987 12 19C8.14 19 5 15.86 5 12C5 9.07 6.81 6.55 9.37 5.51V5.51ZM12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C21 11.54 20.96 11.08 20.9 10.64C20.4003 11.3407 19.7401 11.9115 18.9746 12.3047C18.2091 12.6978 17.3606 12.902 16.5 12.9C15.3552 12.9 14.24 12.5364 13.3152 11.8617C12.3904 11.1869 11.7038 10.2358 11.3545 9.14561C11.0052 8.05541 11.0112 6.88243 11.3717 5.79586C11.7321 4.70928 12.4284 3.76528 13.36 3.1C12.92 3.04 12.46 3 12 3V3Z" fill="black"/>
              </svg>
              <span>Dark mode</span>
      </div>
    );
    
        
    
}
