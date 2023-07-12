//clickable job rows customer page
document.addEventListener("DOMContentLoaded", function() {
  var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    row.addEventListener("click", function() {
      var link = this.dataset.href;
      if (link) {
        window.location.href = "jobDetails.html";
      }
    });
  }
});

//create job modal
$(document).ready(function() {
  $('#assign-Btn').click(function() {
    $('#createJobModal').modal('show');
    console.log("create job modal")
  });

  $('#JobForm').submit(function(event) {
    event.preventDefault();
   //Retrieve form input values and perform actions with them
    var workerName = $('#workerName').val();
    var workerEmail = $('#workerEmail').val();
    var workerPhone = $('#workerPhone').val();
    var workerRole = $('#workerRole').val();
    var workerAddress = $('#workerAddress').val();
  });
});




