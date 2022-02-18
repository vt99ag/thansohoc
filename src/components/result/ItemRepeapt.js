import React from 'react'

const ItemRepeat = ({ name, soLap }) => {
    let i =0
    const body = soLap.map((vl, index) => {
        if (vl >1) {
            const check = (i % 2) !== 0
            let style = {}
            if (check) {
                style = { backgroundColor: "#ff4c4c", marginLeft: "10px" }
            }
            i++
            return <div key={index} style={{marginLeft:"10px"}}>
                <h3 style={{ fontSize: "12px", marginLeft: "35px" }}>Số {index + 1} lặp lại</h3>
                <div style={style} className='itemIndex'>{vl} lần </div>
            </div>
        }
    })
    return (
        <div className='itemRepeat' style={{ flexDirection: "row", display: "flex" }}>
            {body}
        </div>
    )


}
export default ItemRepeat