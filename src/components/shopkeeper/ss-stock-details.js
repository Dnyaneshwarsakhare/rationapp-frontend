import React from 'react';
import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const StockList = props => {
    
    return(
        <>
        <tr>
            <td>{props.stock.product}</td>
            <td>{props.stock.totalStock}</td>
            <td>{props.stock.soldStock}</td>
            <td>{props.stock.availableStock}</td>
        </tr>
        </>
    )
}

class Ssstockdetails extends PureComponent {
    
    componentDidMount(){
        axios.get("http://localhost:5000/shopkeeper/ssstockdetails")
        .then(res => {
            this.setState({ stocks : res.data})
        })
        .catch(err => console.log(err));
    }

    constructor(props){
        super(props);
        this.state = {stocks : []};
    }

    stockList(){
        return this.state.stocks.map(currentstock => {
            return<StockList stock ={currentstock} key ={currentstock._id} />
        })
    }


    render() { 
        return ( 
            <>
            <div className="ssstockdetails">
                <div class="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead className="thead-light">
                            <tr>
                                <th>Product</th>
                                <th>Stock(kg)</th>
                                <th>Sold(kg)</th>
                                <th>Available(kg)</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.stockList() }
                        </tbody>
                    </table>
                </div>
            </div>
            </>
         );
    }
}
 
export default Ssstockdetails;