
import {map} from './scripts/map'

const title = document.getElementsByClassName('title')[0]
const body = document.getElementsByClassName('modal-body')[0]

document.addEventListener('DOMContentLoaded', function(){
    let backMap = d3.select("#nba-map")

    backMap.on("click", (e)=>{
        console.log(e.target.id)
        console.log(e.target.class)
        if(e.target.nodeName === "image"){
            modal.style.display = "block"
            title.innerHTML = e.target.id
            body.innerHTML = e.target
        }
    })

    const closeModalButtons = document.querySelectorAll('.close-button')

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            modal.style.display = "none"
        })
    })
    
    map();
})
