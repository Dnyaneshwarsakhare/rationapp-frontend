import React from 'react';

import Alert from 'react-bootstrap/Alert';
import { Redirect } from 'react-router-dom';
const complaint = () => {
    return ( 
        <>
    
        <div className="complaint m-3" style={{textAlign:'center'}}>
            <form action="">
                <label htmlFor="">Gmail ID &nbsp; </label>
                <input type="email" name="" id="" placeholder="Enter Your Gmail" />
                <br/>
                <label htmlFor="">Complaint &nbsp; </label>
                <textarea id="w3review" name="" placeholder="Explain Your Query"></textarea><br/>
                <input type="submit" className="btn bg-info" value="Submit"/>
            </form>
        </div>
        </>
     );
}
 
export default complaint;