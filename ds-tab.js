function openDsTab(evt, tabName) {
    var i, dstabcontent, dstablinks;

    // ซ่อนเนื้อหาทุกแท็บ
    dstabcontent = document.getElementsByClassName("dstabcontent");
    for (i = 0; i < dstabcontent.length; i++) {
        dstabcontent[i].style.display = "none";
    }

    // นำ active class ออกจากแท็บทั้งหมด
    dstablinks = document.getElementsByClassName("dstablinks");
    for (i = 0; i < dstablinks.length; i++) {
        dstablinks[i].className = dstablinks[i].className.replace(" active", "");
    }

    // แสดงแท็บที่เลือกและเพิ่ม active class
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
