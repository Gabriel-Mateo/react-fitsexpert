
import React from "react";
import '../styles/buttonStyle.css'
export const Buttones = (props) => {
  return (
          <button className="styleButton"
          onClick={props.evento}
          >{props.nombre}</button>
  )
}
