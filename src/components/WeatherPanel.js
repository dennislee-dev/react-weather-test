import React from 'react';
import TodayInfo from './TodayInfo';
import FutureInfo from './FutureInfo';

const WeatherPanel = ({ info }) => {

    return (
        <div className="content-wrapper">
            <TodayInfo info={info.data[0]} />
            <FutureInfo info={info} />
        </div>
    )
}

export default WeatherPanel;