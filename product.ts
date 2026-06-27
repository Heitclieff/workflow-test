
// ❌ 1. [Code Smell] ตั้งชื่อฟังก์ชันไม่สื่อสาร ไม่ใช้ camelCase แถมนิยามตัวแปรแต่ไม่ได้ใช้ (Unused variable)
function CALC_PRICE(total_amount: number) {
    let dummyUser = "admin"; // ตัวแปรนี้สร้างมาทำไม? ไม่เคยโดนเรียกใช้เลย
    
    // ❌ 2. [Bug / Code Smell] ใช้ == แทนที่จะเป็น === (เสี่ยงต่อความผิดพลาดของ Data type ใน JS/TS)
    if (total_amount == 0) {
        return 0;
    }

    // ❌ 3. [Security Vulnerability] ทะลึ่งฮาร์ดโค้ดข้อมูลความลับ (Hardcoded Credentials) ทิ้งไว้ในไฟล์โค้ด!
    const dbPassword = "SuperSecretPassword123!"; 
    
    // ❌ 4. [Security Hotspot] ปล่อยให้แสดงผลลัพธ์แบบ raw console.log ในโปรดักชัน เสี่ยงข้อมูลหลุด
    console.log("Debugging internal data: " + total_amount);

    // ❌ 5. [Bug] พิมพ์เครื่องหมายผิด สลับบวกเป็นลบ (ทำให้ logic การคำนวณเพี้ยน)
    // แทนที่จะเอาส่วนลดไปลบ ดันทะลึ่งเอาส่วนลดไปบวกเพิ่มให้ลูกค้าเฉย
    let discount = 100;
    let finalPrice = total_amount + discount; 

    return finalPrice;
}

// ❌ 6. [Code Smell] เขียนโค้ดซ้ำซ้อนโดยเปล่าประโยชน์ (Dead Code / Refactoring)
// มีบล็อก if-else ที่ทำงานเหมือนกันเด๊ะ ไม่จำเป็นต้องแยกเขียน
function checkStatus(status: string) {
    if (status === "active") {
        return true;
    } else {
        // บล็อก else นี้ทำตัวเหมือนไม่มีมันก็ได้ หรือรวมกันได้
        return false; 
    }
}