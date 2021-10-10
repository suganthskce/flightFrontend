import React, { useState, useEffect, Fragment } from 'react';
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from 'react-window';
import { formatTravelTime, applySorting, formatPrice } from './../../library/utils';
import Sorting from './Sorting';
import Constants from './../../constants/airline';
import Loader from './../Global/Loader';


const listing = (props) => {
    const { masterList = [], fetching = false, } = props,
        [sortedList, setSortedList] = useState([]),
        [sortObj, setSortObj] = useState({});

    useEffect(() => {
        setSortedList(applySorting(masterList, sortObj));
    }, [masterList, sortObj]);

    const isMobile = 768 > document.documentElement.clientWidth,
        Row = ({ data, index, style }) => {
            const { id = '', pLeg = [], farepr = 0, } = sortedList[index],
                [firstLeg = []] = pLeg,
                [firstFlight = {}] = firstLeg;
            const stops = firstLeg.length;
            const { dt = '', to = '', at = '', al = '', ft = 0 } = firstFlight;
            return (
                <div className="flight__container" data-id={id} key={`${id}__item-${index}`} style={style} >
                    <div className="flight__card">
                        <div className="flight__sep">
                            <div className="flight_Sep_2">
                                <div class="css-fl-company-logo-new">
                                    <div class="css-fl-logo-section">
                                        <div class="css-fl-logo-boxes">
                                            <div class="css-fl-logo-box-27">
                                                <img src={Constants.images[al]} width="25px" height="25px" />
                                            </div>
                                            <div className="airline__name">{Constants.names[al] || al}</div>
                                        </div>
                                    </div>
                                    <div class="css-fl-logo-name-section">{ }</div>
                                </div>
                                <div class="css-fl-booking-data-new-box">
                                    <div class="css-fl-booking-left-info-wrap">
                                        <div class="css-fl-destination-time">
                                            <div class="css-fl-time">{dt} </div>
                                            <div class="css-fl-destination">
                                                {firstLeg.map((flight, index) => {
                                                    const { fr, to } = flight;
                                                    return (<>
                                                        <span class="flights--tooltip " title="" data-original-title={fr}>{fr} </span> -
                                                        {index != firstLeg.length - 1 ? '' : <span class="flights--tooltip " title="" data-original-title={to}>{to} </span>}
                                                    </>);
                                                })}
                                            </div>
                                        </div>
                                        <div class="css-fl-destination-time">
                                            <div class="css-fl-time">{at}</div>
                                        </div>
                                        <div class="css-fl-duration">
                                            <div class="css-fl-duration-time css-fl-cheapest-background flights--tooltip" title="" data-original-title="Fastest flight">{formatTravelTime(ft)}</div>
                                            <div class="css-fl-duration-stop">{stops == 1 ? 'Non' : stops} stop{stops > 1 ? 's' : ''}</div>
                                        </div>
                                    </div>
                                    <div class="css-fl-booking-right-info-wrap">
                                        <div class="css-fl-book-more-icon">
                                            <div class="css-fl-price js-flight-price">
                                                <div class="css-fl-normal-price css-18px-size css-fl-direct-price css-fl-cheapest-background flights--tooltip" title="" data-original-title="Cheapest flight">
                                                    <div class="">
                                                        <div class="css-currency">
                                                            <span data-base={farepr}>{formatPrice(farepr)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="css-book-button">
                                                <span>
                                                    <button className="book__button" type="button" data-fk="ee61878c985372b3e32a82286c3c4316" data-vendor="ri" data-fare="3500">Book</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        };

    return (
        <div className="listing__container">
            <div className="sort_container">
                <Sorting
                    sortObj={sortObj} setSortObj={setSortObj}
                />
            </div>
            <React.Suspense fallback={<Loader />}>
                {fetching && sortedList.length === 0 ? <Loader /> :
                    !fetching && sortedList.length === 0 ? <Fragment> No Flights Found </Fragment> :
                        <Fragment>
                            <AutoSizer>
                                {
                                    ({ height, width }) => (
                                        <List
                                            useIsScrolling
                                            className="List"
                                            overscanCount={7}
                                            height={height}
                                            itemCount={sortedList.length}
                                            itemSize={isMobile == true ? 100 : 80}
                                            width={width}>
                                            {Row}
                                        </List>
                                    )
                                }
                            </AutoSizer>
                        </Fragment>
                }
            </React.Suspense>
        </div>
    );
};

export default listing;