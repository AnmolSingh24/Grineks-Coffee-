import React, { useState } from 'react'

const CheckOrder = () => {

  const [orders, setOrders] = useState([
    { id: 101, customer: "John Doe", item: "Espresso", status: "Pending" },
  ]);

  const updateOrderStatus = (id, status) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status } : order));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Order Management</h2>
      <table className="w-full mt-5 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Customer</th>
            <th className="border border-gray-400 p-2">Item</th>
            <th className="border border-gray-400 p-2">Status</th>
            <th className="border border-gray-400 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="border border-gray-400 p-2">{order.customer}</td>
              <td className="border border-gray-400 p-2">{order.item}</td>
              <td className="border border-gray-400 p-2">{order.status}</td>
              <td className="border border-gray-400 p-2">
                <button
                  className="text-blue-500"
                  onClick={() => updateOrderStatus(order.id, "Completed")}
                  disabled={order.status === "Completed"}
                >
                  Mark Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CheckOrder