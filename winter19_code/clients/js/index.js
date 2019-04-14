'use strict'

$('.where a').click(function(){
    $('#city-selected').text($(this).text());
  });

  $('.when a').click(function(){
    $('#date-selected').text($(this).text());
  });
