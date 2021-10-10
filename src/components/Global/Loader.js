import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class loader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="loader">
                <Loader
                    type="ThreeDots"
                    color="#0c9"
                    height={50}
                    width={'100%'}
                />
            </div>
        );
    }
}

export default loader;
