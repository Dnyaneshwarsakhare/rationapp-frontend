import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const EditAdmin = () => {
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
        history.push("/admin/admin-profile");
        loadUser();
        
    }else{
      history.push("/admin-panel-login");
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

    axios.put("https://rationapp-backend.herokuapp.com/admin/admin-profile/update/"+cid, user)
    .then(res => {
        console.log(res);
        
        toast.success("Profile details updated successfully !",{
            position:"top-center"
        })
        history.push("/admin/admin-profile");
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
    axios.get("https://rationapp-backend.herokuapp.com/admin/admin-profile/"+cid, {
            headers: {
                'token': `${localStorage.getItem('Token')}`
            }
          })
        .then(res =>{
            setUser(res.data);
            
        }).catch(err => console.log(err));
   
  };
  return (
      <>
    <div className="container p-3">
      <div className=" mx-auto p-2">
        <h3 className="text-center mb-4"><strong>Edit Profile</strong></h3>
        <div className="hr"></div>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Your Firstname"
              name="firstname"
              value={firstname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Your Lastname"
              name="lastname"
              value={lastname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
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
          </div>
          <div className="form-group">
            <input
              type="email"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
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
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter Your Gender (Male/Female/Other)"
              name="gender"
              value={gender}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Update</button>
        </form>
      </div>
    </div>
    <ToastContainer />
    </>
  );
};

export default EditAdmin;