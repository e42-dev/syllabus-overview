$(document).ready(function() {
  $("#2").click(function() {
    $(".cont").html("<h4>Elementary Data Structures and Algorithms</h4><p><b>About:</b>This module covers fundamentals of DSA. You'll gain problem-solving skills through practical exercises</p><p><b>Topics Covered:</b>ArrayList, Switch cases, Strings, Sorting, StringBuilder, BufferReader, Recursion & Data Interpretation</p>");

    // Add the CSS class
    $(".cont").addClass("transi");

    // Remove the CSS class after a certain duration
    setTimeout(function() {
      $(".cont").removeClass("transi");
    }, 1000);

    // Call the change_color function
    change_color(12);
  });

  $("#1").click(function() {
    $(".cont").html("<h4>Data Structures and Algorithms</h4><p><b>About:</b>This module covers fundamentals of DSA. You'll gain problem-solving skills through practical exercises</p><p><b>Topics Covered:</b>ArrayList, Switch cases, Strings, Sorting, StringBuilder, BufferReader, Recursion & Data Interpretation</p>");

    // Add the CSS class
    $(".cont").addClass("transi");

    // Remove the CSS class after a certain duration
    setTimeout(function() {
      $(".cont").removeClass("transi");
    }, 1000);

    // Call the change_color function
    change_color(11);
  });

  $("#3").click(function() {
    $(".cont").html("<h4>Algorithms</h4><p><b>About:</b>This module covers fundamentals of DSA. You'll gain problem-solving skills through practical exercises</p><p><b>Topics Covered:</b>ArrayList, Switch cases, Strings, Sorting, StringBuilder, BufferReader, Recursion & Data Interpretation</p>");

    // Add the CSS class
    $(".cont").addClass("transi");

    // Remove the CSS class after a certain duration
    setTimeout(function() {
      $(".cont").removeClass("transi");
    }, 1000);

    // Call the change_color function
    change_color(13);
  });

  $("#4").click(function() {
    $(".cont").html("<h4>Data Structures and Algorithms</h4><p><b>About:</b>This module covers fundamentals of DSA. You'll gain problem-solving skills through practical exercises</p><p><b>Topics Covered:</b>ArrayList, Switch cases, Strings, Sorting, StringBuilder, BufferReader, Recursion & Data Interpretation</p>");

    // Add the CSS class
    $(".cont").addClass("transi");

    // Remove the CSS class after a certain duration
    setTimeout(function() {
      $(".cont").removeClass("transi");
    }, 1000);

    // Call the change_color function
    change_color(14);
  });
});

function change_color(id) {
  $(".circle").removeClass("concentric");
    var i=id;
    $("#" + i).addClass("concentric");
      }
