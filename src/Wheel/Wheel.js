import React from "react";

const Wheel=()=>{
    const {
        getMenu,
        gotoPrev,
        selectThis,
        gotoNext,
        pauseNext
    }=props;
    return(
        <div className="wheel-ui">

            <div>
                
                    <img className="action-icons" src="https://cdn-icons-png.flaticon.com/256/3687/3687584.png" alt="menu" style={{height: 30,width: 30}} onClick={() => getMenu()}/>
                
            </div>

            <div className="icon-2">
                
                    <img className="action-icons" src="https://cdn-icons-png.flaticon.com/256/318/318276.png" alt="prev" style={{height: 30,width: 30, marginRight:5}} onClick={() => gotoPrev()}/>
                
                
                    <img className="action-icons" src="https://cdn-icons-png.flaticon.com/256/597/597669.png" alt="select" style={{height: 30,width: 30}} onClick={() => selectThis()}/>
                
                    <img className="action-icons" src="https://cdn-icons-png.flaticon.com/256/318/318275.png" alt="next" style={{height: 30,width: 30, marginLeft:5}} onClick={() => gotoNext()}/>
                
            </div>

            <div>
            
                <img className="action-icons" src="https://cdn-icons-png.flaticon.com/256/2404/2404317.png" alt="pause-next" style={{height: 30,width: 30}} onClick={() => pauseNext()}/>
            
            </div>

        </div>
    )
}


    


export default Wheel;