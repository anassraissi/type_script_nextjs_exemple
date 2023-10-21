import React from 'react'
import Shape from './shape'

const ShapeList = ( ) => {
    //there is not suggest the dark-yellow in exludeColor from props;
  return (
    <div>
        
    <Shape color="Light-blue" exludeColor="dark-blue"></Shape>  
    </div>
  )
}

export default ShapeList