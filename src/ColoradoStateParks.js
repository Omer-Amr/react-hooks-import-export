import React from "react";
import howManyParks from "./parks/howManyParks";
import {trees} from "./parks/RockyMountain"
import MesaVerde from "./parks/MesaVerde";


function ColoradoStateParks() {

  howManyParks(); // => "42 parks!"
  
  return(
    <div>
      <MesaVerde />
      <h1>Colorado State Parks!: {trees}</h1>
    </div>
  )

}

export default ColoradoStateParks;
