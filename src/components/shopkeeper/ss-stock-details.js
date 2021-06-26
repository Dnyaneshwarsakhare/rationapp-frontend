import React from 'react';
import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { trackPromise } from 'react-promise-tracker';
import axios from 'axios';
import { LoadingIndicator } from '../..';
import {Redirect,useHistory,withRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Navbar2 from "../navbar2";
const StockList = props => {
    
    return(
        <>
        <th colspan="6" bgcolor = "#446688" className="text-center text-white">{props.stock.monthyear}</th>
        <tr>
            <td>Rice</td>
            <td>{props.stock.riceTotalStock}</td>
            <td>{props.stock.riceSoldStock}</td>
            <td>{props.stock.riceAvailableStock}</td>
        </tr>
        <tr>
            <td>Sugar</td>
            <td>{props.stock.sugarTotalStock}</td>
            <td>{props.stock.sugarSoldStock}</td>
            <td>{props.stock.sugarAvailableStock}</td>
        </tr>
        <tr>
            <td>Wheat</td>
            <td>{props.stock.wheatTotalStock}</td>
            <td>{props.stock.wheatSoldStock}</td>
            <td>{props.stock.wheatAvailableStock}</td>
        </tr>
        <tr>
            <td>Oil</td>
            <td>{props.stock.oilTotalStock}</td>
            <td>{props.stock.oilSoldStock}</td>
            <td>{props.stock.oilAvailableStock}</td>
        </tr>
        <tr>
            <td>Dal</td>
            <td>{props.stock.dalTotalStock}</td>
            <td>{props.stock.dalSoldStock}</td>
            <td>{props.stock.dalAvailableStock}</td>
        </tr>
        </>
    )
}

class Ssstockdetails extends PureComponent {
    
    componentDidMount(){
        console.log("called");
        if(localStorage.getItem('Token')!=null && localStorage.getItem('Token')!='undefined' && localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined')
        {
            
            this.props.history.push("/shopkeeper/ssstockdetails/");
            trackPromise(
                axios.get("https://rationapp-backend.herokuapp.com/shopkeeper/ssstockdetails/details")
                .then(res => {
                    this.setState({ stocks : res.data})
                }))
                .catch(err => console.log(err));
           
        }else{
            
            this.props.history.push("/login");
            toast.warn("You don't have access, Requires login",{
                position:"top-center"
            })
        }
        
       
    }

    

    constructor(props){
        super(props);
        this.state = {stocks : []};
    }

    stockList(){
        if(this.state.stocks.length > 0){
        return this.state.stocks.reverse().map(currentstock => {
            return<StockList stock ={currentstock} key ={currentstock._id} />
        })
        }else{
            return <th colspan="6" className="text-center text-nowrap"><p className="text-center"><strong>Nothing to show</strong></p></th>
        }
    }


    render() { 
        return ( 
            <>
          
            <div className="ssstockdetails">
                <div className="mt-2"><h2><strong>Stock Details</strong></h2></div>
                <div className="hr"></div>
                <div class="table-responsive">
                    <table className="table table-bordered table-striped" id="dataTable" width="100%" cellSpacing="0">
                        <thead className="thead-light">
                            <tr>
                                <th>Product</th>
                                <th>Stock(kg/ltr)</th>
                                <th>Sold(kg/ltr)</th>
                                <th>Available(kg/ltr)</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.stockList() }
                        </tbody>
                    </table>
                </div>
            </div>
            <LoadingIndicator />
            </>
         );
    }
}
 
export default withRouter(Ssstockdetails);