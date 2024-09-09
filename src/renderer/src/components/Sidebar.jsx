import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CompanyLogo from './CompanyLogo'

const Sidebar = () => {
  const [active, setActive] = useState(1)

  return (
    <div className="h-full min-h-screen w-[250px] flex flex-col">
      <div className=" w-full p-10 flex flex-col items-center">
        <div className="w-full h-full  aspect-square">
          <CompanyLogo />
        </div>
        <h2 className="font-semi text-3xl text-center">
          Expense<span className="font-bold">Ease</span>
        </h2>
      </div>
      <div className="flex flex-col pl-5">
        <Link
          to="/authorized/"
          onClick={() => setActive(1)}
          className="flex items-center w-full relative px-5 py-2 my-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={active == 1 ? '#21a1dc' : '#A3AED0'}
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <h2
            className={`text-xl pl-5 font-bold ${active == 1 ? 'text-heading' : 'text-subheading'}`}
          >
            Home
          </h2>
          <div
            className={`absolute right-0 rounded-md w-2 h-full bg-accent ${active == 1 ? 'block' : 'hidden'} `}
          ></div>
        </Link>
        <Link
          to="/authorized/bill"
          onClick={() => setActive(4)}
          className="flex relative items-center w-full px-5 py-2 my-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={active == 4 ? '#21a1dc' : '#A3AED0'}
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>
          <h2
            className={`text-xl pl-5 font-bold ${active == 4 ? 'text-heading' : 'text-subheading'}`}
          >
            Bill
          </h2>
          <div
            className={`absolute right-0 rounded-md w-2 h-full bg-accent ${active == 4 ? 'block' : 'hidden'} `}
          ></div>
        </Link>
        <Link
          to="/authorized/vendor"
          onClick={() => setActive(3)}
          className="flex relative items-center w-full px-5 py-2 my-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={active == 3 ? '#21a1dc' : '#A3AED0'}
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
            />
          </svg>
          <h2
            className={`text-xl pl-5 font-bold ${active == 3 ? 'text-heading' : 'text-subheading'}`}
          >
            Vendor
          </h2>
          <div
            className={`absolute right-0 rounded-md w-2 h-full bg-accent ${active == 3 ? 'block' : 'hidden'} `}
          ></div>
        </Link>
        <Link
          to="/authorized/truck"
          onClick={() => setActive(2)}
          className="flex relative items-center w-full px-5 py-2 my-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={active == 2 ? '#21a1dc' : '#A3AED0'}
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>

          <h2
            className={`text-xl pl-5 font-bold ${active == 2 ? 'text-heading' : 'text-subheading'}`}
          >
            Truck
          </h2>
          <div
            className={`absolute right-0 rounded-md w-2 h-full bg-accent ${active == 2 ? 'block' : 'hidden'} `}
          ></div>
        </Link>
        <Link
          to="/authorized/company"
          onClick={() => setActive(5)}
          className="flex relative items-center w-full px-5 py-2 my-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke={active == 5 ? '#21a1dc' : '#A3AED0'}
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
            />
          </svg>

          <h2
            className={`text-xl pl-5 font-bold ${active == 5 ? 'text-heading' : 'text-subheading'}`}
          >
            Company
          </h2>
          <div
            className={`absolute right-0 rounded-md w-2 h-full bg-accent ${active == 5 ? 'block' : 'hidden'} `}
          ></div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
