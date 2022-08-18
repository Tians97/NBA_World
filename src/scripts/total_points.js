import Chart from 'chart.js/auto'

var canvasElement = document.getElementById('totalPoint')
const img1 = new Image();
img1.src = "https://www.hispanosnba.com/imagenes/jugadores_img/kareem-abdul-jabbar.jpg";
const img2 = new Image();
img2.src = "https://www.hispanosnba.com/imagenes/jugadores_img/lebron-james.jpg";
const img3 = new Image();
img3.src = "https://www.hispanosnba.com/imagenes/jugadores_img/karl-malone.jpg";
const img4 = new Image();
img4.src = "https://www.hispanosnba.com/imagenes/jugadores_img/kobe-bryant.jpg";
const img5 = new Image();
img5.src = "https://www.hispanosnba.com/imagenes/jugadores_img/michael-jordan.jpg";
const img6 = new Image();
img6.src = "https://www.hispanosnba.com/imagenes/jugadores_img/dirk-nowitzki.jpg";
const img7 = new Image();
img7.src = "https://www.hispanosnba.com/imagenes/jugadores_img/wilt-chamberlain.jpg";
const img8 = new Image();
img8.src = "https://www.hispanosnba.com/imagenes/jugadores_img/shaquille-oneal.jpg";
const img9 = new Image();
img9.src = "https://www.hispanosnba.com/imagenes/jugadores_img/carmelo-anthony.jpg";
const img10 = new Image();
img10.src = "https://www.hispanosnba.com/imagenes/jugadores_img/moses-malone.jpg";

const image = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

// barAvatar Plugin Block
const datapoint = [38387, 37062, 36928, 33643, 32292, 31560, 31419, 28596, 28289, 27409]
const barAvatar = {
    id: 'barAvatar',
    afterDatasetDraw(chart, args, options){
        const {ctx, chartArea: {top, bottom, left, right, width, height},
            scales: {x, y} } = chart;
        ctx.save();
        for (let i = 0; i < datapoint.length; i++){
            ctx.drawImage(image[i], x.getPixelForValue(datapoint[i]), y.getPixelForValue(i) - 25, 40, 50)
        }
    }
}
var config = {
    type: "bar",
    data: {
        labels: ["Kareem Abdul-Jabbar", "LeBron James", "Karl Malone", "Kobe Bryant", "Michael Jordan", "Dirk Nowitzki", "Wilt Chamberlain", "Shaquille O'Neal", "Carmelo Anthony", "Moses Malone"],
        datasets: [{ label: "Career's Total Points",
        data:[38387, 37062, 36928, 33643, 32292, 31560, 31419, 28596, 28289, 27409],
            backgroundColor: ['rgb(85, 37, 130)',
                                'rgb(134, 0, 56)',
                                'rgb(108, 174, 223)',
                                'rgb(253, 185, 39)',
                                'rgb(206, 17, 65)',
                                'rgb(0, 83, 188)',
                                'rgb(29, 66, 138)',
                                'rgb(196, 206, 211)',
                                'rgb(245, 132, 38)',
                                'rgb(206,17,65)']
    }]
    },
    borderWidth: 1,
    options: {
        responsive:false,
        maintainAspectRatio: false,
        indexAxis: "y",
        plugins: {
            legend: {
                display: false
            }
        }
    },
    plugins: [barAvatar]
}

export function totalPointChart(){
    new Chart(canvasElement, config)
}

