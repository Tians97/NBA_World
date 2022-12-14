
import {map} from './scripts/map'
import {totalPointChart} from'./scripts/total_points'
import {total3PointChart} from'./scripts/total_3points'
import {totalChampionships } from './scripts/total_championships'


const title = document.getElementsByClassName('title')[0]
const location = document.getElementsByClassName('location')[0]
const intro = document.getElementsByClassName('intro')[0]
const topplayers = document.getElementsByClassName('topplayers')[0]
const numchampionships = document.getElementsByClassName('numchampionships')[0]




document.addEventListener('DOMContentLoaded', function(){
    let backMap = d3.select("#nba-map")

    map();
    backMap.on("click", (e)=>{
        if(e.target.nodeName === "image"){
            modal.style.display = "block"
            title.innerHTML = e.path[0].dataset.name
            location.innerHTML = e.path[0].dataset.location
            intro.innerHTML = e.path[0].dataset.intro
            topplayers.innerHTML = e.path[0].dataset.topplayers
            numchampionships.innerHTML = e.path[0].dataset.numchamp


            
        }
    })


    const closeModalButtons = document.querySelectorAll('.close-button')

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            modal.style.display = "none"
        })
    })

    const introCloseModalButtons = document.querySelectorAll('.intro-close-button')

    introCloseModalButtons.forEach(button => {
        button,this.addEventListener('click', ()=>{
            const modal = button.closest('.intro-modal')
            modal.style.display = "none"
        })
    })

    
    totalPointChart();
    total3PointChart();
    totalChampionships();
})
