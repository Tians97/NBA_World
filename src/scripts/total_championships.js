import Chart from 'chart.js/auto'

var canvasElement = document.getElementById('totalChampionship')
const img1 = new Image();
img1.src = "https://loodibee.com/wp-content/uploads/nba-los-angeles-lakers-logo-300x300.png";
const img2 = new Image();
img2.src = "https://loodibee.com/wp-content/uploads/nba-boston-celtics-logo-300x300.png";
const img3 = new Image();
img3.src = "https://loodibee.com/wp-content/uploads/nba-golden-state-warriors-logo-2020-300x300.png";
const img4 = new Image();
img4.src = "https://loodibee.com/wp-content/uploads/nba-chicago-bulls-logo-300x300.png";
const img5 = new Image();
img5.src = "https://loodibee.com/wp-content/uploads/nba-san-antonio-spurs-logo-300x300.png";
const img6 = new Image();
img6.src = "https://loodibee.com/wp-content/uploads/nba-philadelphia-76ers-logo-300x300.png";
const img7 = new Image();
img7.src = "https://loodibee.com/wp-content/uploads/nba-detroit-pistons-logo-300x300.png";
const img8 = new Image();
img8.src = "https://loodibee.com/wp-content/uploads/nba-miami-heat-logo-300x300.png";
const img9 = new Image();
img9.src = "https://loodibee.com/wp-content/uploads/nba-new-york-knicks-logo-300x300.png";
const img10 = new Image();
img10.src = "https://loodibee.com/wp-content/uploads/nba-houston-rockets-logo-2020-300x300.png";
const img11 = new Image();
img11.src = "https://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo-300x300.png";
const img12 = new Image();
img12.src = "https://loodibee.com/wp-content/uploads/cleveland-cavaliers-2010-2017-300x300.png";
const img13 = new Image();
img13.src = "https://loodibee.com/wp-content/uploads/nba-atlanta-hawks-logo-300x300.png";
const img14 = new Image();
img14.src = "https://loodibee.com/wp-content/uploads/nba-oklahoma-city-thunder-logo-300x300.png";
const img15 = new Image();
img15.src = "https://loodibee.com/wp-content/uploads/nba-washington-wizards-logo-300x300.png";
const img16 = new Image();
img16.src = "https://loodibee.com/wp-content/uploads/nba-portland-trail-blazers-logo-300x300.png";
const img17 = new Image();
img17.src = "https://loodibee.com/wp-content/uploads/nba-dallas-mavericks-logo-300x300.png";
const img18 = new Image();
img18.src = "https://loodibee.com/wp-content/uploads/nba-toronto-raptors-logo-2020-300x300.png";
const img19 = new Image();
img19.src = "https://loodibee.com/wp-content/uploads/nba-sacramento-kings-logo-300x300.png";



const image = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19]

// barAvatar Plugin Block
const datapoint = [17, 17, 7, 6, 5, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1]
const barAvatar = {
    id: 'barAvatar',
    afterDatasetDraw(chart, args, options) {
        const { ctx, chartArea: { top, bottom, left, right, width, height },
            scales: { x, y } } = chart;
        ctx.save();
        console.log(ctx,"context")
        for (let i = 0; i < datapoint.length; i++) {
            ctx.drawImage(image[i], x.getPixelForValue(datapoint[i]), y.getPixelForValue(i) - 25, 50, 50)
        }
    }
}
var config = {
    type: "bar",
    data: {
        labels: ["Los Angeles Lakers", "Boston Celtics", "Golden State Warriors", "Chicago Bulls", "San Antonio Spurs", "Philadelphia 76ers", "Detroit Pistons", "Miami Heat", "New York Knicks", "Houston Rockets", "Milwaukee Bucks", "Cleveland Cavaliers", "Atlanta Hawks", "Oklahoma City Thunder", "Washington Wizards", "Portland Trail Blazers", "Dallas Mavericks", "Toronto Raptors", "Sacramento Kings" ],
        datasets: [{ label: "Number of Championships", 
                    data: [17, 17, 7, 6, 5, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: ['rgb(85, 37, 130)',
                                'rgb(0, 122, 51)',
                                'rgb(29, 66, 138)',
                                'rgb(206, 17, 65)',
                                'rgb(196, 206, 211)',
                                'rgb(0, 107, 182)',
                                'rgb(200,16,46)',
                                'rgb(152, 0, 46)',
                                'rgb(245, 132, 38)',
                                'rgb(206,17,65)',
                                'rgb(0, 71, 27)',
                                'rgb(134, 0, 56)',
                                'rgb(200, 16, 46)',
                                'rgb(0, 125, 195)',
                                'rgb(0,43,92)',
                                'rgb(224, 58, 62)',
                                'rgb(0, 83, 188)',
                                'rgb(206, 17, 65)',
                                'rgb(91,43,130)'
                                ]},]
    },
    borderWidth: 1,
    options: {
        responsive: false,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            }
        }
    },
    plugins: [barAvatar]
}

export function totalChampionships() {
    new Chart(canvasElement, config)
}