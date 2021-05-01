import React, { Component } from 'react';
import emailjs from 'emailjs-com';

/*
service_4ff5fxy <-- serviceID
template_yyth07g <-- template id
user_ROqvVXY0ESumI3QWip8FQ <-- id needed for emailJS
*/

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = this.initState; 
        this.handleChange = this.handleChange.bind(this);
    };

    initState = () => {
        this.setState({firstName: ''});
        this.setState({lastName: ''});
        this.setState({email: ''});
        this.setState({response: ''});
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;

        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.initState();

        const personInfo = {
            fName: this.state.firstName,
            lName: this.state.lastName,
            email: this.state.email,
            response: this.state.response
        };
        emailjs.send('service_4ff5fxy', 'template_yyth07g', personInfo, 'user_ROqvVXY0ESumI3QWip8FQ').then((res) => {
            res.status === 200 ? console.log('sent successfully') : console.error('something went wrong');
        })
        console.log(personInfo);
    }

    render() {
        return(
           <div>    
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label for="emailInput">Email Address:</label>
                        <input type="email" name="email" className="form-control contact-input" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="firstName">First Name:</label>
                        <input type="text" className="form-control contact-input" id="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name:</label>
                        <input type="text" className="form-control contact-input" id="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <label for="responseArea">Enter Response:</label>
                        <textarea className="form-control" id="response" value={this.state.response} onChange={this.handleChange}  rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}