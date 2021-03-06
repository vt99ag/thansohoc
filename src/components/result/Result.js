import React from 'react'
import List from './List'
import imgIcom from '../../dinh.PNG'
import ChiSo from './ChiSo'
import {
    countDate, countMonth, countSMDD, countNTTT, countIndexTop, countTop,
    countYear, countMature, countMission, countAttitude, countInner,
    countInteraction, countIntrospective, countComplementary, countRepeat,
    countDay, countLife,
} from '../count/count';
import { arrayChangDuongDoi, arrayNoiTam, arrayNgaySinh, arrayDinhMenh, arrayThaiDo, arrayDuongDoi, arrayNoiCam, arrayNamCaNhan, arrayNgayCaNhan, arrayThangCaNhan, arrayTruongThanh, arrayTuongTac } from '../data/text';
const Result = ({ info }) => {
    let dayNow = new Date();
    let dateNow = dayNow.getDate();
    let monthNow = dayNow.getMonth() + 1;
    let yearNow = dayNow.getFullYear();
    // console.log("thang hien tai la: ",monthNow);
    let name = info.nameSuccess;
    let birthDay = info.birthDaySuccess2;
    let day = birthDay.split('/');
    let dayBirthDay = parseInt(day[0]);
    let monthBirthDay = parseInt(day[1]);
    let yearBirthDay = parseInt(day[2]);
    const obj1 = {
        soNoiCam: countIntrospective(name),
        soNoiTam: countInner(name),
    }
    const obj2 = {
        soLap: countRepeat(name, dayBirthDay, monthBirthDay, yearBirthDay),
        thaiDo: countAttitude(dayBirthDay, monthBirthDay),
        tuongTac: countInteraction(name),
    }
    const obj3 = {
        soTruongThanh: countMature(name, dayBirthDay, monthBirthDay, yearBirthDay),
        soBoSung: countComplementary(name),
        noiTamVaTuongTac: countNTTT(name),
    }
    const obj4 = {
        suMenh: countMission(name),
        duongDoi: countLife(dayBirthDay, monthBirthDay, yearBirthDay),
        namCaNhan: countYear(dayBirthDay, monthBirthDay, yearNow),
        thangCaNhan: countMonth(dayBirthDay, monthBirthDay, yearNow, monthNow),
        ngayCaNhan: countDate(dayBirthDay, monthBirthDay, yearNow, monthNow, dateNow),
        top: [countTop(dayBirthDay, monthBirthDay, yearBirthDay)[0],countIndexTop(dayBirthDay, monthBirthDay, yearBirthDay)[0],
        countTop(dayBirthDay, monthBirthDay, yearBirthDay)[1],countIndexTop(dayBirthDay, monthBirthDay, yearBirthDay)[1],
        countTop(dayBirthDay, monthBirthDay, yearBirthDay)[2],countIndexTop(dayBirthDay, monthBirthDay, yearBirthDay)[2],
        countTop(dayBirthDay, monthBirthDay, yearBirthDay)[3],countIndexTop(dayBirthDay, monthBirthDay, yearBirthDay)[3],        
    ] 
    }

    const obj5 = {
        soNgaySinh: countDay(dayBirthDay), suMenhVaDuongDoi: countSMDD(name, dayBirthDay, monthBirthDay, yearBirthDay),
        suMenhVaDuongDoi: countSMDD(name, dayBirthDay, monthBirthDay, yearBirthDay)
    }

    const indexTop = countIndexTop(dayBirthDay, monthBirthDay, yearBirthDay);
    return (
        <div className='result'>
            <div style={{ marginBottom: "20px", fontSize: "12px" }}>
                <p style={{ fontSize: "16px" }}>H??? v?? t??n : <span style={{ marginLeft: "10px", fontWeight: "500", }}>{name.toUpperCase()}</span></p>
                <p style={{ fontSize: "16px" }}>Ng??y sinh : <span style={{ marginLeft: "10px", fontWeight: "500" }}>{birthDay}</span></p>
            </div>
            <div className='list'>
                <List title="1.Th??? gi???i b??n trong" obj={obj1} />
                <List title="2.Th??? gi???i b??n ngo??i" obj={obj2} />
                <List title="3.Ph??t tri???n b???n th??n" obj={obj3} />
                <List title="4.H??nh tr??nh" obj={obj4} />
                <List title="5.Ngu???n l???c h??? tr???" obj={obj5} />
                
                <ChiSo name="Ch??? s??? n???i c???m" data={arrayNoiCam} value={obj1.soNoiCam} />
                <ChiSo name="Ch??? s??? n???i t??m" data={arrayNoiTam} value={obj1.soNoiTam} />
                <ChiSo name="Ch??? s??? th??i ?????" data={arrayThaiDo} value={obj2.thaiDo} />
                <ChiSo name="Ch??? s??? t????ng t??c" data={arrayTuongTac} value={obj2.tuongTac} />
                <ChiSo name="Ch??? s??? tr?????ng th??nh" data={arrayTruongThanh} value={obj3.soTruongThanh} />
                <ChiSo name="Ch??? s??? s??? m???nh" data={arrayDinhMenh} value={obj4.suMenh} />
                <ChiSo name="Ch??? s??? ???????ng ?????i" data={arrayDuongDoi} value={obj4.duongDoi} />
                <ChiSo name="Ch??? s??? ng??y c?? nh??n" data={arrayNgayCaNhan} value={obj4.ngayCaNhan} />
                <ChiSo name="Ch??? s??? th??ng c?? nh??n" data={arrayThangCaNhan} value={obj4.thangCaNhan} />
                <ChiSo name="Ch??? s??? n??m c?? nh??n" data={arrayNamCaNhan} value={obj4.namCaNhan} />
                <ChiSo name="Ch???ng ???????ng ?????i 1" data={arrayChangDuongDoi} value={indexTop[0]} />
                <ChiSo name="Ch???ng ???????ng ?????i 2" data={arrayChangDuongDoi} value={indexTop[1]} />
                <ChiSo name="Ch???ng ???????ng ?????i 3" data={arrayChangDuongDoi} value={indexTop[2]} />
                <ChiSo name="Ch???ng ???????ng ?????i 4" data={arrayChangDuongDoi} value={indexTop[3]} />
                <ChiSo name="Ch??? s??? ng??y sinh" data={arrayNgaySinh} value={obj5.soNgaySinh} />

                


            </div>
        </div>
    )
}

export default Result