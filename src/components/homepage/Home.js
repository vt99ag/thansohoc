import Form from './Form';
const Home = ({setShow,setFullInfo,fullInfo}) => {
  return (
    <div className='body-home'> 
        <div className='body-mid'>
    
            <Form fullInfo={fullInfo} setFullInfo={setFullInfo} setShow = {setShow}/>
            <div className='footer'>
              <p>
                Ứng dụng số học pytago giúp bạn khai thác tiềm năng cao nhất, đánh thức tiềm năng vô hạn trong bạn.
              </p>
              <p style={{margin:"18px 0"}}>
                Giải mã tiềm năng và làm chủ cuộc sống của bạn thông qua ứng dụng số học pytago để khám phá bạn là ai và dự đoán tương lai của bạn thông qua năng lượng của các con số!
              </p>
            </div>
        </div>
    </div>
  )
}

export default Home