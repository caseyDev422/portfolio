import { Component } from 'react';

export default class Contact extends Component {
    render() {
        return(
           <div>    
                <form className="form-container">
                    <div className="form-group">
                    <label for="emailInput">Email Address:</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="firstName">First Name:</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name:</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <label for="responseArea">Enter Response:</label>
                        <textarea className="form-control" id="responseArea" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        
               
            </div>
            
        )
    }
}