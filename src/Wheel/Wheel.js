import React from "react";

const Wheel=()=>{
    const icons= {
        height: 30,
        width: 30,
        border: 'none',
        outline: 'none',
      }
    return(
        <div className="wheel-ui">

            <div>
                <button ><img className="menu" src="https://cdn-icons-png.flaticon.com/256/3687/3687584.png" alt="menu" style={icons}></img></button>
            </div>

            <div className="icon-2">
                <span><button ><img className="prev" src="https://cdn-icons-png.flaticon.com/256/318/318276.png" alt="prev" style={icons}></img></button></span>
                <span><button ><img className="select" src="https://cdn-icons-png.flaticon.com/256/597/597669.png" alt="select" style={icons}></img></button></span>
                <span><button><img className="next" src="https://cdn-icons-png.flaticon.com/256/318/318275.png" alt="next" style={icons}></img></button></span>
            </div>

            <div>
                <button><img className="pause-next" src="https://cdn-icons-png.flaticon.com/256/2404/2404317.png" alt="pause-next" style={icons}></img></button>
            </div>

        </div>
    )
}


    


export default Wheel;