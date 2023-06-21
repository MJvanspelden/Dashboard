console.log('js loaded');



///rivesh chart
// all queryselectors for charts
const riveshChart = document.querySelector('canvas.rivesh-chart');
const riveshChart2 = document.querySelector('canvas.rivesh-chart2');
const riveshChart3 = document.querySelector('canvas.rivesh-chart3');
const riveshChart4 = document.querySelector('canvas.rivesh-chart4');

// all queryselectors for calcutaling highest value
const germanyValue = document.querySelector('span.highest-germany');
const japanValue = document.querySelector('span.highest-japan');
const usaValue = document.querySelector('span.highest-usa');
const frenchValue = document.querySelector('span.highest-french');

// all queryselectors for calcutaling lowest value
const germanyLowestValue = document.querySelector('span.lowest-germany');
const japanLowestValue = document.querySelector('span.lowest-japan');
const usaLowestValue = document.querySelector('span.lowest-usa');
const frenchLowestValue = document.querySelector('span.lowest-french');

// all queryselectors for calcutaling average value
const germanyAverageValue = document.querySelector('span.average-germany');
const japanAverageValue = document.querySelector('span.average-japan');
const usaAverageValue = document.querySelector('span.average-usa');
const frenchAverageValue = document.querySelector('span.average-french');

// all queryselectors for calcutaling total value
const germanyTotalValue = document.querySelector('span.total-germany');
const japanTotalValue = document.querySelector('span.total-japan');
const usaTotalValue = document.querySelector('span.total-usa');
const frenchTotalValue = document.querySelector('span.total-french');

// all queryselectors for calcutaling highest 3 value

const highestThreeDE = document.querySelector('.german-list');
const highestThreeJP = document.querySelector('.japan-list');
const highestThreeUS = document.querySelector('.usa-list');
const highestThreeFR = document.querySelector('.french-list');

// color code to make chart lines red
const red = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red',]


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//germany index

// fetch germany stock exchange 
fetch('https://www.econdb.com/api/series/SEIDE/?API_TOKEN=29aa30b516d8ff2050bb9e7cd0128716cc6e142d&format=json')
    .then(Response => Response.json())
    .then(data => processDataGermany(data));


//function makes all functions show in HTML/chart
function processDataGermany(data) {
    console.log(data)
    // console.log(data.data.values);

    const highestValue = getHighestValue(data.data.values)
    const lowestValue = getLowestValue(data.data.values)
    const averageValue = getAverageValue(data.data.values)
    const totalValue = getTotalValue(data.data.values)
    const topValue = getTopHighest(data.data.values)

    germanyValue.innerHTML += highestValue
    germanyLowestValue.innerHTML += lowestValue.toFixed(2)
    germanyAverageValue.innerHTML += averageValue.toFixed(2)
    germanyTotalValue.innerHTML += totalValue.toFixed(0)

    for (let i = 0; i < topValue.length; i++) {
        const value = topValue[i];
        
        highestThreeDE.innerHTML += `<li>${value}</li>`
    }
    

    showLinechart(data)
}

//calculates lowest value using array from fetch and uses a for-loop
function getLowestValue(values) {

    let lowestNumber;

    for (let i = 0; i < values.length; i++) {
        const value = values[i];



        if (lowestNumber == null || value < lowestNumber) {
            lowestNumber = value
        }
    }

    return lowestNumber
}


//calculates highest value using array from fetch and uses a for-loop and a if-statement
function getHighestValue(values) {

    let highestNumber = 0;

    for (let i = 0; i < values.length; i++) {
        const value = values[i];



        if (value > highestNumber) {
            highestNumber = value
        }
    }
    // console.log(highestNumber);
    return highestNumber
}

//calculates average value using array from fetch and uses a for-loop 
function getAverageValue(values) {

    let total = 0;

    for (let index = 0; index < values.length; index++) {
        const value = values[index];

        total = total + value;
    }
    const averageNumber = total / values.length
    // console.log(averageNumber);
    // console.log(total);
    return averageNumber
}

// function calculates total 

function getTotalValue(values) {
    let total = 0;

    for (let index = 0; index < values.length; index++) {
        const value = values[index];

        total += value;

    }
    // console.log(total);
    return total
}

// function makes 3 top values show up 

function getTopHighest(values) {
    // console.log("highest values: ", values)
    const numArray = [...values];
    
    numArray.sort(function (a, b) {
        return b - a;
    });

    // console.log("numArray: ", numArray);

    const highestArray = [numArray[0] , numArray[1] , numArray[2]];
    
    // console.log("highest array = " + highestArray);
    return highestArray
}




//functions makes a line chart for germany
function showLinechart(data) {

    new Chart(riveshChart, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    grid: {
                        color: ''
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    grid: {
                        color: 'grey'
                    },
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//japan index

fetch('https://www.econdb.com/api/series/SEIJP/?API_TOKEN=29aa30b516d8ff2050bb9e7cd0128716cc6e142d&format=json')
    .then(Response => Response.json())
    .then(data => processDataJapan(data));

function processDataJapan(data) {


    const highestValue = getHighestValue(data.data.values)
    const lowestValue = getLowestValue(data.data.values)
    const averageValue = getAverageValue(data.data.values)
    const totalValue = getTotalValue(data.data.values)
    const topValue = getTopHighest(data.data.values)

    japanValue.innerHTML += highestValue
    japanLowestValue.innerHTML += lowestValue.toFixed(2)
    japanAverageValue.innerHTML += averageValue.toFixed(2)
    japanTotalValue.innerHTML += totalValue.toFixed(0)

    for (let i = 0; i < topValue.length; i++) {
        const value = topValue[i];
        
        highestThreeJP.innerHTML += `<li>${value}</li>`
    }
    

    showLine2chart(data)
}



//functions makes a line chart for japan
function showLine2chart(data) {

    new Chart(riveshChart2, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    grid: {
                        color: ''
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    grid: {
                        color: 'grey'
                    },
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//USA index
fetch('https://www.econdb.com/api/series/SEIUS/?API_TOKEN=29aa30b516d8ff2050bb9e7cd0128716cc6e142d&format=json')
    .then(Response => Response.json())
    .then(data => processDataUsa(data));

function processDataUsa(data) {

    const highestValue = getHighestValue(data.data.values)
    const lowestValue = getLowestValue(data.data.values)
    const averageValue = getAverageValue(data.data.values)
    const totalValue = getTotalValue(data.data.values)
    const topValue = getTopHighest(data.data.values)

    usaValue.innerHTML += highestValue
    usaLowestValue.innerHTML += lowestValue.toFixed(2)
    usaAverageValue.innerHTML += averageValue.toFixed(2)
    usaTotalValue.innerHTML += totalValue.toFixed(0)

    for (let i = 0; i < topValue.length; i++) {
        const value = topValue[i];
        
        highestThreeUS.innerHTML += `<li>${value}</li>`
    }
    
    showLine3chart(data)
}


//functions makes a line chart for america
function showLine3chart(data) {

    new Chart(riveshChart3, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    grid: {
                        color: ''
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    grid: {
                        color: 'grey'
                    },
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
};


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//France index
fetch('https://www.econdb.com/api/series/SEIFR/?API_TOKEN=29aa30b516d8ff2050bb9e7cd0128716cc6e142d&format=json')
    .then(Response => Response.json())
    .then(data => processDataFrench(data));

function processDataFrench(data) {

    const highestValue = getHighestValue(data.data.values)
    const lowestValue = getLowestValue(data.data.values)
    const averageValue = getAverageValue(data.data.values)
    const totalValue = getTotalValue(data.data.values)
    const topValue = getTopHighest(data.data.values)

    frenchValue.innerHTML += highestValue
    frenchLowestValue.innerHTML += lowestValue.toFixed(2)
    frenchAverageValue.innerHTML += averageValue.toFixed(2)
    frenchTotalValue.innerHTML += totalValue.toFixed(0)

    for (let i = 0; i < topValue.length; i++) {
        const value = topValue[i];
        
        highestThreeFR.innerHTML += `<li>${value}</li>`
    }
    

    showLine4chart(data)
}

//functions makes a line chart for french
function showLine4chart(data) {

    new Chart(riveshChart4, {
        type: 'line',
        data: {
            labels: data.data.dates,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'red',
                pointRadius: 1,
                label: '',
                data: data.data.values,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    grid: {
                        color: ''
                    },
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    grid: {
                        color: 'grey'
                    },
                    ticks: {
                        color: 'white'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
