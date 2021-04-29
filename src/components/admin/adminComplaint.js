import React from 'react';
import { PureComponent } from 'react';

class AdminComplaint extends PureComponent {
    
    render() { 
        return ( 
            <>
            <div className="ssdashboard">
                
                <div class="card">
                    <div class="card-header">
                        From :  Dnyaneshwar Sakhare  
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Got a Ration in higher price</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Acknowledge</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        From :  Ram waghmode   
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Ration not given by shopkeeper</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Acknowledge</a>
                    </div>
                </div>

            </div>
            </>
         );
    }
}
 
export default AdminComplaint;