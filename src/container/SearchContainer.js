import React, { Component, Fragment } from 'react';
import Listing from '../components/Search/Listing';
import Filter from '../components/Search/Filter';
import SearchBox from '../components/Search/SearchBox';
import { connect } from 'react-redux';
import { getHotel, applyFilter } from "../actions/searchActions";
import "../css/search.css";

class SearchContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getHotel();
    }

    render() {
        const { filterObj = {}, fetching = false, applyFilter, masterList = [] } = this.props;
        return (
            <Fragment>
                <SearchBox />
                <Filter filterObj={filterObj} fetching={fetching} applyFilter={applyFilter} />
                <Listing masterList={masterList} fetching={fetching} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    const { flightListing = {}, } = state;
    const { filterdList = [] } = flightListing;
    return {
        ...flightListing,
        masterList: filterdList
    }
};

const mapDispatchToProps = (dispatch) => ({
    getHotel: () => dispatch(getHotel()),
    applyFilter: (payload) => dispatch(applyFilter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
