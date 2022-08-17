import Chart from 'chart.js/auto'

var canvasElement = document.getElementById('totalPoint')
var config = {
    type: "bar",
    data: {
        labels: ["Kareem Abdul-Jabbar", "LeBron James", "Karl Malone", "Kobe Bryant", "Michael Jordan", "Dirk Nowitzki", "Wilt Chamberlain", "Shaquille O'Neal", "Carmelo Anthony", "Moses Malone"],
        datasets: [{ label: "Career's Total Points", data:[38387, 37062, 36928, 33643, 32292, 31560, 31419, 28596, 28289, 27409]}]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true
    }
}

export function totalPointChart(){
    new Chart(canvasElement, config)
}

