import React from 'react';
import Card from '../Card/Card';

const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&lang=ru&units=metric&APPID=7ef513547ffee3d3ebd80ea162e671ba";

class WeekContainer extends React.Component {
    state = {
        days: []
    };

    componentDidMount = () => {
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const dailyData = data.list.filter(reading => reading.dt_txt.includes('12:00:00'));

                this.setState({days: dailyData});
            })
    };

    formatCards = () => {
        return this.state.days.map((day, index,feels_like, speed, gust) =>
            <Card
                day={day} key={index}
                day={day} key={feels_like}
                day={day} key={speed}
                day={day} key={gust}/>)
    };



    render() {
        return (
            <div className="container">
                <h1 className="logo">Прогноз погоды на 5 дней</h1>
                <h5 className="city">Минск</h5>
                <div className="weather">

                    {this.formatCards()}

                </div>
            </div>
        )
    }
}

export default WeekContainer
