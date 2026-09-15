import { useState,useEffect } from "react";

function Navbar(props){

    const [menuOpen,setMenuOpen]=useState(false)
    const navItems = ["Home", "About", "Menu", "Gallery","Events","Contact"];
    const [scrolled,setScrolled]=useState(false)

    useEffect(()=>
    {
        const handleScroll=()=>
        {
            if(window.scrollY>0)
            {
                setScrolled(true)
            }
            else
            {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll",handleScroll)

        return()=>
        {
            window.removeEventListener("scroll",handleScroll)
        }

    },[])
    return(
        <nav className={`navbar ${scrolled ? "scrolled":""}`}>
            
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