import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import DisplayALLUsers from './DisplayALLUsers';

const MakeAdmin = () => {


    const { data: allusers, isLoading, refetch } = useQuery('allusers', () => fetch('http://localhost:3000/admin', {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Spinner />
    }



    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>addres</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            allusers.map((users, index) => <DisplayALLUsers
                                key={users._id}
                                users={users}
                                indexes={index}
                            ></DisplayALLUsers>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;