import icon from './icon.png';
export default function OWHead(){

    return(
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                    <h1 id="title">
                        5 Day / 3 Hour Forecast
                    </h1>
                    <h3 id="HK">
                        Hong Kong
                    </h3>
                </div>
                <div id="time-container" className="col-auto d-flex align-items-center">
                    <div className="d-flex flex-column mr-3">
                        <h5 className="time">Last Update Time:</h5>
                        <h5 className="time">17/03/2021 02:01:39</h5>
                    </div>
                    <div>
                        <img src={icon} alt="Weather Icon"/>
                    </div>
                </div>
            </div>
            <br/>
        </div>


    )
}