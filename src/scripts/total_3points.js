import Chart from 'chart.js/auto'

var canvasElement = document.getElementById('total3Point')
const img1 = new Image();
img1.src = "https://www.hispanosnba.com/imagenes/jugadores_img/stephen-curry.jpg";
const img2 = new Image();
img2.src = "https://www.hispanosnba.com/imagenes/jugadores_img/ray-allen.jpg";
const img3 = new Image();
img3.src = "https://www.hispanosnba.com/imagenes/jugadores_img/james-harden.jpg";
const img4 = new Image();
img4.src = "https://www.hispanosnba.com/imagenes/jugadores_img/reggie-miller.jpg";
const img5 = new Image();
img5.src = "https://www.hispanosnba.com/imagenes/jugadores_img/kyle-korver.jpg";
const img6 = new Image();
img6.src = "https://www.hispanosnba.com/imagenes/jugadores_img/vince-carter.jpg";
const img7 = new Image();
img7.src = "https://www.hispanosnba.com/imagenes/jugadores_img/jason-terry.jpg";
const img8 = new Image();
img8.src = "https://www.hispanosnba.com/imagenes/jugadores_img/jamal-crawford.jpg";
const img9 = new Image();
img9.src = "https://www.hispanosnba.com/imagenes/jugadores_img/damian-lillard.jpg";
const img10 = new Image();
img10.src = "https://www.hispanosnba.com/imagenes/jugadores_img/paul-pierce.jpg";

const image = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

// barAvatar Plugin Block
const datapoint = [3117, 2973, 2593, 2560, 2450, 2290, 2282, 2221, 2143, 2143]
const barAvatar = {
    id: 'barAvatar',
    afterDatasetDraw(chart, args, options) {
        const { ctx, chartArea: { top, bottom, left, right, width, height },
            scales: { x, y } } = chart;
        ctx.save();
        for (let i = 0; i < datapoint.length; i++) {
            ctx.drawImage(image[i], x.getPixelForValue(i) - 20, y.getPixelForValue(datapoint[i]) - 50, 40, 50)
        }
    }
}
var config = {
    type: "bar",
    data: {
        labels: ["Stephen Curry", "Ray Allen", "James Harden", "Reggie Miller", "Kyle Korver", "Vince Carter", "Jason Terry", "Jamal Crawford", "Damian Lillard", "Paul Pierce"],
        datasets: [{ label: "Career's Total 3 Points Made", data: [3117, 2973, 2593, 2560, 2450, 2290, 2282, 2221, 2143, 2143] }]
    },
    borderWidth: 1,
    options: {
        responsive: false,
        maintainAspectRatio: false
    },
    plugins: [barAvatar]
}

export function total3PointChart() {
    new Chart(canvasElement, config)
}