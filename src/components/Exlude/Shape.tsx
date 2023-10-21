import React from 'react'
type ShapeType="cube" |'square' | 'rectange' | 'triangle'
type twoShapeType= Exclude<ShapeType , "cube">;

type themeType="dark" | 'Light';
type ColorType="red" | "blue" | "yellow";
type ItemProps={
    color: `${themeType}-${ColorType}`;
    exludeColor: Exclude<`${themeType}-${ColorType}`,"dark-yellow">;
}

const Shape = (props:ItemProps) => {
    const shape:ShapeType="cube";
    const twoShape:twoShapeType="rectange";  // no cube suggestion;


  return (

    <div>shape</div>
  )
}

export default Shape