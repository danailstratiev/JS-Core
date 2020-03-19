// function attachEvents() {
//     console.log("TODO...");
// }

// attachEvents();

(() => {

    const baseUrl = 'https://judgetests.firebaseio.com/locations.json';
    let dailyUrl = `https://judgetests.firebaseio.com/forecast/{status}/{code}.json`;

    const weatherSymbols = {
        "s": "☀",
        'p': '⛅',
        'o': '☁',
        'r': '☂',
        'd': '°'
    };

    const elements = {
        locationInput: document.querySelector('#location'),
        button: document.querySelector('#submit'),
        notificationHeading: document.querySelector('h1.notification'),
        currentDiv: document.querySelector('#current'),
        upcomingDiv: document.querySelector('#upcoming'),
        forecastWrapper: document.querySelector('#forecast')
    };

    const errorHandler = (e) => {
        console.dir(e);
        elements.notificationHeading.textContent = e.message;
    }

    elements.button.addEventListener('click', getLocationValue);

    const jsonMiddleware = (r) => r.json();

    function getLocationValue() {
        
        const location = elements.locationInput.value;

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                let {name, code} = data.find((o) => o.name === location);

                let currentDayUrl = dailyUrl.replace('{status}/{code}', `today/${code}`);
                let upcomingDayUrl = dailyUrl.replace('{status}/{code}', `upcoming/${code}`);
                
               Promise.all([
                   fetch(currentDayUrl).then(jsonMiddleware),

                   fetch(upcomingDayUrl).then(jsonMiddleware)

               ])
               .then(showWeatherLocation) 
            })  
            .catch(errorHandler);
    }

    function showWeatherLocation ([todayData, upcomingData]) {
        const {condition, high, low} = todayData.forecast;

        let forecastsDiv = createHTMLElement('div', ['forecasts']);
        
        let symbolSpan = createHTMLElement('span', ['condition', 'symbol'], weatherSymbols[condition[0].toLowerCase()]);
    
        let conditionSpan = createHTMLElement('span', ['condition']);

        let forecastFirstDataSpan = createHTMLElement('span', ['forecast-data'], todayData.name);
        let degreesInfo = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;
        let forecastSecondDataSpan = createHTMLElement('span', ['forecast-data'], degreesInfo);
        let forecastThirdDataSpan = createHTMLElement('span', ['forecast-data'], condition);

        conditionSpan.appendChild(forecastFirstDataSpan);
        conditionSpan.appendChild(forecastSecondDataSpan);
        conditionSpan.appendChild(forecastThirdDataSpan);

        forecastsDiv.appendChild(symbolSpan);
        forecastsDiv.appendChild(conditionSpan);

        elements.currentDiv.appendChild(forecastsDiv);
        elements.forecastWrapper.style.display = "block";

        showUpcomingWeatherLocation(upcomingData);
    }

    function showUpcomingWeatherLocation ( {forecast, name} ) {
        let forecastInfoDiv = createHTMLElement('div', ['forecast-info']);

        forecast.forEach(({condition, high, low}) => {
            let upcomingSpan = createHTMLElement('span',['upcoming']);
            
            let locationSpan = createHTMLElement('span', ['location-name'], name);

            let symbolSpan = createHTMLElement('span', ['symbol'], weatherSymbols[condition[0].toLowerCase()]);
            let degreesInfo = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;
            
            let degreeseSpan = createHTMLElement('span', ['forecast-data'], degreesInfo);
            let conditionSpan = createHTMLElement('span', ['forecast-data'], condition);

            upcomingSpan.appendChild(locationSpan);
            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(degreeseSpan);
            upcomingSpan.appendChild(conditionSpan);

            forecastInfoDiv.appendChild(upcomingSpan);
        })

        elements.upcomingDiv.appendChild(forecastInfoDiv);
    }
})();

function createHTMLElement(tagName, classNames, textContent) {
    let element = document.createElement(tagName);

    if (classNames) {
        element.classList.add(... classNames);
    }

    if (textContent) {
        element.textContent = textContent;
    }

    return element;
}