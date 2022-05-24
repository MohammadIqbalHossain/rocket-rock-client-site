import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import ShowManageProducts from './ShowManageProducts';

const ManageProducts = () => {

    const { data, isLoading, refetch } = useQuery('allusers', () => fetch('http://localhost:5000/manageProducts', {
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
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {
           data.map(product => <ShowManageProducts
            key={product._id}
            product={product}
            refetch={refetch}
            data={data}
           ></ShowManageProducts>)
       }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageProducts;