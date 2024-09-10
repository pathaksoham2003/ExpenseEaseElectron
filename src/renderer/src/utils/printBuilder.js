export const buildPrint = () => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Invoice</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      span {
        padding-top: 2px;
        padding-bottom: 2px;
      }
      th{
        background-color: '#f3f4f6'
      }
      .container {
        max-width: 1000px; margin: 20px auto; padding: 20px; background-color: #ffffff; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
    <div
      class="container"
    >
      <!-- Header -->
      <div
        style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        "
      >
        <div>
          <div style="display: flex; flex-direction: column">
            <h2 style="font-size: 20px; font-weight: bold">
              Chandrabhaga Transport
            </h2>
            <span>Plot No. C-190, MIDC Waluj, Aurangabad</span>
            <span>Email: chandrabhagatransport21@gmail.com</span>
            <span>GST No: 27BGVP6664Q1ZA</span>
          </div>
          <div style="display: flex; flex-direction: column">
            <h2 style="font-size: 20px; font-weight: bold">Bill To:</h2>
            <span>Om Logistics Ltd.</span>
            <span
              >Gut No. 111, Near Rajmata Hotel, Karodi, Mumbai Highway,
              Chhatrapati Sambhaji Nagar , Maharashtra - 431136
            </span>
            <span>Email: chandrabhagatransport21@gmail.com</span>
            <span>GST No: 27AAAC04716C1ZT</span>
          </div>
        </div>

        <div style="text-align: right">
          <img
            src="ChhatrapatiShivajiMaharaj.webp"
            alt="Shivaji Maharaj Icon"
            style="height: 110px; width: 100px"
          />
          <p>Invoice No: _______</p>
          <p>Date: _______</p>
        </div>
      </div>

      <!-- Bill To Section -->

      <!-- Transportation Details -->
      <h3 style="font-size: 18px; font-weight: 600; padding:0px; margin-bottom:5px;">Transportation Details:</h3>
      <div style="width: 100%; display: flex; justify-content: space-between; padding-bottom:5px">
        <div style="display: flex; flex-direction: column">
          <span
            ><strong>From:</strong>
            Cidco Bus Stand Near Siddharth Garden</span
          >
          <span
            ><strong>To:</strong>
            Western Bridge, Bindu Saran, Banglore</span
          >
        </div>
        <span><strong>Vehicle No:</strong> MH 20 GE 2546</span>
      </div>

      <!-- Items Table -->
      <div style="margin-bottom: 16px; overflow-x: auto">
        <table
          style="
            width: 100%;
            border: 1px solid #d1d5db;
            border-collapse: collapse;
            table-layout: fixed;
          "
        >
          <thead>
            <tr style="font-size: smaller">
              <th style="background-color: #f3f4f6; width: 50px">S.No</th>
              <th style="background-color: #f3f4f6">Item Name</th>
              <th style="background-color: #f3f4f6">HSN/SAC</th>
              <th style="background-color: #f3f4f6; width: 55px">Quantity</th>
              <th style="background-color: #f3f4f6; width: 50px">Unit</th>
              <th style="background-color: #f3f4f6">Price/Unit</th>
              <th style="background-color: #f3f4f6">Taxable Amount</th>
              <th style="background-color: #f3f4f6">CGST 6%</th>
              <th style="background-color: #f3f4f6">SGST 6%</th>
              <th style="background-color: #f3f4f6">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 50px">1</td>
              <td>
                SHome vnjvjn njsjdvjdnvjn dfvfkjosnbjreib rnboirbirnbjrtnb
                enfjnvejfnviefn jvnefjvnenve nvjfnjvfvi
              </td>
              <td>12500</td>
              <td style="width: 55px">1</td>
              <td style="width: 50px">5</td>
              <td>1200</td>
              <td>1526000</td>
              <td>15600</td>
              <td>15264</td>
              <td>1526300</td>
            </tr>
            <!-- Add more rows as needed -->
          </tbody>
        </table>
      </div>

      <!-- Amount Section -->
      <div
        style="
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #d1d5db;
          padding-top: 16px;
        "
      >
        <div style="display: flex; flex-direction: column">
          <span><strong>Sub Total: </strong>_____________</span>
          <span><strong>Round Off: </strong>_____________</span>
        </div>
        <div style="display: flex; flex-direction: column">
          <span><strong>Total: </strong>_____________</span>
          <span><strong>Recieved: </strong>_____________</span>
          <span><strong>Balance: </strong>_____________</span>
        </div>
      </div>

      <!-- Tax Details -->
      <div
        style="
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div style="display: flex; flex-direction: column">
          <span>CGST 6%: _____________</span>
          <span>SGST 6%: _____________</span>
        </div>
        <div style="text-align: center">
          <p style="font-style: italic">
            Thanks for Doing Business with Chandrabhaga Transport
          </p>
        </div>
      </div>

      <!-- Footer -->

      <!-- Creator's Footer -->
      <div
        style="
          padding: 7px;
          background-color: #f3f4f6;
          text-align: center;
          margin-top: 10px;
          font-size: 14px;
          color: #555;
        "
      >
        <strong>
          Bill is generated by ExpenseEase Software | Build Website, Software, Apps | 7887557175 | pathaksoham2003@gmail.com 
        </strong>
      </div>
    </div>
  </body>
</html>
`
}
