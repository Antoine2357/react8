import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: '',
  
    }   
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.titleChange = this.titleChange.bind(this);
  }


  submitForm(e) {
    e.preventDefault();
    console.log("Formulaire rendu")
  }

  onChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  titleChange(e) {
    this.setState({
      globalTitle: `Mon formulaire - ${this.state.title}` ,
    })
  }
 
  componentDidUpdate() {
   console.log("Titre changé")
  }
  render() {
    
    return (
     
      <div className="FormEmployee">
        <h1>{this.state.globalTitle}</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
   
            <div className="form-data">
              <input onClick={this.titleChange} type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;