import React from "react";
import { PureComponent } from 'react';
import {withRouter} from "react-router-dom";
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";

class SupplyStock extends PureComponent {
// const SupplyStock = () => {
  constructor(props) {
    super(props);

    this.onChangeMonthyear = this.onChangeMonthyear.bind(this);
    this.onChangeRiceTotalStock = this.onChangeRiceTotalStock.bind(this);
    this.onChangeSugarTotalStock = this.onChangeSugarTotalStock.bind(this);
    this.onChangeWheatTotalStock = this.onChangeWheatTotalStock.bind(this);
    this.onChangeOilTotalStock = this.onChangeOilTotalStock.bind(this);
    this.onChangeDalTotalStock = this.onChangeDalTotalStock.bind(this);
    this.onSubmit= this.onSubmit.bind(this);


  this.state=({
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
  });

}

 
   onChangeMonthyear(e){
    this.setState({
      monthyear : e.target.value
    })
  };
   onChangeRiceTotalStock(e) {
    this.setState({
      riceTotalStock : e.target.value,
    })
  };
   onChangeSugarTotalStock(e){
    this.setState({
      sugarTotalStock : e.target.value
    })
  };
   onChangeWheatTotalStock(e){
    this.setState({
      wheatTotalStock : e.target.value
    })
  };
   onChangeOilTotalStock(e){
    this.setState({
      oilTotalStock : e.target.value
    })
  };
   onChangeDalTotalStock(e) {
    this.setState({
      dalTotalStock : e.target.value
    })
  };

  onSubmit = async (e) => {
    
    const stock = {
      monthyear : this.state.monthyear,
      riceTotalStock : this.state.riceTotalStock,
      riceSoldStock : this.state.riceSoldStock,
      riceAvailableStock : this.state.riceTotalStock,
      sugarTotalStock : this.state.sugarTotalStock,
      sugarSoldStock : this.state.sugarSoldStock,
      sugarAvailableStock : this.state.sugarTotalStock,
      wheatTotalStock : this.state.wheatTotalStock,
      wheatSoldStock : this.state.wheatSoldStock,
      wheatAvailableStock : this.state.wheatTotalStock,
      oilTotalStock : this.state.oilTotalStock,
      oilSoldStock : this.state.oilSoldStock,
      oilAvailableStock : this.state.oilTotalStock,
      dalTotalStock : this.state.dalTotalStock,
      dalSoldStock : this.state.dalSoldStock,
      dalAvailableStock : this.state.dalTotalStock,
  }

    e.preventDefault();
    console.log(stock);
    axios.post("https://rationapp-backend.herokuapp.com/admin/supply-stock/", stock)
        .then(res => {
            console.log(res.data)
            toast.success("Ration stock added",{
                position:"top-center"
            })
            
            this.props.history.push("/admin/supply-stock");
        })
        .catch(err => console.log(err));
    
  };

  render(){
  
    return (
      <>
    <div className="container">
      <div className="mx-auto p-2">
        <h3 className="text-center mt-3 mb-4"><strong>Supply Stock</strong></h3>
        <div className="hr"></div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter monthyear for stock (eg. april21)"
              name="monthyear"
              value={this.state.monthyear}
              onChange={this.onChangeMonthyear}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter rice quantity"
              name="rice"
              value={this.state.riceTotalStock}
              onChange={this.onChangeRiceTotalStock}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter sugar quantity"
              name="sugar"
              value={this.state.sugarTotalStock}
              onChange={this.onChangeSugarTotalStock}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter wheat quantity"
              name="wheat"
              value={this.state.wheatTotalStock}
              onChange={this.onChangeWheatTotalStock}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter oil quantity"
              name="oil"
              value={this.state.oilTotalStock}
              onChange={this.onChangeOilTotalStock}
            />
          </div>
          <div className="form-group">
            <input
              type="Number"
              id="inputbox"
              className="form-control form-control-lg"
              placeholder="Enter dal quantity"
              name="dal"
              value={this.state.dalTotalStock}
              onChange={this.onChangeDalTotalStock}
            />
          </div>
          <button className="btn btn-primary btn-block">Supply</button>
        </form>
      </div>
    </div>
    <ToastContainer />
      </>
  );
};
}

export default withRouter(SupplyStock) ;

