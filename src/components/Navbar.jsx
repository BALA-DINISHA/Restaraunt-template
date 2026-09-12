
function Navbar(props){
    const navItems = ["Home", "About", "Menu", "Gallery","Contact"];
    return(
        <nav>
            
            <h2>{props.restaurantName}</h2>
            <div>
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