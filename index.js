setTimeout(function(){
    location.reload();  
    
}, 30*60*1000);



function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // ซ่อนเนื้อหาทุกแท็บ
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // นำ active class ออกจากแท็บทั้งหมด
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // แสดงแท็บที่เลือกและเพิ่ม active class
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
