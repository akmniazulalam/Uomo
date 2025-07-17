import React from 'react'

const Badge = ({className, BadgeT}) => {
  return (
    <div className={`py-2 px-7 bg-[#262626] text-white absolute top-[15px] left-[15px] ${className}`}>{BadgeT}</div>
  )
}

export default Badge