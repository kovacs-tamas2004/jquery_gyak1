$(document).ready(function() {
    // Tartalom gombok eseménykezelése
    $('#changeTextBtn1').click(function() {
      $('#text').html('Első tartalom <span>kistag</span>.');
    });
  
    $('#changeTextBtn2').click(function() {
      $('#text').html('Második tartalom <strong>kiemelt</strong>.');
    });
  
    $('#changeTextBtn3').click(function() {
      $('#text').html('Harmadik tartalom <em>dőlt</em>.');
    });
  
    // Stílus gombok eseménykezelése
    $('#changeStyleBtn1').click(function() {
      $('#box').css({
        'font-size': '20px',
        'background-color': 'green',
        'width': '120px',
        'height': '120px'
      });
    });
  
    $('#changeStyleBtn2').click(function() {
      $('#box').css({
        'font-size': '16px',
        'background-color': 'yellow',
        'width': '80px',
        'height': '80px'
      });
    });
  
    $('#changeStyleBtn3').click(function() {
      $('#box').css({
        'font-size': '24px',
        'background-color': 'orange',
        'width': '150px',
        'height': '150px'
      });
    });
  
    // Animációs gombok eseménykezelése
    $('#animateBtn1').click(function() {
      $('#animatedBox').animate({
        'left': '+=50px'
      }, 'slow');
    });
  
    $('#animateBtn2').click(function() {
      $('#animatedBox').animate({
        'width': '+=20px',
        'height': '+=20px'
      }, 'fast');
    });
  
    $('#animateBtn3').click(function() {
      $('#animatedBox').fadeOut().fadeIn();
    });
  });