import React, { useEffect, useState } from 'react'
// import CreateBill from './CreateBill';  // Modal component for creating a new bill
// import EditBill from './EditBill';      // Modal component for editing an existing bill
import ViewBill from './ViewBill'

const Bill = () => {
  const [billDetails, setBillDetails] = useState([])

  const [create, setCreate] = useState(false)
  const [edit, setEdit] = useState(false)
  const [billToEdit, setBillToEdit] = useState(null)
  const [view, setView] = useState(false)

  const fetchBills = () => {
    // Fetch bills from backend using Electron or API
    window.electron.ipcRenderer
      .invoke('getBills') // Example IPC communication for Electron
      .then((data) => setBillDetails(data))
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    fetchBills()
  }, [])

  const handleEditBill = (bill) => {
    setBillToEdit(bill)
    setEdit(true)
  }

  const handleDeleteBill = (id) => {
    // Logic for deleting a bill
    console.log(`Delete bill with id: ${id}`)
    setBillDetails(billDetails.filter((bill) => bill.id !== id))
  }

  return (
    <div className="flex flex-1 justify-center relative">
      <div className="w-full p-10">
        <div className="flex justify-between">
          <div>
            <h2 className="text-sm font-bold text-subheading">Billing</h2>
            <h2 className="text-3xl font-bold">Billing Section</h2>
          </div>
          <button
            onClick={() => setView(true)}
            className="m-5 mr-10 bg-accent px-5 py-2 rounded-xl text-white font-bold hover:bg-cyan-500 transition-colors"
          >
            Add a new Bill
          </button>
        </div>

        <div className="relative rounded-2xl overflow-x-auto mt-5">
          <h2 className="w-full bg-white p-5 text-xl font-bold">Bill Details</h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-subheading bg-white border-b">
              <tr>
                <th scope="col" className="px-6 py-3 max-w-10">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Vendor Name
                </th>
                <th scope="col" className="px-6 py-3">
                  From
                </th>
                <th scope="col" className="px-6 py-3">
                  To
                </th>
                <th scope="col" className="px-6 py-3">
                  Vehicle Number
                </th>{' '}
                {/* Added Vehicle Number */}
                <th scope="col" className="px-6 py-3">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Pending Amount
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Actions
                </th> */}
              </tr>
            </thead>
            <tbody>
              {billDetails.map((item) => (
                <tr key={item.id} className="bg-white text-large">
                  <th scope="row" className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.id}
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.from_add}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.to_add}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.vehicle_number} {/* Displaying Vehicle Number */}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ₹{item.total_amt}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ₹{item.pending}
                  </td>
                  {/* <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <button
                      onClick={() => handleEditBill(item)}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBill(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {view && <ViewBill view={view} setView={setView} />}
      {/* {create && <CreateBill fetchBills={fetchBills} setCreate={setCreate} />}
      {edit && (
        <EditBill
          setEdit={setEdit}
          edit={edit}
          billToEdit={billToEdit}
          setBillDetails={setBillDetails}
          fetchBills={fetchBills}
        />
      )} */}
    </div>
  )
}

export default Bill
