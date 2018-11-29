import React, { Component } from 'react';
import './Project.css'
import icon from './logo.svg'

class Project extends Component{

  constructor(props){
    super(props);
    this.state = {
      projectFormDisplay : false,
    };
  }

  onClick = () => {
    this.setState ({
      projectFormDisplay : true,
    });
  };

  render(){
    return (
    <div onClick={this.onClick}>
        {!this.state.projectFormDisplay ? <ProjectCreateDisplay/> : <ProjectFormDisplay/>}
    </div>
    );
  }
}

export default Project;

class ProjectFormDisplay extends Component{

  render(){
    return(
      <div className="Project-Form" style={{textAlign:'justify'}}>
      <div style={{marginLeft:'10px'}}>
      <h1 className="font"> Project Details </h1>
      <form>
      <p>
      <label className="font"> Project Name : </label>
      <input type="text" className="Project-Name" placeholder="Project Name" />
      </p>
      <div className="font" style={{marginTop: '20px'}}> <h3>Create Configuration </h3> </div>
      </form>
      </div>
      </div>
    );
  }
}

class ProjectCreateDisplay extends Component{
  render(){
    return(
      <div className="Project-Create">
      <div className="rows" style={{textAlign:'justify'}}>
      <img src={icon} className="Project-Logo row"/>
      <h1 className="row Project-Title font">Create a project</h1>
      </div>
      </div>
      //TO-DO List projects created by the user for edit option
    );
  }
}
