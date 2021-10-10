import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import { SearchContainer, } from './LoadableContainers';

import Root from "../components/Root/Root";
import Constants from "../constants/routes";
const RootContainer = props => <Root {...props} />;

const mapStateToProps = state => {
    const {
    } = state;

    var pathMapping = [
        Constants.SEARCH,
    ];
    var urlMapping = {
        [Constants.SEARCH]: SearchContainer,
    };

    return {
        paths: pathMapping,
        routes: urlMapping
    };
};

const mapDispatchToProps = dispatch => ({});

const appContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RootContainer));

export default appContainer;
