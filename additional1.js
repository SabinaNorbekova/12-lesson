// Foydalanuvchi o'z ish kunining boshlanish va tugash vaqtini kiritadi. 
// Siz bu ma'lumotlardan foydalangan holda u qancha vaqt ishlaganini (soat va daqiqalar ko'rinishida) 
// hisoblaydigan funksiyani yozing. Agar ishning tugash vaqti boshlanish vaqtidan oldin bo'lsa, 
// "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas" matnini qaytaring. Kirish ma'lumotlari: 
// Boshlanish va tugash vaqtlari formati: HH:MM
function calculateWorkingHours(str1, str2) {
    const timeRegex = /^(\d{1,2}):(\d{2})$/;
    const time1 = str1.match(timeRegex)
    const time2 = str2.match(timeRegex)
    if (!time1 || !time2) {
        "Xato: format HH:MM bo'lishi kerak"
    }
    let starthour = time1[1]
    let startmin = time1[2]
    let endhour = time2[1]
    let endmin = time2[2]
    if (endhour < starthour || endhour === starthour && endmin < startmin) {
        return `Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas`
    } else {
        let totalhours = endhour - starthour;
        let totalMins = endmin - startmin;
        if (totalMins < 0) {
            totalMins += 60;
            totalhours -= 1;
        }
        return `Ish vaqti: ${totalhours} soat ${totalMins} daqiqa`
    }
}
console.log(calculateWorkingHours("09:00", "17:30"));
console.log(calculateWorkingHours("10:00", "09:00")); 