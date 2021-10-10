import React, { Component } from "react";
import { connect } from "react-redux";

class Error extends Component {

    render() {
        return <div className="">
            <center>
                <div className="">
                    <img src={''} className="" />
                </div>
                <div className="">
                    <p className="">Sorry, we could not find the resource you are looking for,</p>
                    <a href="/" className="">GO TO HOMEPAGE</a>
                    <p className="">or explore by</p>
                    <a href="/" className="">FLIGHT BOOKING</a>
                </div>
            </center>
        </div>
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Error);
