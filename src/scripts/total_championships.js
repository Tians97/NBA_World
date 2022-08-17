import Chart from 'chart.js/auto'

var canvasElement = document.getElementById('totalChampionship')
const img1 = new Image();
img1.src = "../../image/BOS.png";
const img2 = new Image();
img2.src = "../../image/LAL.png";
const img3 = new Image();
img3.src = "../../image/GSW.png";
const img4 = new Image();
img4.src = "../../image/CHI.png";
const img5 = new Image();
img5.src = "../../image/SAS.png";
const img6 = new Image();
img6.src = "../../image/PHI.png";
const img7 = new Image();
img7.src = "../../image/DET.png";
const img8 = new Image();
img8.src = "../../image/MIA.png";
const img9 = new Image();
img9.src = "../../image/NYK.png";
const img10 = new Image();
img10.src = "../../image/HOU.png";
const img11 = new Image();
img11.src = "../../image/MIL.png";
const img12 = new Image();
img12.src = "../../image/CLE.png";
const img13 = new Image();
img13.src = "../../image/ATL.png";
const img14 = new Image();
img14.src = "../../image/KOC.png";
const img15 = new Image();
img15.src = "../../image/WAS.png";
const img16 = new Image();
img16.src = "../../image/POR.png";
const img17 = new Image();
img17.src = "../../image/DAL.png";
const img18 = new Image();
img18.src = "../../image/TOR.png";
const img19 = new Image();
img19.src = "../../image/SAC.png";



const image = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19]

// barAvatar Plugin Block
const datapoint = [17, 17, 7, 6, 5, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1]
const barAvatar = {
    id: 'barAvatar',
    afterDatasetDraw(chart, args, options) {
        const { ctx, chartArea: { top, bottom, left, right, width, height },
            scales: { x, y } } = chart;
        ctx.save();
        for (let i = 0; i < datapoint.length; i++) {
            ctx.drawImage(image[i], x.getPixelForValue(i) - 25, y.getPixelForValue(datapoint[i]) - 50, 50, 50)
        }
    }
}
var config = {
    type: "bar",
    data: {
        labels: ["Los Angeles Lakers", "Boston Celtics", "Golden State Warriors", "Chicago Bulls", "San Antonio Spurs", "Philadelphia 76ers", "Detroit Pistons", "Miami Heat", "New York Knicks", "Houston Rockets", "Milwaukee Bucks", "Cleveland Cavaliers", "Atlanta Hawks", "Oklahoma City Thunder", "Washington Wizards", "Portland Trail Blazers", "Dallas Mavericks", "Toronto Raptors", "Sacramento Kings" ],
        datasets: [{ label: "Number of Championships", data: [17, 17, 7, 6, 5, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1] }]
    },
    borderWidth: 1,
    options: {
        responsive: false,
        maintainAspectRatio: false
    },
    plugins: [barAvatar]
}

export function totalChampionships() {
    new Chart(canvasElement, config)
}