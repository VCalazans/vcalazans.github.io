var mapCasos  = new Map() 
var parmAtualizacao = 780

window.addEventListener('resize', function () {
  //var altura = window.innerHeight;
  var largura = window.innerWidth;
  //alert(largura)
  if (largura < 650 || largura > 650) 
      window.location.reload();
});


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
    )
   }).catch(erro => erro);
 }

 function drawChart() {
  // Define the chart to be drawn.
  //https://www.tutorialspoint.com/googlecharts/googlecharts_configuration_syntax.htm
  var data = google.visualization.arrayToDataTable([
     ['Year', 'Blumenau', 'Gaspar', 'Indaial', 'Pomerode', 'Ilhota', 'Brusque', 'Joinville', 'Rio do Sul', 'Florianópolis'],
     ['2020',  mapCasos.get("Blumenau"),  mapCasos.get("Gaspar"), mapCasos.get("Indaial"), mapCasos.get("Pomerode"),  mapCasos.get("Ilhota"),
     mapCasos.get("Brusque"), mapCasos.get("Joinville"), mapCasos.get("Rio do Sul"), mapCasos.get("Florianópolis")] 
    ]);

  var options = {
    backgroundColor: "#f7f7f7",
    chart: {
      title: '',
    },
    chartArea: {
      backgroundColor:{
        fill:"#f7f7f7"
      }
    }
  };  

  // Instantiate and draw the chart.
  var chart = new google.charts.Bar(document.getElementById('container'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}


