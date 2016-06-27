import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from './../../../actions/app.js';
const RadarChart = require("react-chartjs").Radar;

class ChartContainer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        defData: {
            labels: [],
            //labels: [`00:00`, `01:00`, `02:00`, `03:00`, `04:00`, `05:00`, `06:00`,
            //    `07:00`, `08:00`, `09:00`, `10:00`, `11:00`, `12:00`, `13:00`, `14:00`, `15:00`,
            //    `16:00`, `17:00`, `18:00`, `19:00`, `20:00`, `21:00`, `22:00`, `23:00`],
            datasets: []
        },
        defDataset: {
            //backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: []
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return (nextProps.app.users.length && nextProps.app.commits.length) &&
            (nextProps.app.users.length !== this.props.app.users.length
            || nextProps.app.commits.length !== this.props.app.commits.length);
    }

    render() {
        const data = this._getData(this.props.app.commits, this.state.defData, this.state.defDataset);
        if (data.datasets.length) {
            return <RadarChart data={data} options={this.state.options} width="400" height="400" redraw />
        } else {
            return null;
        }
    }

    _getData(commits, defData, defDataset) {
        let datasets = [];
        let data = Object.assign({}, defData);

        const groupedCommitsByDay = _.groupBy(commits, i => i[0]);
        _.forEach(groupedCommitsByDay, val => {
            let dataset = Object.assign({}, defDataset);
            dataset.data = _.map(val, i => i[2]);
            datasets.push(dataset);
        });

        data.labels = this._getEmptyLabels(datasets.length ? datasets[0].data.length : 0);
        data.datasets = datasets;
        return data;
    }

    _getEmptyLabels(commitsLength){
        let labels = [];
        for(let i = 0; i < commitsLength; i++) labels.push(``);
        return labels;
    }
}

function mapStateToProps(store, props) {
    return {app: store.app};
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch);
}
function mergeProps(mapState, mapDispatch, ownProps) {
    return {
        ...mapState,
        ...ownProps,
        actions: {
            ...mapDispatch
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChartContainer);