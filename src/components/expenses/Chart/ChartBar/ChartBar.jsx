import React from 'react'
import "./ChartBar.css"

export const ChartBar = ({label, currentPrice,  maximumPrice}) => {

 
 const fillHeight = (100 * currentPrice) / maximumPrice;
 return (
   <div className='chart-bar'>
     <div className='chart-bar__inner'>
      <div className='chart-bar__fill' style={{height: `${fillHeight}` }}></div>
     </div>
     <p className='chart-bar__label'>{label}</p>
   </div>
    
  )
}
