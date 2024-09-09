import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Company = () => {
  // Initial company data
  const [data, setData] = useState(null)

  const [isEditing, setIsEditing] = useState(false)
  const [logoPreview, setLogoPreview] = useState(null) // State to hold the logo preview

  useEffect(() => {
    // Use ipcRenderer to fetch the company data
    window.electron.ipcRenderer.invoke('getCompany',"Hiiii").then((data) => {
      setData(data[0])
    })
  }, [])

  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleLogoChange = (e) => {
    const file = e.target.files[0]
    console.log('Got the image')
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setData((prevData) => ({ ...prevData, logo: reader.result })) // Save the logo data as base64 string
        setLogoPreview(reader.result) // Set the preview
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    // Implement save logic here (e.g., API call)
    console.log('Saved Data:', data)
    setIsEditing(false)
  }

  return (
    <div className="flex flex-1 justify-center items-center min-h-screen bg-background p-6">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isEditing ? 'Edit Company Details' : 'Company Details'}
        </h2>
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 capitalize mb-2">Logo</label>
          {isEditing ? (
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="block w-full p-3 border border-gray-300 rounded-md shadow-sm"
            />
          ) : logoPreview ? (
            <img
              src={logoPreview}
              alt="Company Logo"
              className="block w-32 h-32 object-cover mt-1 border border-gray-300 rounded-md"
            />
          ) : (
            <p className="block w-full p-3 bg-gray-100 text-lg text-gray-900 border border-gray-300 rounded-md">
              No logo uploaded
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div key={0} className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 capitalize mb-2">
              Company
            </label>
            {isEditing ? (
              <input
                type="text"
                name="cName"
                value={data?.cName}
                onChange={(e) => handleChange(e)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              // Mimic input field's height using padding
              <p className="block w-full p-3 bg-gray-100 text-lg text-gray-900 border border-gray-300 rounded-md shadow-sm">
                {data?.cName}
              </p>
            )}
          </div>
          <div key={0} className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 capitalize mb-2">Owner</label>
            {isEditing ? (
              <input
                type="text"
                name="owner"
                value={data?.owner}
                onChange={(e) => handleChange(e)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              // Mimic input field's height using padding
              <p className="block w-full p-3 bg-gray-100 text-lg text-gray-900 border border-gray-300 rounded-md shadow-sm">
                {data?.owner}
              </p>
            )}
          </div>
          <div key={0} className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 capitalize mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={data?.email}
                onChange={(e) => handleChange(e)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              // Mimic input field's height using padding
              <p className="block w-full p-3 bg-gray-100 text-lg text-gray-900 border border-gray-300 rounded-md shadow-sm">
                {data?.email}
              </p>
            )}
          </div>
          <div key={0} className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 capitalize mb-2">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={data?.phone}
                onChange={(e) => handleChange(e)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              // Mimic input field's height using padding
              <p className="block w-full p-3 bg-gray-100 text-lg text-gray-900 border border-gray-300 rounded-md shadow-sm">
                {data?.phone}
              </p>
            )}
          </div>
          <div key={0} className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 capitalize mb-2">
              Address
            </label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={data?.address}
                onChange={(e) => handleChange(e)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              // Mimic input field's height using padding
              <p className="block w-full p-3 bg-gray-100 text-lg text-gray-900 border border-gray-300 rounded-md shadow-sm">
                {data?.address}
              </p>
            )}
          </div>
          <div key={0} className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 capitalize mb-2">
              GST Numbar
            </label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={data?.gst_no}
                onChange={(e) => handleChange(e)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm"
              />
            ) : (
              // Mimic input field's height using padding
              <p className="block w-full p-3 bg-gray-100 text-lg text-gray-900 border border-gray-300 rounded-md shadow-sm">
                {data?.gst_no}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-6">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-3"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Company
