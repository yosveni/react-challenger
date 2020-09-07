import React, {Component, Fragment} from 'react';
import './App.css';
import TableEvents from "./components/TableEvents";
import data from "./data/data";


const countViewed = ()=>{
    let cont = 0;
    for (let i = 0; i< data.length;i++){
        if (data[i].checked === 1)
            cont ++
    }
    return cont;
}
const counterNotViewed  = () =>{
    let result = data.length - countViewed()
    if (result < 0){
        return (-1)* result
    }
    return result ;
}

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            viewed: countViewed(),
            notviewed: counterNotViewed(),
            data:data
        }
        this.updateViewed = this.updateViewed.bind(this);
    }
    updateViewed = (value) => {
        if(value === 0){
            this.setState({
                notviewed: this.state.notviewed + 1,
                viewed: this.state.viewed - 1,
            });
        } else{
            this.setState({
                viewed: this.state.viewed + 1,
                notviewed: this.state.notviewed - 1
            });
        }

    }

  render() {
    return (
        <Fragment>
            <div className="col-sm-12">
                <div className="col-sm-6">
                    <label>Viewed: {this.state.viewed} </label>
                </div>
                <div className="col-sm-6">
                    <label>Not viewed: {this.state.notviewed}</label>
                </div>
            </div>
            <div className="col-sm-12">
                <TableEvents
                    updateViewed={this.updateViewed}
                />
            </div>
        </Fragment>
    );
  }
}
export default App;
