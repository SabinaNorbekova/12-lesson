// name va departments (array) xususiyatlariga ega bo'lgan Universitet nomli class yarating. 
// Ushbu classga yangi bo'lim(department) qo'shish, bo'limni olib tashlash va barcha bo'limlarni 
// ko'rsatish metodlarini yozing. Universitet classidan object yarating, 5ta yangi bo'lim qo'shing 
// va 2 ta bo'limni olib tashlang. Qolgan bo'limlar ro'yxatini chiqaring.
class Universety{
    constructor(name){
        this.name=name
        this.departments=[]
    }
    addDepartment(dep){
        if(!this.departments.includes(dep)){
            this.departments.push(dep)
            console.log(`${dep} qo'shildi`)
        }else{
            return "Xatolik. Bu department allaqachon mavjud"
        }
    }
    remDepartment(depart){
        if(this.departments.includes(depart)){
            this.departments = this.departments.filter(d => d !== depart)
            console.log( `${depart} o'chirildi`)
        }else{
            return "Xatolik. Bunday department mavjudmas"
        }
    }
    showDepartment(){
        for(let i=0;i<this.departments.length; i++){
            console.log(this.departments[i])
        }
    }
}
let d1=new Universety("TATU")
d1.addDepartment("Oliy matem")
d1.addDepartment("Dasturlash")
d1.addDepartment("Fizika")
d1.addDepartment("Ingliz tili")
d1.addDepartment("Engineering")
d1.remDepartment("Fizika")
d1.remDepartment('Ingliz tili')
d1.showDepartment()