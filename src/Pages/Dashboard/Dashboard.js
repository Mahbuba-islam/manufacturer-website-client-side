import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-accent">
                <h2 className='text-4xl font-bold text-primary mt-8 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-30 px-5 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <>
                            <Link to="/dashboard" >My Orders</Link>
                        <Link to="/dashboard/addReview">Add Reviews</Link>
                           </>
                       
                    
                    }
                   
                    
                    <li><Link to="/dashboard/myProfile">My Profile</Link>
                    </li>
                    
                    
                    { admin && <>
                    {/* <Link to="/dashboard/users" className='py-2 my-4 text-primary px-2 shadow-lg mr-6 text-center text-1xl font-bold'>Make Admin</Link> */}
                    <Link to="/dashboard/users">All Users</Link>
                    <Link to="/dashboard/addProduct">Add Product</Link>
                    <Link to="/dashboard/manageProducts">Manage Products</Link>
                    <Link to="/dashboard/manageOrders">Manage orders</Link>
                    
                   
                   
                    
                    {/* <Link to="/dashboard/addProduct">Add Product</Link> */}
                    </>}
                </ul>
               
            </div>
        </div>
    );
};

export default Dashboard;