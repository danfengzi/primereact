import React, {Component} from 'react';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import {Chart} from '../../components/chart/Chart';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class ComboChartDemo extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				type: 'line',
				label: 'Dataset 1',
				borderColor: '#2196F3',
				borderWidth: 2,
				fill: false,
				data: [
					50,
					25,
					12,
					48,
					56,
					76,
					42
				]
			}, {
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: '#4CAF50',
				data: [
					21,
					84,
					24,
					75,
					37,
					65,
                    34
                ],
				borderColor: 'white',
				borderWidth: 2
			}, {
				type: 'bar',
				label: 'Dataset 3',
				backgroundColor: '#FFC107',
				data: [
					41,
					52,
					24,
					74,
					23,
					21,
					32
				]
            }]
        };

        const options = {
            responsive: true,
            title: {
                display: true,
                text: 'Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Combo Chart</h1>
                        <p>Different chart types can be combined in the same graph.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("chart")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Combo Chart</h3>
                    <Chart type="bar" data={data} options={options} />
                </div>

                <ComboChartDemoDoc></ComboChartDemoDoc>
            </div>
        )
    }
}

export class ComboChartDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {Chart} from 'primereact/chart';

export class ComboChartDemo extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				type: 'line',
				label: 'Dataset 1',
				borderColor: '#2196F3',
				borderWidth: 2,
				fill: false,
				data: [
					50,
					25,
					12,
					48,
					56,
					76,
					42
				]
			}, {
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: '#4CAF50',
				data: [
					21,
					84,
					24,
					75,
					37,
					65,
                    34
                ],
				borderColor: 'white',
				borderWidth: 2
			}, {
				type: 'bar',
				label: 'Dataset 3',
				backgroundColor: '#FFC107',
				data: [
					41,
					52,
					24,
					74,
					23,
					21,
					32
				]
            }]
        };

        const options = {
            responsive: true,
            title: {
                display: true,
                text: 'Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        };

        return (
            <div>
                <h3>Combo Chart</h3>
                <Chart type="bar" data={data} options={options} />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {Chart} from 'primereact/chart';

const ComboChartDemo = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: '#2196F3',
            borderWidth: 2,
            fill: false,
            data: [
                50,
                25,
                12,
                48,
                56,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#4CAF50',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ],
            borderColor: 'white',
            borderWidth: 2
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#FFC107',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    };

    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Combo Bar Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: true
        }
    };

    return (
        <div>
            <h3>Combo Chart</h3>
            <Chart type="bar" data={data} options={options} />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {Chart} from 'primereact/chart';

const ComboChartDemo = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: '#2196F3',
            borderWidth: 2,
            fill: false,
            data: [
                50,
                25,
                12,
                48,
                56,
                76,
                42
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: '#4CAF50',
            data: [
                21,
                84,
                24,
                75,
                37,
                65,
                34
            ],
            borderColor: 'white',
            borderWidth: 2
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: '#FFC107',
            data: [
                41,
                52,
                24,
                74,
                23,
                21,
                32
            ]
        }]
    };

    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Combo Bar Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: true
        }
    };

    return (
        <div>
            <h3>Combo Chart</h3>
            <Chart type="bar" data={data} options={options} />
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="ComboChartDemo" sources={[key, value]} dependencies={{'chart.js': '2.7.3'}} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
