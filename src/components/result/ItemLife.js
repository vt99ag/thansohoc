import React from 'react'

const ItemLife = ({ name, life }) => {
    let i =0
    const body = life.map((vl, index) => {
        if (vl >1) { 
            const check = (i % 2) !== 0
            let style = {}
            if (check) {
                style = { backgroundColor: "#ff4c4c", marginLeft: "10px" }
            }
            i++
            return <div key={index} style={{marginLeft:"10px"}}>
                <h3 style={{ fontSize: "12px", marginLeft: "5px",marginTop: "15px" }}>Chặng đường đời {index + 1}</h3>
                <div style={style} className='itemIndex'>{vl} tuổi </div>
            </div>
        }
    })
    return (
        <div className='item' style={{ flexDirection: "row", display: "flex" }}>
            {body}
        </div>
    )


}
export default ItemLife