import React from 'react';
import './Card.css';


class Card extends React.Component {

    render() {
        const ms = this.props.day.dt * 1000;
        const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
        const weatherFeelsLike = this.props.day.main.feels_like;
        const windSpeed = this.props.day.wind.speed;
        const windGust = this.props.day.wind.gust;

        const imgURL = "owf owf-"+ this.props.day.weather[0].id +" owf-5x icon-style";

        return (
            <div className="col-auto">
                <div className="card bg-light">
                    <h3 className="card-title">{weekdayName}</h3>
                    <i className={imgURL}></i>
                    <h2>{Math.round(this.props.day.main.temp)} °C</h2>
                    <div className="card-body">
                        <p className="card-text">{this.props.day.weather[0].description}</p>
                    </div>
                    <div className="card-body">
                    <p className="card-feels_like"> Ощущается как {weatherFeelsLike} °C</p>
                    </div>
                    <div className="card-body">
                        <p className="card-wind speed"> Скорость ветра {windSpeed}  м/с</p>
                    </div>
                    <div className="card-body">
                        <p className="card-wind gust"> Порывы ветра {windGust}  м/с</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
