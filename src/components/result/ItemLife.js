import React from 'react'

const ItemLife = ({ name, life }) => {
    let i = 0
    const body = life.map((vl, index) => {
        if (vl > 1) {
            if (index === 0 || index === 2 || index === 4 || index === 6) {
                const check = (i % 2) !== 0
                let style = {}
                if (check) {
                    style = { backgroundColor: "#ff4c4c", marginLeft: "10px" }
                }
                i++
                return <div key={index} style={{ marginLeft: "10px", marginTop:"10px" }}>
                    <h3 style={{ fontSize: "12px" , marginLeft: "10px"}}>Chặng đường đời {i}</h3>
                    <div style={style} className='itemIndex'>{life[index]} tuổi - Số {life[index + 1]} </div>
                </div>
            }
        }
    })
    return (
        <div className='itemLife' style={{ flexDirection: "row", display: "flex" }}>
            {body}
        </div>
    )


}
export default ItemLife