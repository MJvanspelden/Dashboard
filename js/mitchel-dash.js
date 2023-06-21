//Mitchel

const weatherChart = document.querySelector('.weatherChart');
const dailyWeatherChart = document.querySelector(".dailyWeatherChart")
const averagerain = document.querySelector(".averageRain");
const totalrain = document.querySelector(".totalRain");
const averagetemperature = document.querySelector(".averageTemperature");

const url = 'https://api.open-meteo.com/v1/forecast?latitude=60.11&longitude=-113.64&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,rain'

fetch(url)
    .then(data => data.json())
    .then(jsonData => showAllWeather(jsonData))
function showAllWeather(jsonData) {
    showRain(jsonData)
    showTemperature(jsonData)
    showAverageRain(jsonData)
    showTotalRain(jsonData)
    showAverageTemperature(jsonData)
}
//berekent de gemiddelde hoeveelheid regen
function showAverageRain(jsonData) {
    let totalRain = 0;

    for (let r = 0; r < jsonData.hourly.rain.length; r++) {
        const valueRain = jsonData.hourly.rain[r];
        totalRain = totalRain + valueRain;
    }
    const averageRain = totalRain / 7
    averagerain.innerHTML += averageRain.toFixed(2)
}
//berekent het totale hoeveelheid regen wat er valt
function showTotalRain(jsonData) {
    let totalRain = 0;

    for (let r = 0; r < jsonData.hourly.rain.length; r++) {
        const valueRain = jsonData.hourly.rain[r];
        totalRain = totalRain + valueRain;
    }
    totalrain.innerHTML += totalRain.toFixed(2)
}

function showAverageTemperature(jsonData) {
    let totalTemperature = 0;

    for (let r = 0; r < jsonData.hourly.temperature_2m.length; r++) {
        const valueTemperature = jsonData.hourly.temperature_2m[r];
        totalTemperature = totalTemperature + valueTemperature;
    }
    const averageTemperature = totalTemperature / jsonData.hourly.temperature_2m.length
    averagetemperature.innerHTML += averageTemperature.toFixed(2)
}



//chart die laat wanneer het regend
function showRain(jsonData) {
    new Chart(weatherChart, {
        type: 'line',
        data: {
            labels: jsonData.hourly.time,
            datasets: [{
                label: 'the amount mm of rain each day',
                data: jsonData.hourly.rain,
                borderWidth: 1,
                Color: "black",
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
    console.log(jsonData)
}

function showTemperature(jsonData) {
    new Chart(dailyWeatherChart, {
        type: 'line',
        data: {
            labels: jsonData.hourly.time,
            datasets: [{
                label: 'temperature',
                data:  jsonData.hourly.temperature_2m,
                borderWidth: 1,
                Color: "black",
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    })
};  
