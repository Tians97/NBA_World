# NBA_Data_Visualization

## Background ##

  NBA World is a one page website made by HTML, CSS and JavaScript. The goal of website is helping vistor to have a basic understanding of NBA in a short time. In the website, there are two section. The first section is NBA map. In the map, vistor can have interactions with team logo, once they click the team lgoo, it will show the basic informaiton of the team. In the second section, Stats Chart, vistor can find out many stats chart made by historical data. Currently, there are 3 charts, total championships for each team, top 10 career's total points, and top 10 career's 3-points made. We will update more in the future. 
  
## Technologies, Libraries, APIs ##

  - Technologies:
    - HTML
    - CSS
    - JavaScript
  - Libraries:
    - D3.js
    - Chart.js
  - APIs: 
    - Player Stats: http://www.balldontlie.io/#introduction
    - Team Color: https://github.com/homerchen19/nba-color
    - US Map: https://github.com/topojson/us-atlas
  
## Features ##

  ### In NBA Data Visualization , users will be able to: ###
  - Map:
    - Using map API information to draw the US map and also draw out the Eastern and Western Conference of the NBA.
    - Putting the team logo on the map, and the logo will shake when mouse is hover on it.
    - The team logo is clickable.
    - After clicking the team logo, there is a modal will popup to show the informaiton fo the team(location, introduction, top players, number of championships)
    ```javascript
    export function map(){
    var svg = d3.select("#nba-map");
    var path = d3.geoPath();
    const mapinfor = "../data/states-albers-10m.json"
    let western = ["Washington","Oregon","California","Nevada","Idaho","Arizona","Utah","New Mexico",
    "Colorado","Montana","Wyoming","Colorado","Texas","Oklahoma","Kansas",
    "Nebraska","South Dakota","North Dakota","Minnesota","Iowa","Missouri",
    "Arkansas","Tennessee","Louisiana","Hawaii","Alaska"]
    svg = d3.select('#nba-map')
    let stateData
    function drawMap(){
        svg.append('g')
            .attr('class', 'state')
            .selectAll('path')
            .data(stateData)
            .enter()
            .append('path')
            .attr('d', d3.geoPath())
            .attr('class', 'state')
            .attr("fill", (el)=>{
                let stateName = el.properties.name
                if (western.includes(stateName)){
                    return "lightblue"
                } else {
                    return "pink"
                }
            })
            legend()
            mapTeam()
    }
    ```
    ![map](https://github.com/Tians97/NBA_World/blob/d14d82adb5ad86aaea50d583701515485c1908f8/gif/map.gif)
  - Stats Charts:
    - Putting all the charts into one block, and using tabs to switch chart.
    - The Chart will have target image on the top of each bar, which will help vistor to understand data better.
    - Showing the numerical data when mouse is hover on the bar.
    
    ![chart](https://github.com/Tians97/NBA_World/blob/d14d82adb5ad86aaea50d583701515485c1908f8/gif/chart.gif)


