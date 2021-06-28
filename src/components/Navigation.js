import React from "react"
import DarkMode from "./DarkMode"
import TransitionLink from "gatsby-plugin-transition-link"
import { gsap } from "gsap";

export default function Navigation() {
  return (
    <div className="nav-container">
      
      <TransitionLink
       className="nav-item" 
       to="/"
       entry={{
         length:0.5,
        trigger: ({ exit, node }) =>{
          gsap.fromTo("#profile-column", {y:-1000},{ y:0})
          console.log("entry")
        }

      }}
      exit={{
       
        length:0.5,
        trigger: ({ exit, node }) =>{
          console.log("exit")
          gsap.fromTo("#contact-column",{ y:0},{ y:1000})

        }

      }}
       >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="person"
        >
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            strokeWidth="1.7"
          />
          <path
            d="M17 14H17.352C18.0831 14.0002 18.7889 14.2674 19.3369 14.7513C19.8849 15.2352 20.2373 15.9026 20.328 16.628L20.719 19.752C20.7542 20.0334 20.7291 20.3191 20.6454 20.5901C20.5617 20.8611 20.4214 21.1112 20.2336 21.3238C20.0459 21.5364 19.8151 21.7066 19.5566 21.8232C19.298 21.9398 19.0176 22.0001 18.734 22H5.266C4.98238 22.0001 4.70199 21.9398 4.44345 21.8232C4.1849 21.7066 3.9541 21.5364 3.76638 21.3238C3.57865 21.1112 3.43829 20.8611 3.3546 20.5901C3.27092 20.3191 3.24583 20.0334 3.281 19.752L3.671 16.628C3.7617 15.9022 4.11442 15.2346 4.66283 14.7506C5.21125 14.2667 5.91758 13.9997 6.649 14H7"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Profile</span>
      </TransitionLink>
      <TransitionLink
       className="nav-item"
        to="/contact"
        
        entry={{
          length:0.5,
          
          trigger: ({ exit, node }) =>{
            gsap.fromTo("#contact-column", {y:1000},{ y:0})
          }

        }}
        exit={{
          length:0.5,
          trigger: () =>{
            gsap.fromTo("#profile-column", {y:0},{ y:-1000})
          }

        }}
        // exit={{
        //   length: 1,
        //   trigger: ({ exit, node }) =>{
        //     gsap.fromTo(".contact-column", {y:0},{duration:0.6, y:1000})
        //   }

        // }}
       >
        <svg
          
          viewBox="0 -1 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.875 8.90625C1.875 7.095 3.345 5.625 5.15625 5.625H24.8438C26.655 5.625 28.125 7.095 28.125 8.90625V21.0938C28.125 21.964 27.7793 22.7986 27.1639 23.4139C26.5486 24.0293 25.714 24.375 24.8438 24.375H5.15625C4.28601 24.375 3.45141 24.0293 2.83606 23.4139C2.2207 22.7986 1.875 21.964 1.875 21.0938V8.90625ZM5.15625 7.5C4.78329 7.5 4.4256 7.64816 4.16188 7.91188C3.89816 8.1756 3.75 8.53329 3.75 8.90625V21.0938C3.75 21.87 4.38 22.5 5.15625 22.5H24.8438C25.2167 22.5 25.5744 22.3518 25.8381 22.0881C26.1018 21.8244 26.25 21.4667 26.25 21.0938V8.90625C26.25 8.53329 26.1018 8.1756 25.8381 7.91188C25.5744 7.64816 25.2167 7.5 24.8438 7.5H5.15625ZM17.8125 11.25C17.5639 11.25 17.3254 11.3488 17.1496 11.5246C16.9738 11.7004 16.875 11.9389 16.875 12.1875C16.875 12.4361 16.9738 12.6746 17.1496 12.8504C17.3254 13.0262 17.5639 13.125 17.8125 13.125H23.4375C23.6861 13.125 23.9246 13.0262 24.1004 12.8504C24.2762 12.6746 24.375 12.4361 24.375 12.1875C24.375 11.9389 24.2762 11.7004 24.1004 11.5246C23.9246 11.3488 23.6861 11.25 23.4375 11.25H17.8125ZM17.8125 16.875C17.5639 16.875 17.3254 16.9738 17.1496 17.1496C16.9738 17.3254 16.875 17.5639 16.875 17.8125C16.875 18.0611 16.9738 18.2996 17.1496 18.4754C17.3254 18.6512 17.5639 18.75 17.8125 18.75H23.4375C23.6861 18.75 23.9246 18.6512 24.1004 18.4754C24.2762 18.2996 24.375 18.0611 24.375 17.8125C24.375 17.5639 24.2762 17.3254 24.1004 17.1496C23.9246 16.9738 23.6861 16.875 23.4375 16.875H17.8125ZM9.86438 14.4638C10.1985 14.4638 10.5294 14.3979 10.8381 14.2701C11.1468 14.1422 11.4273 13.9548 11.6635 13.7185C11.8998 13.4823 12.0872 13.2018 12.2151 12.8931C12.3429 12.5844 12.4088 12.2535 12.4088 11.9194C12.4088 11.5852 12.3429 11.2544 12.2151 10.9457C12.0872 10.637 11.8998 10.3565 11.6635 10.1202C11.4273 9.88396 11.1468 9.69655 10.8381 9.56868C10.5294 9.44081 10.1985 9.375 9.86438 9.375C9.18957 9.375 8.54239 9.64307 8.06523 10.1202C7.58807 10.5974 7.32 11.2446 7.32 11.9194C7.32 12.5942 7.58807 13.2414 8.06523 13.7185C8.54239 14.1957 9.18957 14.4638 9.86438 14.4638V14.4638ZM7.23375 15.735C6.80708 15.735 6.39789 15.9045 6.09619 16.2062C5.79449 16.5079 5.625 16.9171 5.625 17.3438C5.62506 18.042 5.85853 18.7203 6.28829 19.2706C6.71805 19.821 7.31944 20.2119 7.99687 20.3812L8.09625 20.4075C9.25875 20.6981 10.4719 20.6981 11.6325 20.4075L11.7337 20.3831C12.4112 20.2138 13.0126 19.8229 13.4423 19.2725C13.8721 18.7221 14.1056 18.0439 14.1056 17.3456C14.1059 17.1342 14.0644 16.9248 13.9837 16.7294C13.903 16.534 13.7845 16.3564 13.6351 16.2069C13.4857 16.0573 13.3083 15.9386 13.113 15.8576C12.9176 15.7767 12.7083 15.735 12.4969 15.735H7.23375Z"
            fill="black"
          />
        </svg>

        <span>Contact me</span>
      </TransitionLink>

      <a className="nav-item" href="https://allendai1.medium.com/">
        <svg viewBox="0 -2 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 24H14V26H4V24Z" />
          <path d="M4 18H14V20H4V18Z" />
          <path d="M26 14H6C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H26C26.5304 4 27.0391 4.21071 27.4142 4.58579C27.7893 4.96086 28 5.46957 28 6V12C28 12.5304 27.7893 13.0391 27.4142 13.4142C27.0391 13.7893 26.5304 14 26 14ZM6 6V12H26V6H6Z" />
          <path d="M26 28H20C19.4696 28 18.9609 27.7893 18.5858 27.4142C18.2107 27.0391 18 26.5304 18 26V20C18 19.4696 18.2107 18.9609 18.5858 18.5858C18.9609 18.2107 19.4696 18 20 18H26C26.5304 18 27.0391 18.2107 27.4142 18.5858C27.7893 18.9609 28 19.4696 28 20V26C28 26.5304 27.7893 27.0391 27.4142 27.4142C27.0391 27.7893 26.5304 28 26 28ZM20 20V26H26V20H20Z" />
        </svg>
        <span>Blog</span>
      </a>
     
      
      <DarkMode />
    </div>
  )
}
