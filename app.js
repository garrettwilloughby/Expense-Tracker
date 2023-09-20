
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;




function myFunction(){

    var tbl = document.getElementById("table");
    var row = tbl.insertRow(n);
    
   
    list1[x] = document.getElementById("expense").value;
    list2[x] = document.getElementById("amount").value;
    list3[x] = document.getElementById("date").value;
    list4[x] = document.getElementById("notes").value;
    
    

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
    cell4.innerHTML = list4[x];

    n++;
    x++;
}

var xValues = ["Luxuries", "Transportation", "Utlities", "Entertainment", "Personal Care", "Groceries/Household Necessities"];
var yValues = [0, 0, 0, 0, 0, 0];
var barColors = [
  "green",
  "aquamarine",
  "blue",
  "red",
  "yellow",
  "purple"
];



var chart = new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      
    }
  });


  function updateChart(){
    xValue = document.getElementById("notes").value;
    yValue = Number(document.getElementById("amount").value);


    if (xValue === "Luxuries"){
      yValues[0] += yValue;
    }
    if (xValue === "Transportation"){
      yValues[1] += yValue;
    }
    if (xValue === "Utilities"){
      yValues[2] += yValue;
    }
    if (xValue === "Entertainment"){
      yValues[3] += yValue;
    }
    if (xValue === "Personal"){
      yValues[4] += yValue;
    }
    if (xValue === "Groceries"){
      yValues[5] += yValue;
    }
      



    chart.update();
  }

  var submit = document.getElementById("submit");
  submit.addEventListener('click', updateChart);