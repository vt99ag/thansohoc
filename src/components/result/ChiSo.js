import React from 'react'
import ChiSoNoiCam from './ChiSoNoiCam';

const ChiSo = ({ name, value, data }) => {
  let title = '';

  if (name == "Chỉ số nội cảm" && value.length > 1) {
    return (<ChiSoNoiCam key={value} name={name} value={value} data={data} />)


  } else {
    data.map((dt) => {
      if (dt.chiso == value) {
        title = dt.title;
      }
    })
    return (
      <div style={{ marginTop: "20px", marginBottom: "30px", fontSize: "15px", backgroundColor: "#fae5e5", borderRadius: "5px", padding: "8px" }}>
        <h3 style={{ margin: "10px 0" }}>{name}:<span style={{ color: "#ad3718", marginLeft: "4px" }}>Số {value}</span> </h3>
        <p>{title}</p>
      </div>
    )
  }
}
export default ChiSo
