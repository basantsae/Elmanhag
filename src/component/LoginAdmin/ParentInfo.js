import img from "../imgs/40c007c647ea8034751aec3d7d283fa4.png";
import "./login.css";
function ParentInfo(){
    return(
        <>
        <div className="container-login">
        <div className="img-login">
          <img src={img} className="background" alt="imgLogin" />
        </div>
        <div className="add-login">
          <h1 >! هيا لتبدأ رحلتك</h1>
          <div className="input-login">
            <h2>عرفنا عن نفسك</h2>
            <div className="input-name">
              <input type="text" placeholder="اسم ولى الامر" />
              <input type="text" placeholder="رقم هاتف ولى الامر" />
              <button className="submit-btn">ارسال</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default ParentInfo;