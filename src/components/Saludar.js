import React from "react";

export default function Saludar(props) {
    const saludar = () => {
        console.log("Hola");
    };
    return (
        <div>
            {/* <p>
                Hola {props.userInfo.nombre}, tiene {props.userInfo.edad} años,
                su color favorito es {props.userInfo.color}
            </p> */}
            <button onClick={saludar}>Saludar</button>
        </div>
    );
}
