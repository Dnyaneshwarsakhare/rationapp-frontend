import React from 'react';
import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import { NavLink } from 'react-bootstrap';
import { trackPromise } from 'react-promise-tracker';
import { LoadingIndicator } from '../..';
import { withRouter } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import AddUser from './addUser';
import Navbar2 from "../navbar2";


const RationUserList = props => {
    if(props.length < 1){
        return  <p>Nothing to show</p>;
    }else
    return(
        
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.totalFamilyMembers}</td>
            <td>{props.user.rationType}</td>
            <td>
                <NavLink style={{color:'white'}} onClick={ ()=>{props.changeStatus(props.user.email)}} className="btn bg-success" >Give</NavLink>
                
            </td>
        </tr>
        
    );
    
    
}
//onClick={ ()=>{props.changeStatus(props.user.email)}}

class Ssuserdetails extends PureComponent {
    
    constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.calculateResults = this.calculateResults.bind(this);
        this.state = {
            user : { 
                firstname : "",
                lastname : "",
                email : "",
                mobileno : "",
                username : "",
                dob : "",
                gender : "",
                password : "",
                rationUser : [],
                tokens : []
            },
            stock : {
                monthyear : "",
                riceTotalStock : "",
                riceSoldStock : 0,
                riceAvailableStock : "",
                sugarTotalStock : "",
                sugarSoldStock : 0,
                sugarAvailableStock : "",
                wheatTotalStock : "",
                wheatSoldStock : 0,
                wheatAvailableStock : "",
                oilTotalStock : "",
                oilSoldStock : 0,
                oilAvailableStock : "",
                dalTotalStock : "",
                dalSoldStock : 0,
                dalAvailableStock : "",
                sugarTotalPrice : "",
                riceTotalPrice : "",
                wheatTotalPrice : "",
                oilTotalPrice : "",
                dalTotalPrice : "",
                rationUserEmail : "",
                totalRice : "",
                totalSugar : "",
                totalWheat : "",
                totalOil : "",
                totalDal : "",
            },
            isButtonDisabled : false,
        };
    }
    
    


    componentDidMount(){

        if(localStorage.getItem('Token')!=null && localStorage.getItem('Token')!='undefined' && localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined')
        {
            
        this.props.history.push("/shopkeeper/ssuserdetails/");
        if(localStorage.getItem('CurrentUser')!=null){
        var user=localStorage.getItem('CurrentUser');
        var json = JSON.parse(user);
        var obj=json["user"];
        var cid=obj["id"];
        }else{
            this.props.history.push("/login");
            
        }
        console.log(cid);

        trackPromise(
        axios.get("https://rationapp-backend.herokuapp.com/shopkeeper/ssuserdetails/"+cid)
        .then(res => {
            console.log(res);
            this.setState({ user : res.data})
        })
        .catch(err => console.log(err)));
        

        axios.get("https://rationapp-backend.herokuapp.com/shopkeeper/ssstockdetails")
        .then(res => {
            console.log(res.data)
            this.setState({ stock : res.data})
        })
        .catch(err => console.log(err));
           
        }else{
            
            this.props.history.push("/login");
            toast.warn("You don't have access, Requires login",{
                position:"top-center"
            })
        }
    }

    calculateResults(email){
        var email = email;
    if(this.state.user.rationUser.map(user => { if(user.email ==  email){ 
        console.log(user);
                if(user.rationType == "saffron"){
                    if(user.totalFamilyMembers <= 10){
                        this.state.stock.totalRice = user.totalFamilyMembers*2;
                        this.state.stock.riceTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.riceSoldStock = this.state.stock.riceSoldStock +  user.totalFamilyMembers*2;
                        this.state.stock.riceAvailableStock =  this.state.stock.riceAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalSugar = user.totalFamilyMembers*2;
                        this.state.stock.sugarTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.sugarSoldStock = this.state.stock.sugarSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.sugarAvailableStock =  this.state.stock.sugarAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalWheat = user.totalFamilyMembers*2;
                        this.state.stock.wheatTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.wheatSoldStock = this.state.stock.wheatSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.wheatAvailableStock =  this.state.stock.wheatAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalOil = user.totalFamilyMembers*2;
                        this.state.stock.oilTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.oilSoldStock = this.state.stock.oilSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.oilAvailableStock =  this.state.stock.oilAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalDal = user.totalFamilyMembers*2;
                        this.state.stock.dalTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.dalSoldStock = this.state.stock.dalSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.dalAvailableStock =  this.state.stock.dalAvailableStock - user.totalFamilyMembers*2;
                    }
                }
                if(user.rationType == "white"){
                    if(user.totalFamilyMembers <= 10){
                        this.state.stock.totalRice = user.totalFamilyMembers*2;
                        this.state.stock.riceTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.riceSoldStock = this.state.stock.riceSoldStock +  user.totalFamilyMembers*2;
                        this.state.stock.riceAvailableStock =  this.state.stock.riceAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalSugar = user.totalFamilyMembers*2;
                        this.state.stock.sugarTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.sugarSoldStock = this.state.stock.sugarSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.sugarAvailableStock =  this.state.stock.sugarAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalWheat = user.totalFamilyMembers*2;
                        this.state.stock.wheatTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.wheatSoldStock = this.state.stock.wheatSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.wheatAvailableStock =  this.state.stock.wheatAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalOil = user.totalFamilyMembers*2;
                        this.state.stock.oilTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.oilSoldStock = this.state.stock.oilSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.oilAvailableStock =  this.state.stock.oilAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalDal = user.totalFamilyMembers*2;
                        this.state.stock.dalTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.dalSoldStock = this.state.stock.dalSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.dalAvailableStock =  this.state.stock.dalAvailableStock - user.totalFamilyMembers*2;
                    }
                }
                if(user.rationType == "yellow"){
                    if(user.totalFamilyMembers <= 10){
                        this.state.stock.totalRice = user.totalFamilyMembers*2;
                        this.state.stock.riceTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.riceSoldStock = this.state.stock.riceSoldStock +  user.totalFamilyMembers*2;
                        this.state.stock.riceAvailableStock =  this.state.stock.riceAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalSugar = user.totalFamilyMembers*2;
                        this.state.stock.sugarTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.sugarSoldStock = this.state.stock.sugarSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.sugarAvailableStock =  this.state.stock.sugarAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalWheat = user.totalFamilyMembers*2;
                        this.state.stock.wheatTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.wheatSoldStock = this.state.stock.wheatSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.wheatAvailableStock =  this.state.stock.wheatAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalOil = user.totalFamilyMembers*2;
                        this.state.stock.oilTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.oilSoldStock = this.state.stock.oilSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.oilAvailableStock =  this.state.stock.oilAvailableStock - user.totalFamilyMembers*2;
                        this.state.stock.totalDal = user.totalFamilyMembers*2;
                        this.state.stock.dalTotalPrice = user.totalFamilyMembers*2*20;
                        this.state.stock.dalSoldStock = this.state.stock.dalSoldStock + user.totalFamilyMembers*2;
                        this.state.stock.dalAvailableStock =  this.state.stock.dalAvailableStock - user.totalFamilyMembers*2;
                    }
                }
        
        }}))
        console.log(this.state.stock);
    }

    changeStatus(email){
        
        this.calculateResults(email);
        this.setState({isButtonDisabled:"true"});
        const stock = {
            monthyear : this.state.stock.monthyear,
            riceTotalStock: this.state.stock.riceTotalStock,
            riceSoldStock : this.state.stock.riceSoldStock,
            riceAvailableStock : this.state.stock.riceAvailableStock,
            sugarTotalStock: this.state.stock.sugarTotalStock,
            sugarSoldStock : this.state.stock.sugarSoldStock,
            sugarAvailableStock : this.state.stock.sugarAvailableStock,
            wheatTotalStock: this.state.stock.wheatTotalStock,
            wheatSoldStock : this.state.stock.wheatSoldStock,
            wheatAvailableStock : this.state.stock.wheatAvailableStock,
            oilTotalStock: this.state.stock.oilTotalStock,
            oilSoldStock : this.state.stock.oilSoldStock,
            oilAvailableStock : this.state.stock.oilAvailableStock,
            dalTotalStock: this.state.stock.dalTotalStock,
            dalSoldStock : this.state.stock.dalSoldStock,
            dalAvailableStock : this.state.stock.dalAvailableStock,
            riceTotalPrice : this.state.stock.riceTotalPrice,
            sugarTotalPrice : this.state.stock.sugarTotalPrice,
            wheatTotalPrice : this.state.stock.wheatTotalPrice,
            dalTotalPrice : this.state.stock.dalTotalPrice,
            oilTotalPrice : this.state.stock.oilTotalPrice,
            totalRice : this.state.stock.totalRice,
            totalSugar : this.state.stock.totalSugar,
            totalWheat : this.state.stock.totalWheat,
            totalOil : this.state.stock.totalOil,
            totalDal : this.state.stock.totalDal,
            rationUserEmail : email
        }
        console.log(stock.dalTotalPrice);
        var id = this.state.stock._id;
        axios.put('https://rationapp-backend.herokuapp.com/shopkeeper/ssuserdetails/stock-update/'+id,stock)
        .then(res => {
            console.log("successfully updated"+res.data)
            
        })
        .catch(err => console.log(err));

        var userID = email;
        
        // axios.post('http://localhost:5000/shopkeeper/ssuserdetails/give/'+userID)
        // .then(res => {
        //     console.log(res.data);
        // });
    }

    rationList(){
         if(this.state.user.rationUser.length > 0){
        return this.state.user.rationUser.map(user => {
            return<RationUserList user={user} changeStatus={this.changeStatus}  key ={user.email} />
        })
         }else{
            return <th colspan="6" className="text-center text-nowrap"><p className="text-center"><strong>Nothing to show</strong></p></th>
         }
    }
    
    render() { 
        return ( 
            <>
            
            <div className="ssuserdetails">
            <div className="mt-2"><h2><strong>Ration Users Details</strong></h2></div>
            <div className="hr"></div>
                <div class="table-responsive table">
                    <table className="table table-bordered table-hover" id="dataTable" width="100%" cellSpacing="0">
                        <thead className="thead-light">
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Family Members</th>
                                <th>Ration Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.rationList() }
                        </tbody>
                    </table>
                </div>
                <LoadingIndicator />
                
            </div>
            <AddUser />
            <ToastContainer />
            </>
         );
    }
}
 
export default withRouter(Ssuserdetails);