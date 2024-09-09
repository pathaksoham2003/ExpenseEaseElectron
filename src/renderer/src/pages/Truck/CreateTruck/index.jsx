import React, { useState } from 'react'
import { toast } from 'react-toastify'
const CreateTruck = ({ setCreate, create, fetchTrucks }) => {
  const [truck, setTruck] = useState({
    name: '',
    number: '',
    vcl_type: 'Truck',
    tier: 6
  })

  const handleClose = () => {
    setCreate(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTruck({ ...truck, [name]: value })
  }

  const handleSubmit = () => {
    // Validate Indian number plate format (e.g., MH 20 XX 1234)
    const numberPlateRegex = /^[A-Z]{2}\s\d{1,2}\s[A-Z]{1,2}\s\d{4}$/
    if (!numberPlateRegex.test(truck.number)) {
      toast('Success')
      return
    }
    // Handle truck creation logic here
    console.log('Truck details:', truck)
    window.electron.ipcRenderer.invoke('createTruck', truck).then((data) => {
      setTruck(data)
      fetchTrucks()
      handleClose()
    })
  }

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ease-out ${create ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow transform transition-opacity duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold text-gray-900">Create Truck</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={handleClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 ">Truck Name</label>
              <input
                type="text"
                name="name"
                value={truck.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 ">Number Plate</label>
              <input
                type="text"
                name="number"
                placeholder="MH 20 CW 1523"
                value={truck.number}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 ">Vehicle Type</label>
              <select
                name="vcl_type"
                value={truck.vcl_type}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  "
              >
                <option value="Truck">Truck</option>
                <option value="Car">Car</option>
                <option value="Jeep">Jeep</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 ">Tier</label>
              <select
                name="tier"
                value={truck.tier}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  "
              >
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleClose}
                className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTruck
