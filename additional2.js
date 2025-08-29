// 2.Foydalanuvchi prompt orqali bank ish kuni kiritadi (masalan, 60). Siz foydalanuvchi kiritgan bank 
// ishkunidan kelib chiqib yilning qaysi oy va qaysi sanasida aytilgan kun kelishini hisoblovchi funksiya yozing. 
// Bank ish kunida shanba va yakshanba dam olish kuni sifatida hisoblanmaydi.
function findDate(num) {
    let yearStart=new Date("2025-01-01")
    yearStart.setDate(yearStart.getDate()+(num-1))
    return yearStart.toDateString()
}
console.log(findDate(60))