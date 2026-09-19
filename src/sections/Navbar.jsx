import { useState,useEffect } from "react";

function Navbar(props){

    const [menuOpen,setMenuOpen]=useState(false)
    const navItems = ["Home", "About", "Menu", "Gallery","Contact"];
    const [scrolled,setScrolled]=useState(false)
    const [showNavbar,setNavbar]=useState(true)
    const [isScrollingDown,setScrollingDown]=useState(false);

    useEffect(()=>
    {
        let lastScrollY=window.scrollY
        
        const handleScroll=()=>
        {
            const currentScrollY=window.scrollY
            if(currentScrollY>lastScrollY && currentScrollY > 50)
            {
                setNavbar(false)
                setScrollingDown(true);
            }
            else
            {
                
                setNavbar(true)
                setScrollingDown(false)
            }
            if(currentScrollY>0)
            {
                setScrolled(true)
            }
            else
            {
                setScrolled(false)
            }
            lastScrollY=currentScrollY

           
        }
         const handleMouseMove=(event)=>
            {
                if(isScrollingDown)
                {
                    if(event.clientY < 80)
                    setNavbar(true);
                    else
                    {
                        setNavbar(false);
                    }
                }
            }
        window.addEventListener("scroll",handleScroll)
        window.addEventListener("mousemove",handleMouseMove)

        return()=>
        {
            window.removeEventListener("scroll",handleScroll)
            window.removeEventListener("mousemove", handleMouseMove)
        }

    },[isScrollingDown])
    return(
        <nav
  className={`navbar ${scrolled ? "scrolled" : ""} ${
    showNavbar ? "show" : "hide"
  }`}
>
            
           <div className="logo">
            {props.restaurantName}
            </div>

            <button className="menu-button" onClick={
                ()=>setMenuOpen(!menuOpen)
            }>
                 {menuOpen? "✕" : "☰" }
            </button>


            <div className={`nav-links ${menuOpen?"open":""}`}>
                {
                    navItems.map(item=>(


                        <a key={item} href={`#${item.toLowerCase()}`} onClick={()=>
                        {
                            setMenuOpen(false)
                        }
                        }>{item}</a>
                    ))
                }
            </div>
       
        </nav>
    );
}

export default Navbar