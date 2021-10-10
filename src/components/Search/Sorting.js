import React, { useState, useEffect, Fragment } from 'react';
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from 'react-window';
import { formatTravelTime, applySorting } from './../../library/utils';

const sorting = (props) => {
    const { sortObj = {}, setSortObj } = props,
        list = [{
            id: "depart",
            displyLabel: "Depart",
            className: "depart-cont"
        },
        {
            id: "arrive",
            displyLabel: "Arrive",
            className: "arrive-cont"
        }, {
            id: "duration",
            displyLabel: "Duration",
            className: "duration-cont"
        }, {
            id: "price",
            displyLabel: "Price",
            className: "price-cont"
        }];
    useEffect(() => {
        setSortObj({ price: true });
    }, []);
    return (<div className="sorting--list">
        {list.map(option => {
            const { id = '', className = '', displyLabel = '' } = option;
            return <div className={className} id={id}>
                <span onClick={() => { setSortObj({ [id]: !sortObj[id] }) }}> {displyLabel}</span>
                {sortObj[id] == undefined ? '' : sortObj[id] ?
                    <span onClick={() => { setSortObj({ [id]: !sortObj[id] }) }}> &darr;</span>
                    :
                    <span onClick={() => { setSortObj({ [id]: !sortObj[id] }) }}> &uarr;</span>}
            </div>
        })}
    </div>);
};

export default sorting;