import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./form.css";


class Form extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {

    const { status } = this.state;

    return (
      <div className="form-container col-12">
        <div className="form-container-backdrop">
          <div className="App">
            <form onSubmit={this.submitForm} action="https://formspree.io/f/xrgoyoay" method="POST"> 
              <div className="form-group">
              <h4 className="contact-text">Please contact me about any web development needs.</h4>
              {/* <h4 className="contact-info">dakuglin@gmail.com</h4>
              <h4 className="contact-info">970.237.9712</h4> */}
              <br></br>
                <label>Name</label>
                <input type="text" name="name" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control"/>
              </div>
              <div className="form-group">
                <label >Message</label>
                <textarea type="text" name="message" className="form-control"/>
              </div> 
              {status === "SUCCESS" ? <p>Thank you!</p> : <Button type="submit" className="btn btn-primary form">Send</Button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
      </div>
      
    );
  };

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  };
};
       
export default Form;
