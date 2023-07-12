document.addEventListener("DOMContentLoaded", function() {
  var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    row.addEventListener("click", function() {
      var link = this.dataset.href;
      if (link) {
        window.location.href = "job_Details.html";
      }
    });
  }
});