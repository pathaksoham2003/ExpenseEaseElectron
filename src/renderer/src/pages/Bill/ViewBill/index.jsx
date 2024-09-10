import React from 'react'
import './print.css'
import ChhatrapatiShivajiMaharaj from '../../../assets/ChhatrapatiShivajiMaharaj.webp?react'
import { printCssString } from './stringcss'

const ViewBill = ({ view, setView }) => {
  const handleClose = () => {
    setView(false)
  }

  const handlePrint = () => {
    // Select the container content
    const containerElement = document.querySelector('.container')

    // If the container exists, get its innerHTML
    if (containerElement) {
      // Get the content inside the container
      let contentInsideContainerClass = containerElement.innerHTML

      // Replace all occurrences of 'className' with 'class' in the content
      contentInsideContainerClass = contentInsideContainerClass.replace(/className/g, 'class')

      // Create the full HTML content for the print request
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Invoice</title>
            <link rel="stylesheet" href="./print.css">
            <style>
             ${printCssString}
            </style>
          </head>
          <body>
            <div class="container">
              ${contentInsideContainerClass}
            </div>
          </body>
        </html>
      `

      // Send the HTML content to Electron for printing
      window.electron.ipcRenderer.send('print-content', htmlContent)
    }
  }

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ease-out ${view ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className="relative p-4 w-full max-w-5xl max-h-full bg-white rounded-lg shadow transform transition-opacity duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div className="w-full h-8">
          <button
            onClick={handlePrint}
            className="bg-green-500 text-black rounded-lg py-2 px-4 hover:bg-green-400 transition-colors duration-300"
          >
            Print
          </button>
        </div>
        <div className="w-full overflow-y-scroll border mt-5 h-[700px] p-3">
          <div className="container">
            <div className="header">
              <div className="company-info">
                <div className="company-details">
                  <h2>Chandrabhaga Transport</h2>
                  <span>Plot No. C-190, MIDC Waluj, Aurangabad</span>
                  <span>Email: chandrabhagatransport21@gmail.com</span>
                  <span>GST No: 27BGVP6664Q1ZA</span>
                </div>
                <div className="bill-to">
                  <h2>Bill To:</h2>
                  <span>Om Logistics Ltd.</span>
                  <span>
                    Gut No. 111, Near Rajmata Hotel, Karodi, Mumbai Highway, Chhatrapati Sambhaji
                    Nagar, Maharashtra - 431136
                  </span>
                  <span>Email: chandrabhagatransport21@gmail.com</span>
                  <span>GST No: 27AAAC04716C1ZT</span>
                </div>
              </div>
              <div className="invoice-details">
                <img
                  src="https://cdn.exoticindia.com/images/products/thumbnails/t800x600/sculpture-2019/ldb756.webp"
                  alt="Shivaji Maharaj Icon"
                  className="invoice-img"
                />
                <p>Invoice No: _______</p>
                <p>Date: _______</p>
              </div>
            </div>

            <h3>Transportation Details:</h3>
            <div className="transportation-details">
              <div className="from-to">
                <span>
                  <strong>From:</strong> Cidco Bus Stand Near Siddharth Garden
                </span>
                <span>
                  <strong>To:</strong> Western Bridge, Bindu Saran, Banglore
                </span>
              </div>
              <span>
                <strong>Vehicle No:</strong> MH 20 GE 2546
              </span>
            </div>

            <div className="table-container">
              <table className="invoice-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Item Name</th>
                    <th>HSN/SAC</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Price/Unit</th>
                    <th>Taxable Amount</th>
                    <th>CGST 6%</th>
                    <th>SGST 6%</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Example Item Description</td>
                    <td>12500</td>
                    <td>1</td>
                    <td>5</td>
                    <td>1200</td>
                    <td>1526000</td>
                    <td>15600</td>
                    <td>15264</td>
                    <td>1526300</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="amount-section">
              <div className="sub-total">
                <span>
                  <strong>Sub Total: </strong>_____________
                </span>
                <span>
                  <strong>Round Off: </strong>_____________
                </span>
              </div>
              <div className="total">
                <span>
                  <strong>Total: </strong>_____________
                </span>
                <span>
                  <strong>Recieved: </strong>_____________
                </span>
                <span>
                  <strong>Balance: </strong>_____________
                </span>
              </div>
            </div>

            <div className="tax-details">
              <div className="tax-breakdown">
                <span>CGST 6%: _____________</span>
                <span>SGST 6%: _____________</span>
              </div>
              <div className="thanks">
                <p>Thanks for Doing Business with Chandrabhaga Transport</p>
              </div>
            </div>

            <div className="footer">
              <strong>
                Bill is generated by ExpenseEase Software | Build Website, Software, Apps |
                7887557175 | pathaksoham2003@gmail.com
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBill
