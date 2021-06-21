import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState('');
  const [pwd,setPwd] = useState('');
  const [list,setList] = useState([]);
useEffect(()=>{
  Axios.get("http://localhost:3001/api/get").then((response)=>{
   setList(response.data);
  })
})
    const postData = () => {
      Axios.post("http://localhost:3001/api/insert", {
        name:name,
         email:email,
          mobile:mobile,
           pwd:pwd,
      }).then(()=>{
        alert('Successful Insert');
      });
    };
  return (
    <div className="App">
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Registration Form</h2>
                <div className="form-group">
                  <label htmlFor="name"><i className="zmdi zmdi-account"></i></label>
                  <input type="text" name="name" id="name"  onChange={(e)=> {
                    setName(e.target.value);
                  }} placeholder="Your Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                  <input type="text" name="email" id="email" onChange={(e) =>{setEmail(e.target.value);}} placeholder="Your Email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="mobile"><i className="zmdi zmdi-phone-in-talk"></i></label>
                  <input type="text" name="mobile" id="mobile"  onChange={(e) =>{setMobile(e.target.value);}} placeholder="Your mobile"/>
                </div>
                <div className="form-group">
                  <label htmlFor="pwd"><i className="zmdi zmdi-lock"></i></label>
                  <input type="password" name="pwd" id="pwd" onChange={(e) =>{setPwd(e.target.value);}} placeholder="Your pwd"/>
                </div>

                <div className="button">
                  <input type="submit" name="signup" id="signup" onClick={postData} className="form-submit" value="Register"/>
                </div>
                <br/>
            </div>
          </div>
        </div>
      </section>
      <h2>View User</h2>
      <table className="table" border='1' cellPadding='0' cellSpacing='0'>
       <tr className="rows">
          <th>name</th>
          <th>email</th>
          <th>mobile</th>
          <th>password</th>
       </tr>
        {list.map((val)=>{
          return(
             <tr className="rows">
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.mobile}</td>
                <td>{val.password}</td>
             </tr>
          );
        })}
        </table>
    </div>
  );
}

export default App;
