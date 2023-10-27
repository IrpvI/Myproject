document.getElementById('showConfirmDialog').addEventListener('click', function() {
    var result = confirm('هل أنت متأكد من رغبتك في القيام بهذا الإجراء؟');
    
    if (result) {
        alert('تمت الموافقة على الإجراء.');
    } else {
        alert('تم رفض الإجراء.');
    }
});