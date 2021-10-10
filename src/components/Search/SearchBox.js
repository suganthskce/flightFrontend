import React, { Fragment } from 'react';

const searchBox = (props) => {
    return (
        <div className="searchbox__container">
            <div className="searchbox__fields--row1">
                <div className="fromlocation">
                    <input className="searchbox__input" placeholder={"Origin"} />
                    <span className="swap">&#8651;</span>
                    <input className="searchbox__input" placeholder={"Destination"} />
                </div>
                <div className="datefields">
                    <input className="searchbox__date" placeholder={"Sun, 09 Oct 22"} />
                    <input className="searchbox__date" placeholder={"Sun, 10 Oct 22"} />
                </div>

            </div>
            <div className="searchbox__fields--row1-col2">
                <div>
                    <input className="searchbox__date" placeholder={"1 Adult"} />
                    <button className="submit__btn">Submit</button>
                </div>
            </div>
            <div className="searchbox__fields--row2"></div>
        </div>
    );
};

export default searchBox;