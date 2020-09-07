import React, {Component, Fragment} from 'react';
import './App.css';
import { withStyles } from "@material-ui/core/styles";
import TableEvents from "./components/TableEvents";
import data from "./data/data";

const useStyles = (theme)=>({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

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
export default withStyles(useStyles, { withTheme: true }) (App);
