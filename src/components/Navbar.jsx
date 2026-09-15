
function Navbar(props){
    const navItems = ["Home", "About", "Menu", "Gallery","Events","Contact"];
    return(
        <nav className="navbar">
            
            <h2 className="logo">{props.restaurantName}</h2>
            <div className="nav-links">
                {
                    navItems.map(item=>(
                        <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
                    ))
                }
            </div>
       
        </nav>
    );
}

export default Navbar