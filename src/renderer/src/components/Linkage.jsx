import React from 'react'

const Linkage = (icon,color,size) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={size}
        stroke={color}
        className="size-6"
      >
       {...icon}
      </svg>
  )
}

export default Linkage