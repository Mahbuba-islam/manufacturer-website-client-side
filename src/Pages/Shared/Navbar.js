import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../assets/icons/logo4.png'
import Loading from './Loading';

const Navbar = () => {

    const [user] = useAuthState(auth);
   const[isLoading] = useState()
    const logout = () => {
        signOut(auth);
       localStorage.removeItem('accessToken')
    };
if(isLoading){
   return <Loading></Loading>
}
    const dropdownMenu = <>
        <li><Link to='/'><img src={logo} className= 'h-1200 ' alt="logo" /></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/myFortfolio">My PortFolio</Link></li>
        
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
     
     {    user &&
                            

                           <Link as={Link} to="dashboard/MyProfile" className='bg-primary shadow-lg py-2 rounded-full font-semibold ml-14   text-white text-center ' style={{ textAlign:"center" , width: '38px', height: '39px'}}>
                           {user.displayName?.slice(0,1).toUpperCase()}
                         </Link>
                                        
                                 }
                                             

        <li >{user ? <button className="btn btn-link" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
       
            <div className="navbar shadow-sm   mt-7  text-primary">
            <div className="navbar-end ">
                <div className="dropdown">
                    <label tabIndex="0" className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box w-52">
                        {dropdownMenu}
                    </ul>
                </div >
                <a className="btn btn-link normal-case text-2xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {dropdownMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    
                </label>
            </div>
         </div>
     
      
    );
};

export default Navbar;