
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, Outlet } from "react-router-dom";
import styles from './Nav.module.css'


const Nav = ({onSearch, setAccess, navigate}) => {
   
   
const handleLogOut = () => {
   setAccess(false);
   navigate('/')

   
}

    return (
       <header id="header">
        <div className="search-bar">
           <SearchBar onSearch = {onSearch} setAccess = {setAccess} navigate = {navigate} />
           

           <NavLink  to="/home" > <button className={styles.btn}>Home</button></NavLink>
           <NavLink  to="/about" > <button className={styles.btn}>About me</button></NavLink>
         <NavLink  to="/favorites" ><button className={styles.btn} >Favorites</button></NavLink>
         <NavLink  to="/" ><button className={styles.btn} onClick={handleLogOut}>Exit</button></NavLink>

         <Outlet/>
        </div>
       </header>
    )
}

export default Nav;