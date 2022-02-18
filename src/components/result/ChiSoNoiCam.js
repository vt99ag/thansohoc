import React from 'react'

const ChiSoNoiCam = ({ name, value, data }) => {
    let title = '';
    const body = value.map((vl, index) => {
        if (vl !== ",") {
            data.map((dt) => {
                if (dt.chiso == vl) {
                    title = dt.title;
                }
            })
            return (
                <div key={index}>
                    <h3 style={{ margin: "10px 0" }}>{name}:<span style={{ color: "#ad3718", marginLeft: "4px" }}>Số {vl}</span> </h3>
                    <p>{title}</p>
                </div>
            )
        }

    })
    return (<div style={{ marginTop: "20px", marginBottom: "30px", fontSize: "15px", backgroundColor: "#fae5e5", borderRadius: "5px", padding: "8px" }}>
        {body}
    </div>)


}
export default ChiSoNoiCam
