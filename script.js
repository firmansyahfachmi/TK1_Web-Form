var test = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '');
function addData(el) {
    var ele = document.getElementsByName('gender');
    for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            //console.log(ele[i].value);
            ele[i].setAttribute('checked', true);
    }
    console.log($('input[type=file]').val());
    var table = document.getElementById('users');
    var tr = table.insertRow();
    el.form.querySelectorAll("input:not([type=radio])" + ",textarea"+ ",input[name=gender]:checked").forEach(function(el) {
      var cell = tr.appendChild(document.createElement('td'));
      cell.textContent = el.value;
    });
}

