import React, { useEffect, useState } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { isEmptyObject } from '../../library/utils';

const filter = (props) => {
    const { filterObj = {}, fetching = false } = props,
        [range, setRange] = useState([0, 0]),
        [userFilter, setUserFilter] = useState({}),
        onAfterChange = (args) => {
            setUserFilter({ pr: args });
        };
    const { minPrice = 0, maxPrice = 0 } = filterObj;
    const [min = 0, max = 0] = range;
    useEffect(() => {
        setRange([minPrice, maxPrice]);
    }, [minPrice, maxPrice]);

    useEffect(() => {
        props.applyFilter(userFilter);
    }, [userFilter]);

    return (
        <div className="filter__container">
            <div className="filter__heading">
                Price
                {!isEmptyObject(userFilter) ?
                    <span onClick={() => { setUserFilter({}); setRange([minPrice, maxPrice]); }}>Reset</span> : ''}
            </div>
            {fetching ? '' : <div className="filter__price">
                <Range
                    defaultValue={[minPrice, maxPrice]}
                    value={range}
                    min={minPrice}
                    max={maxPrice}
                    step={100}
                    onChange={(args) => { setRange(args) }}
                    onAfterChange={onAfterChange}
                    allowCross={false}
                />

                <div className="price--view">
                    <div className="price--min">&#8377; {min}</div>
                    <div className="price--max">&#8377; {max}</div>
                </div>
            </div>}
        </div>
    );
};

export default filter;