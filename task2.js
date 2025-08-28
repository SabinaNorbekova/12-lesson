// x va y koordinatalarni qabul qiluvchi Point nomli class yozing. 
// Shuningdek ushbu class ikki nuqta orasidagi masofani hisoblovchi distance nomli static metodga ega bo'lsin.
class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const dx=a.x-b.x
        const dy=a.y-b.y
        return Math.sqrt(dx*dx+dy*dy)
    }
}
let p2 = new Point(9, 8);
let p1 = new Point(5, 5);
console.log(Point.distance(p1, p2));