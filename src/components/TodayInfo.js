import React from 'react'

const TodayInfo = ({ info }) => {

    return (
        <div className="today-info-wrapper">
            <div className="wrapper">
                <div className="today-title">Today</div>
                <div className="today-weather">
                    <img src={`../assets/icons/${info.weather.icon}.png`} alt="todayWeather" />
                    <div className="today-weather-temp-summary-wrapper">
                        <p className="today-weather-temp-text">{info.temp}&#176;</p>
                        <p className="today-weather-summary-text">{info.weather.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayInfo;