# NBA_Data_Visualization

## Background ##

  NBA World is a one page website made by HTML, CSS and JavaScript. The goal of website is helping vistor to have a basic understanding of NBA in a short time. In the website, there are two section. The first section is NBA map. In the map, vistor can have interactions with team logo, once they click the team lgoo, it will show the basic informaiton of the team. In the second section, Stats Chart, vistor can find out many stats chart made by historical data. Currently, there are 3 charts, total championships for each team, top 10 career's total points, and top 10 career's 3-points made. We will update more in the future. 
  
## Functionality & MVPs ##

  ### In NBA Data Visualization , users will be able to: ###
  - Map:
    - Using map API information to draw the US map and also draw out the Eastern and Western Conference of the NBA.
    - Putting the team logo on the map, and the logo will shake when mouse is hover on it.
    - The team logo is clickable.
    - After clicking the team logo, there is a modal will popup to show the informaiton fo the team(location, introduction, top players, number of championships)
    
    ![map](https://github.com/Tians97/NBA_World/blob/d14d82adb5ad86aaea50d583701515485c1908f8/gif/map.gif)
  - Stats Charts:
    - Putting all the charts into one block, and using tabs to switch chart.
    - The Chart will have target image on the top of each bar, which will help vistor to understand data better.
    - Showing the numerical data when mouse is hover on the bar.
    
    ![chart](https://github.com/Tians97/NBA_World/blob/d14d82adb5ad86aaea50d583701515485c1908f8/gif/chart.gif)

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
