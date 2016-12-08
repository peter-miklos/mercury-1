$(document).ready(function() {
  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  if (document.getElementsByClassName("datepicker").length != 0) {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 100, // Creates a dropdown of 15 years to control year
      min: -(365 * 100),
      max: -(365 * 18)
    });
  }

  $('select').material_select();
})
