import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-accent">
                <h2 className='text-4xl font-bold text-primary mt-8 text-center'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-30 px-5 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard" >My Orders</Link></li>
                    <li>
                    <Link to="/dashboard/myReview">My Reviews</Link>
                    </li>
                    <li><Link to="/dashboard/myProfile">My Profile</Link>
                    </li>
                    <Link to="/dashboard/users">Make Admin</Link>
                    <Link to="/dashboard/addProduct">Add Product</Link>

                    
                    { admin && <>
                    {/* <Link to="/dashboard/users" className='py-2 my-4 text-primary px-2 shadow-lg mr-6 text-center text-1xl font-bold'>Make Admin</Link> */}

                    <Link to="/dashboard/myProfile">My Profile</Link>

                    <Link to="/dashboard/manageAllOrders" text-1xl>Manage all orders</Link>
                    
                    {/* <Link to="/dashboard/addProduct">Add Product</Link> */}
                    </>}
                </ul>
               
            </div>
        </div>
    );
};

export default Dashboard;