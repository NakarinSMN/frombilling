const locationData = [
  {
    location: "งานโอน [รถยนต์]",
    isPinned: false,
    items: [
      { name: "• นนทบุรี", dis:"ไม่รวมใบเสร็จ", price: 1300 },
      { name: "• กรุงเทพฯ", dis:"ไม่รวมใบเสร็จ", price: 1300 },
    ],
  },

  {
    location: "งานโอน [รถจักรยานยนต์]",
    isPinned: false,
    items: [
      { name: "• นนทบุรี", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ", dis:"", price: 1300 },

    ],
  },

  {
    location: "งานโอน และ ย้ายเข้า [รถยนต์]",
    isPinned: false,
    items: [
      { name: "• นนทบุรี", dis:"ไม่รวมใบเสร็จ", price: 1500 },
      { name: "• กรุงเทพฯ", dis:"ไม่รวมใบเสร็จ", price: 1300 },
    ],
  },

  {
    location: "งานโอน และ ย้ายเข้า [รถจักรยานยนต์]",
    isPinned: false,
    items: [
      { name: "• นนทบุรี", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ", dis:"", price: 1300 },
    ],
  },

  {
    location: "งานจดใหม่  [รถยนต์]",
    isPinned: false,
    items: [
      { name: "• นนทบุรี", dis:"ไม่รวมใบเสร็จ", price: 1300 },
      { name: "• กรุงเทพฯ", dis:"ไม่รวมใบเสร็จ", price: 1300 },
    ],
  },

  {
    location: "งานจดใหม่  [รถจักรยานยนต์]",
    isPinned: false,
    items: [
      { name: "• นนทบุรี", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ", dis:"", price: 1300 },
    ],
  },

  {
    location: "[แจ้ง] เปลี่ยนสี",
    isPinned: false,
    items: [
      { name: "• [เปลี่ยน] สีรถยนต์", dis:"", price: 1500 },
      { name: "• [เปลี่ยน] สีรถจักรยานยนต์", dis:"", price: 800 },
      { name: "• [เปลี่ยน] สีรถ Big Bike", dis:"", price: 800 },
    ],
  },

  {
    location: "[แจ้ง]",
    isPinned: false,
    items: [
      { name: "• [แจ้ง] เสริมข้าง", dis:"", price: 1800 },
      { name: "• [แจ้ง] หลังคา", dis:"", price: 1800 },
      { name: "• [แจ้ง] เสริมแหนบ", dis:"", price: 2500 },
      { name: "• [แจ้ง] ติดตังแก๊ส", dis:"", price: 1500 },
      { name: "• [แจ้ง] หยุดใช้ชั่วคราว", dis:"", price: 1300 },
      { name: "• [แจ้ง] หยุดใช้ชั่วตลอดไป", dis:"", price: 1300 },

    ],
  },

  {
    location: "[เปลี่ยน]",
    isPinned: false,
    items: [
      { name: "• [เปลี่ยน] เครื่อง", dis:"", price: 1500 },
      { name: "• [เปลี่ยน] ลักษณะ", dis:"เอารถเข้าตรวจ", price: 1500 },
      { name: "• [เปลี่ยน] เชื้อเพลิง", dis:"เอารถเข้าตรวจ", price: 1500 },
    ],
  },

  {
    location: "[ยกเลิก]",
    isPinned: false,
    items: [
      { name: "• [ยกเลิก] เสริมข้าง", dis:"", price: 1800 },
      { name: "• [ยกเลิก] หลังคา", dis:"", price: 1800 },
      { name: "• [ยกเลิก] แก๊ส", dis:"", price: 1500 },
      { name: "• [ยกเลิก] แก๊ส", dis:"(รถตู้)", price: 1800 },

    ],
  },


  {
    location: "ขอแผ่นป้าย",
    isPinned: false,
    items: [
      { name: "• นนทบุรี", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.1)", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.2)", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.3)", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.4)", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.5)", dis:"", price: 1300 },
    ],
  },

  {
    location: "เปลี่ยนข้อมูลในเล่ม",
    isPinned: false,
    items: [
      { name: "• นนทบุรี", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.1)", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.2)", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.3)", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.4)", dis:"", price: 1300 },
      { name: "• กรุงเทพฯ (สขพ.5)", dis:"", price: 1300 },
    ],
  },

  {
    location: "ตรวจนอก",
    isPinned: false,
    items: [
      { name: "• รถยนต์ทั่วไป",  dis:"", price: 1300 },
      { name: "• รถจักรยานยนต์ทั่วไป",  dis:"", price: 1300 },
      { name: "• รถ Big Bike",  dis:"", price: 1300 },
      { name: "• รถ Supercar",  dis:"", price: 1300 },
      { name: "• รถ Sport",  dis:"", price: 1300 },
    ],
  },





];
