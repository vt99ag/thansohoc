import React, { useState, useEffect } from 'react'

const Form = ({ setShow, setFullInfo }) => {
  const [fullName, setFullName] = useState({})
  const [fullDay, setFullDay] = useState({})
  const [showInfo, setShowInfo] = useState('')
  let nameSuccess = '';
  let birthDaySuccess = '';
  let birthDaySuccess2 = '';
  let idSettimeOut = null;
  Object.values(fullName).forEach((str) => {
    return nameSuccess += str;
  });
  Object.values(fullDay).forEach((str) => {
    birthDaySuccess += str;
  });
  for (let i = 0; i < birthDaySuccess.length; i++) {
    // console.log(birthDaySuccess[i]);
    birthDaySuccess2 = birthDaySuccess2 + birthDaySuccess[i];
    if (i == 1 || i == 3) {

      birthDaySuccess2 += '/'
    }

  }

  //

  const handleChangeName = (e) => {
    // console.log(e.target.value);
    let countStep = Number(e.target.getAttribute("data-name")) + 1
    if (e.target.value !== '' && countStep <= 26) {
      let inputFocus = document.querySelector(`input[data-name='${countStep}']`)
      // console.log(inputFocus);
      inputFocus.focus()
    }
    let dataFullDay = document.querySelectorAll('input[name="inputName"]')
    let day = []
    dataFullDay.forEach((item, index) => {
      day.push(item.value)
    })
    setFullName(day);
  }


  const handleChangeDay = (e) => {
    // console.log(e.target.value);
    let countStep = Number(e.target.getAttribute("data-day")) + 1
    if (e.target.value !== '' && countStep <= 8) {
      let inputFocus = document.querySelector(`input[data-day='${countStep}']`)
      // console.log(inputFocus);
      inputFocus.focus()
    }
    let dataFullDay = document.querySelectorAll('input[name="inputDay"]')
    let day = []
    dataFullDay.forEach((item, index) => {
      day.push(item.value)
    })
    setFullDay(day);
  }
  const changeName = (e) => {
    // console.log(e.key);
    let countStep = Number(e.target.getAttribute("data-name")) - 1
    if (e.key === 'Backspace' && e.target.value === '' && countStep >= 1) {
      // console.log(countStep);
      let inputFocus = document.querySelector(`input[data-name='${countStep}']`)
      // console.log(inputFocus);
      setTimeout(inputFocus.focus(), 300)
    }
  }
  const changeDay = (e) => {
    // console.log(e.key);
    let countStep = Number(e.target.getAttribute("data-day")) - 1
    if (e.key === 'Backspace' && e.target.value === '' && countStep >= 1) {
      // console.log(countStep);
      let inputFocus = document.querySelector(`input[data-day='${countStep}']`)
      // console.log(inputFocus);
      setTimeout(inputFocus.focus(), 300)
      clearTimeout(inputFocus.focus())
    }


  }

  const hanleSubmit = (e) => {
    e.preventDefault();

    if (nameSuccess !== '' && birthDaySuccess2.length == 10) {

      setFullInfo({
        nameSuccess,
        birthDaySuccess2,
      })
      setShow(true);
    }
    else {
      // console.log("....vao")
      setShowInfo("Vui l??ng nh???p ?????y ????? th??ng tin")
      // idSettimeOut = setTimeout(() => {
      //   setShowInfo("")
      // }, 3000);
      // clearTimeout(setShowInfo())
    }
  }
  // useEffect(() => {
  //   return () => {
  //      clearTimeout(idSettimeOut);
  //   }
  // }, [idSettimeOut]);
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "20px", marginBottom: "10px" }}>{showInfo}</h1>
      <form className="formInput">
        <label>
          <b>Nh???p ?????y ????? h??? t??n khai sinh</b>
        </label>
        <br />
        <div>
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='1' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='2' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='3' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='4' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='5' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='6' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='7' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='8' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='9' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='10' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='11' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='12' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='13' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='14' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='15' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='16' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='17' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='18' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='19' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='20' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='21' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='22' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='23' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='24' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='25' maxLength={1} onChange={handleChangeName} name='inputName' />
          <input className="inputValue" onKeyDown={changeName} type="text" data-name='26' maxLength={1} onChange={handleChangeName} name='inputName' />
        </div>
        <br />
        <label>
          <b >Nh???p ng??y/th??ng/n??m sinh</b>
        </label>
        <br />
        <div className="formBody">
          <div>
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='1' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='2' maxLength={1} onChange={handleChangeDay} name='inputDay' />
          </div>
          <div className="formBody2">
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='3' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='4' maxLength={1} onChange={handleChangeDay} name='inputDay' />
          </div>
          <div className="formBody2">
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='5' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='6' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='7' maxLength={1} onChange={handleChangeDay} name='inputDay' />
            <input className="inputValue" onKeyDown={changeDay} type="text" data-day='8' maxLength={1} onChange={handleChangeDay} name='inputDay' />
          </div>
        </div>

        <br />
        {/* <label>
                  <b >Nh???p ng??y/th??ng/n??m sinh</b>
                  <div style={{margin:"20px 0"}}>
                    <select width="50" className="inputValue2" name="day">
                      <option value="01">Ng??y 01</option><option value="02">Ng??y 02</option><option value="03">Ng??y 03</option><option value="04">Ng??y 04</option><option value="05">Ng??y 05</option><option value="06">Ng??y 06</option><option value="07">Ng??y 07</option><option value="08">Ng??y 08</option><option value="09">Ng??y 09</option><option value="10">Ng??y 10</option><option value="11">Ng??y 11</option><option value="12">Ng??y 12</option><option value="13">Ng??y 13</option><option value="14">Ng??y 14</option><option value="15">Ng??y 15</option><option value="16">Ng??y 16</option><option value="17">Ng??y 17</option><option value="18">Ng??y 18</option><option value="19">Ng??y 19</option><option value="20">Ng??y 20</option><option value="21">Ng??y 21</option><option value="22">Ng??y 22</option><option value="23">Ng??y 23</option><option value="24">Ng??y 24</option><option value="25">Ng??y 25</option><option value="26">Ng??y 26</option><option value="27">Ng??y 27</option><option value="28">Ng??y 28</option><option value="29">Ng??y 29</option><option value="30">Ng??y 30</option><option value="31">Ng??y 31</option></select>
                    <select className="inputValue2" className="custom-select" name="month">
                      <option value="01">Th??ng 01</option><option value="02">Th??ng 02</option><option value="03">Th??ng 03</option><option value="04">Th??ng 04</option><option value="05">Th??ng 05</option><option value="06">Th??ng 06</option><option value="07">Th??ng 07</option><option value="08">Th??ng 08</option><option value="09">Th??ng 09</option><option value="10">Th??ng 10</option><option value="11">Th??ng 11</option><option value="12">Th??ng 12</option></select>
                    <input className="inputValue2" placeholder="N??m sinh" type="text" name="name" maxLength="4" /> 
                  </div>
              </label>        */}
        <label>
          <b>Gi???i t??nh </b>
        </label>
        <br />
        <select className="inputValue2" name="cars">
          <option value="male">Nam</option>
          <option value="female">N???</option>
        </select>
        <div className="container-btn">
          <button onClick={hanleSubmit} className="btn" type="submit">
            <span className='img-search'>
              <img width='20' height='20' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' />
            </span> <b>Tra c???u</b></button>
        </div>
      </form>
    </div>
  )
}
export default Form