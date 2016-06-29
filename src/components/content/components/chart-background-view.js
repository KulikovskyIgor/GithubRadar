import React, {
    Component
} from 'react';

export default class ChartBackgroundView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chart-background">
                <div className="circle"></div>
            </div>
        );
    }
}