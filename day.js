

function calculateDays() {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);

    Swal.fire({
        title: "สำเร็จ",
        icon: "success",
        color: "#000",
        background: "#eee",

    });
    
    if (startDate && endDate && endDate > startDate) {
        const difference = endDate - startDate;
        const days = difference / (1000 * 60 * 60 * 24);
        const nums = 645.21 / 365 * days + 0.2;
        const prices = nums.toFixed(2);
        const numm = 1182.35 / 365 * days + 0.2;
        const pricem = numm.toFixed(2);
        const numl = 967.28 / 365 * days + 0.2;
        const pricel = numl.toFixed(2);

        const numcys = 161.57 / 365 * days + 0.2;
        const pricecys = numcys.toFixed(2);
        const numcym = 323.14 / 365 * days + 0.2;
        const pricecym = numcym.toFixed(2);
        const numcyl = 430.14 / 365 * days + 0.2;
        const pricecyl = numcyl.toFixed(2);
        const numcyk = 645.21 / 365 * days + 0.2;
        const pricecyk = numcyk.toFixed(2);


        document.getElementById("resultday").innerText = `${days} วัน`;
        document.getElementById("resultp").innerText = `${prices} บาท`;
        document.getElementById("results").innerText = `${pricem} บาท`;
        document.getElementById("resultd").innerText = ` ${pricel} บาท`;
        document.getElementById("resultcyp").innerText = `${pricecys} บาท`;
        document.getElementById("resultcys").innerText = `${pricecym} บาท`;
        document.getElementById("resultcyd").innerText = ` ${pricecyl} บาท`;
        document.getElementById("resultcyk").innerText = ` ${pricecyk} บาท`;


    } else {
        
        Swal.fire({
            title: "มีข้อผิดพลาด",
            text: "กรองวันให้ถูกต้อง",
            icon: "error",
            color: "#000",
            background: "#eee",

        });
    }
}


function calculateDate() {
    const daysInput = document.getElementById("daysInput").value;
    const resultDiv = document.getElementById("resultm");
    Swal.fire({
        title: "สำเร็จ",
        icon: "success",
        color: "#000",
        background: "#eee",

    });

    if (daysInput) {
        const daysInput = document.getElementById("daysInput").value;
        const nums = 645.21 / 365 * daysInput + 0.2;
        const resultu = nums.toFixed(2);
        const numm = 1182.35 / 365 * daysInput + 0.2;
        const resultj = numm.toFixed(2);
        const numl = 967.28 / 365 * daysInput + 0.2;
        const resultk = numl.toFixed(2);

        const sumcys = 161.57 / 365 * daysInput + 0.2;
        const spricecys = sumcys.toFixed(2);
        const sumcym = 323.14 / 365 * daysInput + 0.2;
        const spricecym = sumcym.toFixed(2);
        const sumcyl = 430.14 / 365 * daysInput + 0.2;
        const spricecyl = sumcyl.toFixed(2);
        const sumcyk = 645.21 / 365 * daysInput + 0.2;
        const spricecyk = sumcyk.toFixed(2);

        
        document.getElementById("resultu").innerText = `${resultu} บาท`;
        document.getElementById("resultj").innerText = `${resultj} บาท`;
        document.getElementById("resultk").innerText = ` ${resultk} บาท`;

        document.getElementById("sumcyn").innerText = `${spricecys} บาท`;
        document.getElementById("sumcyg").innerText = `${spricecym} บาท`;
        document.getElementById("sumcyj").innerText = ` ${spricecyl} บาท`;
        document.getElementById("sumcyh").innerText = ` ${spricecyk} บาท`;

    } else {
        
        Swal.fire({
            title: "มีข้อผิดพลาด",
            text: "กรอกข้อมูลให้ถูกต้อง",
            icon: "error",
            color: "#000",
            background: "#eee",

        });
    }



    
    if (daysInput === "") {
        resultDiv.textContent = "--";
        return;
    }
    
    const today = new Date();
    today.setDate(today.getDate() + parseInt(daysInput));

    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    resultDiv.textContent = `วันนี้ ถึง ${day}/${month}/${year}`;


}

