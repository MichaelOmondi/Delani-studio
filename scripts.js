$(document).ready(function(){
    $(".design").click(function(){
        $(".mykey").toggle();
       $(".design-image").toggle();
      });
}) 

  $(document).ready(function(){
    $(".clickable2").click(function(){
        $(".development-hidden").toggle();
        $(".development-showing").toggle();
    });
  }
  
  
  $(document).ready(function(){
    $(".clickable3").click(function(){
        $(".management-hidden").toggle();
        $(".management-showing").toggle();
      });

  }
  
  
  var key = '1c2089a31a00d28af6cb0e553ed84697-us20';
  
  $("button").click(function(event) {
    event.preventDefault();
    var user = document.getElementById('username').value;
    alert("Dear " + user + ", we have received your message. Thank you for reaching out to us.");
  });
  
  $("button").on('click', function(){
    $('form').each(function(){
      this.reset();
    });
  });