//js for local storage

// var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {},
//     $checkboxes = $(".flex_box_container :checkbox");
//
// $checkboxes.on("change", function(){
//   $checkboxes.each(function(){
//     checkboxValues[this.id] = this.checked;
//   });
//
//   localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
// });
//
// // On page load
// $.each(checkboxValues, function(key, value) {
//   $("#" + key).prop('checked', value);
// });


    //on page load it sends a GET request to the backend to get all the checkboxes values,
    // then it changes the value of each checkbox in the html inside the for loop

    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:4000/checkboxes', true);
    request.onload = function () {
      var data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        $("#div1").html(this.response);
        console.log(data);
        var arrayLength = data.checkboxes.length;
        for (var i = 0; i < arrayLength; i++) {
            var id = data.checkboxes[i].id
            var value = data.checkboxes[i].value
            document.getElementById(id).checked = value;
        }
      } else {
        console.log('error');
      }
    }
    request.send();

    //when a checkbox is clicked, it triggers the update function.
    //It then sends a PUT request to the backend with the checkbox id and value

    function update(box) {
      console.log("CLICKED", box.id, box.checked);
      var request = new XMLHttpRequest();
      request.open('PUT', 'http://localhost:4000/checkboxes/'+box.id, true);
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      request.send("value="+box.checked)
    }
