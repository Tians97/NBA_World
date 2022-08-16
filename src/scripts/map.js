export function map(){
    var svg = d3.select("#nba-map");
    var path = d3.geoPath();
    const mapinfor = "../../data/states-albers-10m.json"
    let western = ["Washington","Oregon","California","Nevada","Idaho","Arizona","Utah","New Mexico","Colorado","Montana","Wyoming","Colorado","Texas","Oklahoma","Kansas","Nebraska","South Dakota","North Dakota","Minnesota","Iowa","Missouri","Arkansas","Tennessee","Louisiana","Hawaii","Alaska"]
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

    d3.json(mapinfor).then(
        (data,error)=>{
            if(error){
                console.log(error)
            } else {
                stateData = topojson.feature(data, data.objects.states).features
                console.log(stateData)
                drawMap()
            }
        }
        )
};

export function legend(){
    var svg = d3.select("#nba-map");
    svg.append("circle").attr("cx", 550).attr("cy", 550).attr("r", 10).style("fill", "lightblue")
    svg.append("circle").attr("cx", 550).attr("cy", 580).attr("r", 10).style("fill", "pink")
    svg.append("text").attr("x", 570).attr("y", 553).text("Western Conference").style("font-size", "15px").attr("alignment-baseline", "middle")
    svg.append("text").attr("x", 570).attr("y", 583).text("Eastern Conference").style("font-size", "15px").attr("alignment-baseline", "middle")
}

export function mapTeam(){
    
    console.log('team logo')
    let svg = d3.select('#nba-map')
    const team = svg.append("g")
        .attr("class", "team")

    team.append('image')
        .attr('id', 'Los Angeles Laker(LAL)')
        .attr('x', 75)
        .attr('y', 345)
        .attr("link:href", "../../image/LAL.png")
        .attr('width', 50)
        .attr('height', 50)


    team.append('image')
        .attr('id', 'LAC')
        .attr('x', 60)
        .attr('y', 315)
        .attr("link:href", "../../image/LAC.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'SAC')
        .attr('x', 45)
        .attr('y', 215)
        .attr("link:href", "../../image/SAC.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'GSW')
        .attr('x', 20)
        .attr('y', 245)
        .attr("link:href", "../../image/GSW.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'PHX')
        .attr('x', 180)
        .attr('y', 350)
        .attr("link:href", "../../image/PHX.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'POR')
        .attr('x', 45)
        .attr('y', 60)
        .attr("link:href", "../../image/POR.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'UTA')
        .attr('x', 205)
        .attr('y', 215)
        .attr("link:href", "../../image/UTA.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'DEN')
        .attr('x', 315)
        .attr('y', 240)
        .attr("link:href", "../../image/DEN.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'MIN')
        .attr('x', 485)
        .attr('y', 95)
        .attr("link:href", "../../image/MIN.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'KOC')
        .attr('x', 440)
        .attr('y', 335)
        .attr("link:href", "../../image/KOC.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'DAL')
        .attr('x', 450)
        .attr('y', 410)
        .attr("link:href", "../../image/DAL.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'SAS')
        .attr('x', 425)
        .attr('y', 530)
        .attr("link:href", "../../image/SAS.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'HOU')
        .attr('x', 490)
        .attr('y', 490)
        .attr("link:href", "../../image/HOU.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'NOL')
        .attr('x', 590)
        .attr('y', 485)
        .attr("link:href", "../../image/NOL.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'MEM')
        .attr('x', 590)
        .attr('y', 350)
        .attr("link:href", "../../image/MEM.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'CHI')
        .attr('x', 600)
        .attr('y', 205)
        .attr("link:href", "../../image/CHI.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'MIL')
        .attr('x', 600)
        .attr('y', 165)
        .attr("link:href", "../../image/MIL.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'IND')
        .attr('x', 640)
        .attr('y', 250)
        .attr("link:href", "../../image/IND.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'CLE')
        .attr('x', 695)
        .attr('y', 200)
        .attr("link:href", "../../image/CLE.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'DET')
        .attr('x', 660)
        .attr('y', 180)
        .attr("link:href", "../../image/DET.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'TOR')
        .attr('x', 740)
        .attr('y', 140)
        .attr("link:href", "../../image/TOR.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'BOS')
        .attr('x', 885)
        .attr('y', 150)
        .attr("link:href", "../../image/BOS.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'BKN')
        .attr('x', 870)
        .attr('y', 180)
        .attr("link:href", "../../image/BKN.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'NYK')
        .attr('x', 840)
        .attr('y', 180)
        .attr("link:href", "../../image/NYK.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'PHI')
        .attr('x', 830)
        .attr('y', 210)
        .attr("link:href", "../../image/PHI.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'WAS')
        .attr('x', 800)
        .attr('y', 240)
        .attr("link:href", "../../image/WAS.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'ATL')
        .attr('x', 690)
        .attr('y', 380)
        .attr("link:href", "../../image/ATL.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'CHA')
        .attr('x', 745)
        .attr('y', 340)
        .attr("link:href", "../../image/CHA.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'ORL')
        .attr('x', 780)
        .attr('y', 500)
        .attr("link:href", "../../image/ORL.png")
        .attr('width', 50)
        .attr('height', 50)

    team.append('image')
        .attr('id', 'MIA')
        .attr('x', 800)
        .attr('y', 560)
        .attr("link:href", "../../image/MIA.png")
        .attr('width', 50)
        .attr('height', 50)
}

