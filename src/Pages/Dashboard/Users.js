import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import UserRow from './UserRow';

const Users = () => {
    const [deletingUser , setDeletingUser] = useState(null)
    const { data: users, isLoading, refetch,  } = useQuery('users', () => fetch('http://localhost:5000/users', {
    method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(users)
    return (
        <div className='py-2 mt-5'>
            <h2 className="text-5xl text-center text-error py-5">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map((user, index)=><UserRow
                           key={user._id}
                           user={user}
                           index={index}
                           refetch={refetch}
                           setDeletingUser={setDeletingUser}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        {
            deletingUser && <DeleteConfirmModal
            deletingUser={deletingUser}
            setDeletingUser={setDeletingUser}
            refetch={refetch}>
            
            </DeleteConfirmModal>
        }
        </div>
    );
};

export default Users;