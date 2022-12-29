import React from 'react';
import FutureOneDayInfo from './FutureOneDayInfo';

const FutureInfo = ({ info }) => {

    return (
        <div className="future-info-wrapper">
            {info.data.map((item, index) => {
                return index !== 0 && index % 8 === 0 && <FutureOneDayInfo key={item.timestamp_local} info={item} />
            })}
        </div>
    )
}

export default FutureInfo;