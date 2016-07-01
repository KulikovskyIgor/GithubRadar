import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from './../../../actions/app.js';
import Chart from 'chart.js/dist/Chart.bundle.min.js';
import { Row, Col } from 'react-bootstrap';
import ChartBackgroundView from '../components/chart-background-view.js';

class ChartContainer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        chartConfig: {
            type: 'radar',
            data: {
                labels: [],
                datasets: []
            },
            options: {
                responsive: false,
                scale: {
                    reverse: false,
                    gridLines: {
                        display: false
                    },
                    angleLines: {
                        color: '#fff',
                        lineWidth: 1
                    },
                    pointLabels: {
                        fontColor: '#fff',
                        fontFamily: 'Lobster',
                        fontSize: 16
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true
                    }
                },
                legend: {
                    display: true,
                    labels: {
                        fontColor: '#0071A7',
                        fontFamily: 'Lobster',
                        fontSize: 16
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        },
        defDataset: {
            tension: .5,
            data: []
        }
    }

    shouldComponentUpdate(nextProps) {
        return (nextProps.app.users.length && nextProps.app.commits.length)
            && (nextProps.app.users.length != this.props.app.users.length
            || nextProps.app.commits.length != this.props.app.commits.length);
    }

    componentDidUpdate() {
        this._initChart();
    }

    componentWillUnmount() {
        if (this.radarChart) this.radarChart.destroy();
    }

    render() {
        return (
            <Row className="chart-container">
                <Col xs={12}>
                    <canvas className="chart" ref="chart" height="500" width="500"></canvas>
                    <ChartBackgroundView />
                </Col>
            </Row>
        );
    }

    _initChart() {
        const chartConf = this._getChartConf(this.props.app.commits, this.state.chartConfig, this.state.defDataset);
        if (this.radarChart) window.radarChart.destroy();
        this.radarChart = new Chart(this.refs.chart, chartConf);
    }

    _getChartConf(commits, chartConf, defDataset) {
        let conf = _.cloneDeep(chartConf);
        const groupedCommitsByDay = _.groupBy(commits, i => i[0]);

        _.forEach(groupedCommitsByDay, (val, key) => {
            let dataset = Object.assign({}, defDataset);
            const color = this._getRandomColor();

            dataset.data = _.map(val, i => i[2]);
            dataset.label = this._getDay(+key);
            dataset.backgroundColor = color.background;
            dataset.borderColor = color.border;

            conf.data.datasets.push(dataset);
            conf.data.labels.push(this._getDay(+key));
        });

        conf.data.labels = this._getEmptyLabels(conf.data.datasets.length ? conf.data.datasets[0].data.length : 0);

        return conf;
    }

    _getEmptyLabels(commitsLength) {
        let labels = [];
        for (let i = 0; i < commitsLength; i++) labels.push(i > 9 ? i : `0${i}`);
        return labels;
    }

    _getDay(dayNum) {
        switch (dayNum) {
            case 0:
                return `Monday`;
            case 1:
                return `Tuesday`;
            case 2:
                return `Wednesday`;
            case 3:
                return `Thursday`;
            case 4:
                return `Friday`;
            case 5:
                return `Saturday`;
            case 6:
                return `Sunday`;
        }
    }

    _getRandomColorFactor() {
        return Math.round(Math.random() * 255);
    }

    _getRandomColor() {
        const rgb = ([this._getRandomColorFactor(), this._getRandomColorFactor(), this._getRandomColorFactor()]).join();
        return {
            border: `rgba(${rgb},.7)`,
            background: `rgba(${rgb},.3)`
        }
    }
}

function mapStateToProps(store) {
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
