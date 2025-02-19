// ฟังก์ชันเก็บข้อมูลการปักหมุดใน localStorage
function savePinnedLocations() {
  const pinnedLocations = locationData.map((location) => location.isPinned || false);
  localStorage.setItem('pinnedLocations', JSON.stringify(pinnedLocations));
}

// ฟังก์ชันเก็บตำแหน่งของการ์ดใน localStorage
function saveCardOrder() {
  const cardOrder = locationData.map((location) => ({
    isPinned: location.isPinned,
    originalOrder: location.originalOrder || null
  }));
  localStorage.setItem('cardOrder', JSON.stringify(cardOrder));
}

// ฟังก์ชันโหลดสถานะการปักหมุดจาก localStorage
function loadPinnedLocations() {
  const savedPinnedLocations = localStorage.getItem('pinnedLocations');
  if (savedPinnedLocations) {
    const pinnedLocations = JSON.parse(savedPinnedLocations);
    locationData.forEach((location, index) => {
      location.isPinned = pinnedLocations[index] || false;
      if (location.isPinned && location.originalOrder === undefined) {
        // ตั้งค่า originalOrder เมื่อปักหมุดครั้งแรก
        location.originalOrder = index;
      }
    });
  }
}

// ฟังก์ชันโหลดตำแหน่งของการ์ดจาก localStorage
function loadCardOrder() {
  const savedCardOrder = localStorage.getItem('cardOrder');
  if (savedCardOrder) {
    const cardOrder = JSON.parse(savedCardOrder);
    cardOrder.forEach((order, index) => {
      const location = locationData[index];
      location.isPinned = order.isPinned;
      location.originalOrder = order.originalOrder || index;
    });

    // จัดลำดับการ์ดใหม่โดยให้การ์ดที่ถูกปักหมุดอยู่ด้านบนสุด
    locationData.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));
  }
}

// ค้นหา container หลัก
const locationsContainer = document.querySelector(".locations-container");
const searchBox = document.getElementById("searchBox");

// ฟังก์ชันแสดงการ์ดสถานที่
function displayLocations(data) {
  locationsContainer.innerHTML = ""; // ล้างข้อมูลก่อนแสดงใหม่

  // จัดลำดับการ์ดให้การ์ดที่ปักหมุดขึ้นมาก่อน
  data.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));

  data.forEach((location, index) => {
    // สร้าง container สำหรับแต่ละ location
    const locationCard = document.createElement("div");
    locationCard.className = "location-card";

    // เพิ่มปุ่ม Pin
    const pinButton = document.createElement("button");
    pinButton.className = "pin-btn";
    pinButton.innerText = location.isPinned ? "ยกเลิกปักหมุด" : "ปักหมุด";
    pinButton.style.backgroundColor = location.isPinned ? "#ff5722" : "#007bff"; // เปลี่ยนสีปุ่ม
    pinButton.addEventListener("click", () => togglePin(location, locationCard, pinButton, index));

    locationCard.appendChild(pinButton);

    // สร้างส่วนของภาพ (หรือ Icon)
    const locationIcon = document.createElement("div");
    locationIcon.className = "item-image";
    locationIcon.innerHTML = `
      <svg class="svgIcond" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clip-rule="evenodd"/>
      </svg>
    `;
    locationCard.appendChild(locationIcon);

    // ชื่อสถานที่
    const locationTitle = document.createElement("h2");
    locationTitle.innerText = location.location;
    locationCard.appendChild(locationTitle);

    // สร้างรายการสินค้า
    const itemList = document.createElement("div");
    itemList.className = "item-list";

    location.items.forEach((item) => {
      const itemCard = document.createElement("div");
      itemCard.className = "item-card";
    
      // สร้าง div แยกให้ปุ่มลูกศรและชื่ออยู่ในแถวเดียวกัน
      const toggleContainer = document.createElement("div");
      toggleContainer.className = "toggle-container";
    
      const itemName = document.createElement("p");
      itemName.innerText = item.name;
    
      // ปุ่มลูกศรแสดง/ซ่อนรายละเอียด
      const toggleButton = document.createElement("button");
      toggleButton.className = "toggle-details";
      toggleButton.innerText = "▼";
      toggleButton.addEventListener("click", () => {
        const details = itemCard.querySelector(".item-details");
        const isHidden = details.style.display === "none";
        details.style.display = isHidden ? "block" : "none";
        toggleButton.innerText = isHidden ? "▲" : "▼";
      });
    
      toggleContainer.appendChild(itemName);
      toggleContainer.appendChild(toggleButton);
    
      // สร้างส่วนรายละเอียดเพิ่มเติม
      const detailsDiv = document.createElement("div");
      detailsDiv.className = "item-details";
      detailsDiv.style.display = "none";
      detailsDiv.innerHTML = `
        <p>${item.dis}</p>
        <p>${item.price.toLocaleString()} บาท</p>
      `;
    
      itemCard.appendChild(toggleContainer);
      itemCard.appendChild(detailsDiv);
      itemList.appendChild(itemCard);
    });
    

    locationCard.appendChild(itemList);
    locationsContainer.appendChild(locationCard);
  });
}

// ฟังก์ชัน toggle การปักหมุด
function togglePin(location, locationCard, pinButton, index) {
  location.isPinned = !location.isPinned; // เปลี่ยนสถานะการปักหมุด

  // ปรับสีปุ่ม
  pinButton.style.backgroundColor = location.isPinned ? "#ff5722" : "#007bff";
  pinButton.innerText = location.isPinned ? "ยกเลิกปักหมุด" : "ปักหมุด";

  if (location.isPinned) {
    // เมื่อปักหมุดให้ย้ายการ์ดขึ้นไปข้างบน
    locationCard.style.order = -1;
  } else {
    // เมื่อยกเลิกการปักหมุด คืนค่า order กลับไปที่ค่าเดิม
    locationCard.style.order = location.originalOrder !== undefined ? location.originalOrder : '';
  }

  // บันทึกสถานะการปักหมุดและตำแหน่งการ์ด
  savePinnedLocations();
  saveCardOrder();
}

// ฟังก์ชันค้นหาข้อมูล
function filterLocations(query) {
  const lowerCaseQuery = query.toLowerCase(); // แปลงคำค้นหาเป็นตัวพิมพ์เล็ก
  return locationData.filter((location) => {
    // ตรวจสอบว่าชื่อสถานที่ตรงกับคำค้นหา
    const matchesLocation = location.location.toLowerCase().includes(lowerCaseQuery);

    // ตรวจสอบว่าชื่อสินค้าใดใน location ตรงกับคำค้นหา
    const matchesItems = location.items.some((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery)
    );

    return matchesLocation || matchesItems; // แสดงถ้าตรงกับสถานที่หรือสินค้าก็ได้
  });
}

// เพิ่ม Event Listener สำหรับช่องค้นหา
searchBox.addEventListener("input", (event) => {
  const query = event.target.value; // ค่าที่ป้อนในช่องค้นหา
  const filteredData = filterLocations(query); // กรองข้อมูล
  displayLocations(filteredData); // แสดงผลข้อมูลที่กรอง
});

// โหลดสถานะการปักหมุดและตำแหน่งจาก localStorage
loadPinnedLocations();
loadCardOrder();

// แสดงข้อมูลเริ่มต้นทั้งหมด
displayLocations(locationData);




  function updateDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // เดือนเริ่มจาก 0
    const year = now.getFullYear() + 543;

    const formattedDate = `ราคาอัปเดต ณ วันที่ ${day}/${month}/${year} เวลา ${hours}:${minutes}:${seconds}`;
    document.getElementById('date-time').textContent = formattedDate;
  }
  setInterval(updateDateTime, 1000); // อัปเดตทุก 1 วินาที
