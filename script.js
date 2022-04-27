var acc = document.getElementsByClassName("accordion");
      var i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }

      function onHome() {
        document.getElementById("home").style.display = 'none';
        document.getElementById("sobre").style.display = 'block';
        document.getElementById("menu-ref").style.display = 'none';
        document.getElementById("menu-lupa").style.display = 'none';
      }

      function onSobre() {
        document.getElementById("home").style.display = 'block';
        document.getElementById("sobre").style.display = 'none';
        document.getElementById("menu-ref").style.display = 'block';
        document.getElementById("menu-lupa").style.display = 'block';
      }

      $(document).ready(function() {
        $('#subir').click(function(){
          $('html, body').animate({scrollTop:0}, 'slow');
          return false;
        });
      });