import React, {Component, Fragment} from "react";
import MaterialTable from "material-table";
import tableIcons from "../utils/tableIcons";
import data from "../data/data";


class TableEvents extends Component{
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Id', field: 'id', editable: false},
                { title: 'Criticality', field: 'criticality', editable: false },
                { title: 'Status',field: 'status',editable:false},
                {
                    title: 'Checked',
                    field: 'checked',
                    lookup: { 0: 'no visto', 1: 'visto' }},
                { title: 'Timestamp', field: 'timestamp', editable: false },
            ],
            data:[]
        }
    }
    componentDidMount() {
        const events = data;
        this.setState({data:events})
    }
    render() {
        return(
            <Fragment>
                    <MaterialTable
                        title="Events List"
                        icons={tableIcons}
                        columns={this.state.columns}
                        data={this.state.data}
                        editable={{
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve) => {
                                        setTimeout(() => {
                                            resolve();
                                            if (oldData) {
                                                this.setState((prevState) => {
                                                    const data = [...prevState.data];
                                                    data[data.indexOf(oldData)] = newData;
                                                    return { ...prevState, data };
                                                });
                                                this.props.updateViewed(parseInt(newData.checked));                                            }

                                        }, 600);
                                    }),
                                }
                        }
                    />
            </Fragment>
        );
    }
}

export default  TableEvents;