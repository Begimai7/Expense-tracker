import React from 'react'
import styled from "styled-components"

export const ChartBar = ({label, currentPrice,  maximumPrice}) => {

 
 const fillHeight = (100 * currentPrice) / maximumPrice;
 return (
   <ChartBarCont>
     <ChartBarInner>
      <ChartBarFill style={{height: `${fillHeight}` }}></ChartBarFill>
     </ChartBarInner>
     <ChartBarLabel>{label}</ChartBarLabel>
   </ChartBarCont>
    
  )
}

const ChartBarCont = styled.div`
 display: flex;
 flex-direction: column;
`
const ChartBarInner = styled.div`
  background-color: #c3b4f3;
 height: 100%;
 width: 100%;
 border: 1px solid gray;
 border-radius: 20px;
 overflow: hidden;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
`
const ChartBarFill = styled.div`
 background-color: blueviolet;
 width: 100%;
 transition: all 0.3s ease-in-out;
`
const ChartBarLabel = styled.p`
  font-weight: bold;
 font-size: 0.5rem;
 text-align: end;
 color: black;
`