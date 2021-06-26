import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import Navbar2 from "../navbar2";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    mobileno: "",
    email: "",
    username: "",
    gender : ""
  });

  const { firstname, lastname, mobileno, email, username , gender} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if(localStorage.getItem('Token')!=null && localStorage.getItem('Token')!='undefined' && localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined')
    {
        history.push("/shopkeeper/ssprofile/");
        loadUser();
        
    }else{
      history.push("/login");
            toast.warn("You don't have access, Requires login",{
                position:"top-center"
            })
    }
    
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    var usedr=localStorage.getItem('CurrentUser');
    var json = JSON.parse(usedr);
    var obj=json["user"];
    var cid=obj["id"];

    axios.put("https://rationapp-backend.herokuapp.com/shopkeeper/ssprofile/update/"+cid, user)
    .then(res => {
        console.log(res);
        toast.success("Updated Successfully",{
            position : "top-center"
        })
        history.push("/shopkeeper/ssprofile");
    }
    )
    .catch(err => console.log(err));

  };

  const loadUser = async () => {
    
    var user=localStorage.getItem('CurrentUser');
    var json = JSON.parse(user);
    var obj=json["user"];
    var cid=obj["id"];

    // const result = await axios.get("http://localhost:5000/shopkeeper/ssprofile/"+cid)
    axios.get("https://rationapp-backend.herokuapp.com/shopkeeper/ssprofile/"+cid, {
            headers: {
                'token': `${localStorage.getItem('Token')}`
            }
          })
        .then(res =>{
            setUser(res.data);
            console.log(this.state.users);
        }).catch(err => console.log(err));
   
  };
  return (
      <>
      
    <div className="container p-3">
      <div className=" mx-auto  p-2">
        <h3 className="text-center mb-4"><strong>Edit Profile</strong></h3>
        <div className="hr"></div>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group pob">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Your Firstname"
              name="firstname"
              value={firstname}
              onChange={e => onInputChange(e)}
            />
            <span>Firstname</span>
          </div>
          <div className="form-group pob">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Your Lastname"
              name="lastname"
              value={lastname}
              onChange={e => onInputChange(e)}
            />
            <span>Lastname</span>
          </div>
          <div className="form-group pob">
            <input
              type="mobileno"
              id="inputbox"
              inputMode="tel"
              maxLength="10"
              className="form-control form-control-lg"
              placeholder="Enter Your mobile no"
              name="mobileno"
              value={mobileno}
              onChange={e => onInputChange(e)}
            />
            <span>Mobile No</span>
          </div>
          <div className="form-group pob">
            <input
              type="email"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
            <span>Email</span>
          </div>
          <div className="form-group pob">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
            <span>Username</span>
          </div>
          <div className="form-group pob">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Your Gender (Male/Female/Other)"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
            <span>Gender</span>
          </div>
          <button className="btn btn-primary btn-block">Update</button>
        </form>
      </div>
    </div>
    <ToastContainer />
    </>
  );
};

export default EditUser;