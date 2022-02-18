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
                <p style={{ fontSize: "16px" }}>Họ và tên : <span style={{ marginLeft: "10px", fontWeight: "500", }}>{name.toUpperCase()}</span></p>
                <p style={{ fontSize: "16px" }}>Ngày sinh : <span style={{ marginLeft: "10px", fontWeight: "500" }}>{birthDay}</span></p>
            </div>
            <div className='list'>
                <List title="1.Thế giới bên trong" obj={obj1} />
                <List title="2.Thế giới bên ngoài" obj={obj2} />
                <List title="3.Phát triển bản thân" obj={obj3} />
                <List title="4.Hành trình" obj={obj4} />
                <List title="5.Nguồn lực hỗ trợ" obj={obj5} />
                
                <ChiSo name="Chỉ số nội cảm" data={arrayNoiCam} value={obj1.soNoiCam} />
                <ChiSo name="Chỉ số nội tâm" data={arrayNoiTam} value={obj1.soNoiTam} />
                <ChiSo name="Chỉ số thái độ" data={arrayThaiDo} value={obj2.thaiDo} />
                <ChiSo name="Chỉ số tương tác" data={arrayTuongTac} value={obj2.tuongTac} />
                <ChiSo name="Chỉ số trưởng thành" data={arrayTruongThanh} value={obj3.soTruongThanh} />
                <ChiSo name="Chỉ số sứ mệnh" data={arrayDinhMenh} value={obj4.suMenh} />
                <ChiSo name="Chỉ số đường đời" data={arrayDuongDoi} value={obj4.duongDoi} />
                <ChiSo name="Chỉ số ngày cá nhân" data={arrayNgayCaNhan} value={obj4.ngayCaNhan} />
                <ChiSo name="Chỉ số tháng cá nhân" data={arrayThangCaNhan} value={obj4.thangCaNhan} />
                <ChiSo name="Chỉ số năm cá nhân" data={arrayNamCaNhan} value={obj4.namCaNhan} />
                <ChiSo name="Chặng đường đời 1" data={arrayChangDuongDoi} value={indexTop[0]} />
                <ChiSo name="Chặng đường đời 2" data={arrayChangDuongDoi} value={indexTop[1]} />
                <ChiSo name="Chặng đường đời 3" data={arrayChangDuongDoi} value={indexTop[2]} />
                <ChiSo name="Chặng đường đời 4" data={arrayChangDuongDoi} value={indexTop[3]} />
                <ChiSo name="Chỉ số ngày sinh" data={arrayNgaySinh} value={obj5.soNgaySinh} />

                


            </div>
        </div>
    )
}

export default Result