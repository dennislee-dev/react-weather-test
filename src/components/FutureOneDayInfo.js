import React from 'react'

const FutureOneDayInfo = ({ info }) => {
    return (
        <div className="future-one-day-wrapper">
            <p className="future-one-day">{new Date(info.timestamp_local).toDateString().split(" ")[0]}</p>
            <img src={`../assets/icons/${info.weather.icon}.png`} alt="futureImg" />
            <p className="future-one-day-temp">{info.temp}&#176;</p>
        </div>
    )
}

export default FutureOneDayInfo;