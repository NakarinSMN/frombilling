function sumprice() {

    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const num3 = parseFloat(document.getElementById("num3").value) || 0;
    const num4 = parseFloat(document.getElementById("num4").value) || 0;
    const num5 = parseFloat(document.getElementById("num5").value) || 0;
    const num6 = parseFloat(document.getElementById("num6").value) || 0;
    const num7 = parseFloat(document.getElementById("num7").value) || 0;



    // คำนวณผลรวม
    const sum = num1 + num2 + num3 + num4 + num5 + num6 + num7;

    // แสดงผลลัพธ์
    document.getElementById("result").innerText = "" + (sum.toLocaleString('th-TH'));
}


function sumpriceg() {

    const num8 = document.getElementById("num8").value;

    if (num8) {

        const num1 = parseFloat(document.getElementById("num1").value) || 0;
        const num2 = parseFloat(document.getElementById("num2").value) || 0;
        const num3 = parseFloat(document.getElementById("num3").value) || 0;
        const num4 = parseFloat(document.getElementById("num4").value) || 0;
        const num5 = parseFloat(document.getElementById("num5").value) || 0;
        const num6 = parseFloat(document.getElementById("num6").value) || 0;
        const num7 = parseFloat(document.getElementById("num7").value) || 0;
        const num8 = parseFloat(document.getElementById("num8").value) || 0;
        const sum = num1 + num2 + num3 + num4 + num5 + num6 + num7 - num8;
        document.getElementById("resultsum").innerText = "" + (sum.toLocaleString('th-TH'));


    } else {

        Swal.fire({
            title: "มีข้อผิดพลาด",
            text: "กรอกส่วนลดถ้าหาไม่มีให้ใส่ [เลข 0]",
            icon: "error",
            color: "#0f2a1d",
            background: "#eee",

        });

    }




}