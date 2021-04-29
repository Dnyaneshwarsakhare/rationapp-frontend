import React from 'react';
import { PureComponent } from 'react';


class Complaint extends PureComponent {
    render(){
        return ( 
            <>
            <div className="complaint">
                <form action="">
                <h4><strong> Complaint Form</strong></h4>
                    <div className ="form-group d-flex flex-row pob mt-3">
                            <input type="text" 
                            required
                            className = "form-control"
                            id="inputbox"
                            />
                            <span>Email</span>
                    </div>
                    <div className ="form-group d-flex flex-row pob">
                            
                            <textarea 
                            required
                            className = "form-control"
                            id="inputbox"
                            
                            />
                            
                            <span>Explain Your Query</span>
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Submit" className="btn btn-primary"/>
                    </div>
                    
                </form>
            </div>
            </>
        );
    }
}
 
export default Complaint;