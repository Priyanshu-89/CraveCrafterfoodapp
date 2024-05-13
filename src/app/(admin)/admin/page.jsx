import React from 'react';

const AdminPage = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 p-5'>
      <div className="bg-[#0A090A] text-[#ea9a11] p-5 rounded-md">
        <h2 className="text-4xl font-bold mb-2">40</h2>
        <h3 className="text-lg">Total Foods</h3>
      </div>
      <div className="bg-[#ea9a11] text-[#0A090A] p-5 rounded-md">
        <h2 className="text-4xl font-bold mb-2">40</h2>
        <h3 className="text-lg">Total Orders</h3>
      </div>
      <div className="bg-[#0A090A] text-[#ea9a11] p-5 rounded-md">
        <h2 className="text-4xl font-bold mb-2">40</h2>
        <h3 className="text-lg">Total Category</h3>
      </div>
      <div className="bg-[#ea9a11] text-[#0A090A] p-5 rounded-md">
        <h2 className="text-4xl font-bold mb-2">40</h2>
        <h3 className="text-lg">Total User</h3>
      </div>
    </div>
  );
};

export default AdminPage;
