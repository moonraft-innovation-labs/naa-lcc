// For the humburger menu and close icon
document.getElementById("header_wrapper_mobile_toggle").onclick = function () {
    document.getElementById("header_wrapper_mobile").classList.toggle("menu_toggle");
    document.getElementById("main").classList.toggle("toggle_main");
  };
  
  // For the header accordian to open and close
  var arrow = document.getElementsByClassName("main-nav_wrapper");
  var dropdown = document.getElementsByClassName("main-nav__dropdown");
  
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].onclick = function() {
          var setClasses = !this.classList.contains('active');
          setClass(arrow, 'active', 'remove');
          setClass(dropdown, 'show', 'remove');
          
             if (setClasses) {
              this.classList.toggle("active");
              this.nextElementSibling.nextElementSibling.classList.toggle("show");
          }
      }
  }
  
  function setClass(element, className, fnName) {
      for (var i = 0; i < element.length; i++) {
        element[i].classList[fnName](className);
      }
  }