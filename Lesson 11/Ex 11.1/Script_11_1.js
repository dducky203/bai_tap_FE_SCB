// Hàm để check tất cả các checkbox có id là box
function checkAll() {
    var inputs = document.querySelectorAll('#box');
    for(var i = 0; i < inputs.length; i++) {
      inputs[i].checked = true;
    }
  }
  
  // Hàm để uncheck tất cả các checkbox có id là box
  function uncheckAll() {
    var inputs = document.querySelectorAll('#box');
    for(var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
  }
  