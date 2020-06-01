
window.addEventListener('resize', function () {
  var largura = window.innerWidth;
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


 function drawChart() {
  // Define the chart to be drawn.
  //https://www.tutorialspoint.com/googlecharts/googlecharts_configuration_syntax.htm
  var data = google.visualization.arrayToDataTable([
     ['', 'HTML5', 'CSS3', 'C/C++', 'JAVA', 'JavaScript', 'C#', 'SO', 'LINUX', 'WINDOWS'],
     [' ',  200,  300, 500, 435,  220, 280, 400, 400, 450] 
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


