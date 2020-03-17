import React from "react";

export default function Saludar(props) {
    console.log(props);

    return (
        <div>
            {/* <p>
                Hola {props.userInfo.nombre}, tiene {props.userInfo.edad} años,
                su color favorito es {props.userInfo.color}
            </p> */}
            <button onClick={() => props.saludarFn(props.userInfo.nombre)}>
                Saludar
            </button>
        </div>
    );
}
