import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { toast , ToastContainer} from "react-toastify";
import { LoadingIndicator } from "../..";
import Navbar2 from "../navbar2";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    name: "",
    totalFamilyMembers: "",  
    rationType: "",
  });

  const { email, name, totalFamilyMembers, rationType } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const onSubmit = async e => {
    e.preventDefault();
        var userd=localStorage.getItem('CurrentUser');
        var json = JSON.parse(userd);
        var obj=json["user"];
        var cid=obj["id"];
    console.log(user);
    axios.post("http://localhost:5000/shopkeeper/ssuserdetails/add-user/"+cid, user)
        .then(res => {
            console.log(res.data)
            toast.success("Ration user added",{
                position:"top-center"
            })
            
            history.push("/shopkeeper/ssuserdetails/");
        })
        .catch(err => console.log(err));
    
  };
  return (
    <>
    
    <div className="container">
      <div className="mx-auto  p-2">
        <h3 className="text-center mb-4"><strong>Add A Ration Card Holder</strong></h3>
        <div className="hr"></div>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter card-holders email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Total family Members"
              name="totalFamilyMembers"
              value={totalFamilyMembers}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Ration type (saffron / white / yellow)"
              name="rationType"
              value={rationType}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add</button>
        </form>
      </div>
    </div>
    <ToastContainer/>
    </>
  );
};

export default AddUser;