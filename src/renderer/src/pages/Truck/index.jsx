import React, { useEffect, useState } from 'react'
import CreateTruck from './CreateTruck'
import Modal from 'react-modal'
import EditTruck from './EditTruck'

const Truck = () => {
  const [truckDetails, setTruck] = useState(null)
  const [create, setCreate] = useState(false)
  const [edit, setEdit] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [truckToDelete, setTruckToDelete] = useState(null)

  const fetchTrucks = () => {
    window.electron.ipcRenderer.invoke('getVehicle').then((data) => {
      setTruck(data)
    })
  }

  const [vendorToEdit, setTruckToEdit] = useState(null)

  const handleEditTruck = (vendor) => {
    setTruckToEdit(vendor)
    setEdit(true)
  }

  const handleDeleteClick = (truck) => {
    setTruckToDelete(truck)
    setDeleteModal(true) // Open delete confirmation modal
  }

  const confirmDelete = () => {
    // Backend request would be fired here
    console.log('Truck deleted:', truckToDelete) // Placeholder for backend request
    window.electron.ipcRenderer
      .invoke('deleteTruck', truckToDelete.number)
      .then((data) => {
        console.log('Seccessful delete', data)
        const newTrucks = truckDetails.filter((item) => item.number != truckToDelete.number);
        setTruck(newTrucks);
        fetchTrucks() // Refresh truck list after deletion
      })
      .catch((e) => console.log(e))
    setDeleteModal(false)
    
  }

  const closeDeleteModal = () => {
    setTruckToDelete(null)
    setDeleteModal(false) // Close the delete confirmation modal
  }

  useEffect(() => {
    fetchTrucks()
  }, [])

  return (
    <div className="flex flex-1 justify-center relative">
      <div className="w-full p-10">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-sm font-bold text-subheading">Truck</h2>
            <h2 className="text-3xl font-bold">Truck</h2>
          </div>
          <div
            onClick={() => setCreate(true)}
            className="m-5 mr-10 bg-accent px-5 py-2 rounded-xl text-white font-bold hover:bg-cyan-500 transition-colors"
          >
            Add a new truck
          </div>
        </div>

        <div className="relative rounded-2xl overflow-x-auto mt-5">
          <h2 className="w-full bg-white p-5 text-xl font-bold">Truck Details</h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className=" text-subheading bg-white border-b">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Truck Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Reg No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Vehicle Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Tier
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {truckDetails?.map((item) => (
                <tr className="bg-white text-large">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-wrap">
                    {item.name}
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.number}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.vcl_type}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.tier}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <button
                      onClick={() => handleEditTruck(item)}
                      className="text-blue-500 hover:text-blue-700 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(item)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {create && <CreateTruck fetchTrucks={fetchTrucks} setCreate={setCreate} create={create} />}
      {edit && (
        <EditTruck
          fetchTrucks={fetchTrucks}
          setEdit={setEdit}
          edit={edit}
          vendorToEdit={vendorToEdit}
          setTruckDetails={setTruck}
        />
      )}
      {deleteModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ease-out"
          onClick={closeDeleteModal}
        >
          <div
            className="relative p-4 w-full max-w-md bg-white rounded-lg shadow transform transition-opacity duration-300 ease-out"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="p-5">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Confirm Deletion</h3>
              <p className="text-sm text-gray-700 mb-6">
                Are you sure you want to delete the truck "{truckToDelete?.name}"?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  onClick={confirmDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Truck
