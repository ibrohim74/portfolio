import React, {Component} from 'react';
import Carousel from "./Carousel";
import Charts from "./Charts";
import Tables from "./Tables";
import Widgets from "./Widgetes";

class CoreUi extends Component {
    render() {
        return (
            <div>
                <div className="mb-5"> <Charts/></div>
                <div className="mb-5"> <Tables/></div>
                <div className="mb-5"> <Carousel/></div>
                <div className="mb-5"> <Widgets/></div>
            </div>
        );
    }
}

export default CoreUi;