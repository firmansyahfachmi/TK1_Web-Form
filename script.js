function addData(el) {
    var ele = document.getElementsByName('gender');
    for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            ele[i].setAttribute('checked', true);
    }
    if ($("#input-nama").val() == "" || $("#input-alamat").val() == "" || $('input[name="gender"]:checked').val() == "" || $("#input-tgl").val() == "" || $("#input-foto").val() == "" || $("#input-cv").val() == "" || $("#input-sertifikat").val() == "") {
      alert("Silakan isi semua field yang ada!");  
    }else{
      $("#users tbody").append('<tr> \
      <td>' + $("#input-nama").val() + '</td>\
      <td>' + $("#input-alamat").val() + '</td>\
      <td>' + $('input[name="gender"]:checked').val() + '</td>\
      <td>' + $("#input-tgl").val() + '</td>\
      <td>' + $("#input-foto")[0].files[0].name + '</td>\
      <td>' + $("#input-cv")[0].files[0].name + '</td>\
      <td>' + $("#input-sertifikat")[0].files[0].name + '</td>\</tr>');
    }
}