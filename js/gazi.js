//gazi chart 
const gazichart = document.querySelector('canvas.gazichart');

fetch ("https://mbo-sd.nl/apiv2/basic-cash-register")
    .then(Response => Response.json())
    .then(data => showchart(data));
   
    function showchart(money) {
        console.log(money);
console.log(money.receipts[0]);

const labels = [];
Chart.defaults.color = '#fff';
const prices =[];

for (let i = 0; i < money.receipts[0].length; i++) {
    const element = money.receipts[0][i];
    if (labels.length<20) {
        
    
    console.log(element);
    labels.push(element.name)
    prices.push(element.price)
}
}
        
  new Chart(gazichart, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'chart',
        data: prices,
        color: 'red',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'red'
      }]
    },
    options: {
      scales: {
        x: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
            grid: {
              color: 'rgba(255,0,0,0.1)',
              borderColor: 'red'  // <-- this line is answer to initial question
            }
          },
          y: {  // <-- axis is not array anymore, unlike before in v2.x: '[{'
            grid: {
              color: 'rgba(0,255,0,0.1)',
              borderColor: 'green'  // <-- this line is answer to initial question
            }
          }
        }
      }
    }
  );
    }
// new chart (gazichart,{
//     type: "line" ,
//     data: {
// labels:[money.name],
// datasets:[{backgroundColor 

// }]


//     }
// })
