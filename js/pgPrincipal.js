var mapCasos  =new Map() 

function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function getCasos() {
    fetch("https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=SC")
    .then(response => response.json())
    .then(data => {
       data["results"].forEach(({city, city_ibge_code, confirmed, confirmed_per_100k_inhabitants, date, death_rate, deaths,
               estimated_population_2019, is_last, place_type, state}) =>
       mapCasos.set(city, confirmed)
    ).catch(erro => alert(erro));
   })
 }

 function drawChart() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
     ['Year', 'Blumenau', 'Gaspar', 'Indaial', 'Pomerode', 'Ilhota', 'Brusque', 'Joinville', 'Rio do Sul', 'Florianópolis'],
     ['2020',  mapCasos.get("Blumenau"),  mapCasos.get("Gaspar"), mapCasos.get("Indaial"), mapCasos.get("Pomerode"),  mapCasos.get("Ilhota"),
     mapCasos.get("Brusque"), mapCasos.get("Joinville"), mapCasos.get("Rio do Sul"), mapCasos.get("Florianópolis")] 
    ]);

  var options = {title: 'Population (in millions)'};  

  // Instantiate and draw the chart.
  var chart = new google.charts.Bar(document.getElementById('container'));
  chart.draw(data, options);
}


