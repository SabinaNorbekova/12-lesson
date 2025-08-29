// createOne // createMany // updateOne // updateMany // findAll // findOne // deleteOne // deleteMany
class Person {
    constructor(name, second, age, profession) {
        this.name = name
        this.second = second
        this.age = age
        this.profession = profession
    }
}
class DataBasePerson {
    constructor() {
        this.dataBase = []
    }
    createOne(obj) {
        let found = this.dataBase.find(item => item.name === obj.name)
        if (found) {
            return `Xatolik! ${obj.name} allaqachon mavjud`
        }
        this.dataBase.push(obj)
        return `${obj.name} qo'shildi`
    }
    createMany(...objs) {
        let results = []
        for (let obj of objs) {
            let found = this.dataBase.find(item => item.name === obj.name)
            if (found) {
                results.push(`Xatolik! ${obj.name} mavjud`)
            } else {
                this.dataBase.push(obj)
                results.push(`${obj.name} qo'shildi`)
            }
        }
        return results
    }
    updateOne(name, newObj) {
        let index = this.dataBase.findIndex(item => item.name === name)
        if (index === -1) {
            return `Xatolik! ${name} topilmadi`
        }
        this.dataBase[index] = newObj
        return `${name} yangilandi`
    }
    updateMany(list) {
        let results = []
        for (let { name, newObj } of list) {
            let index = this.dataBase.findIndex(item => item.name === name)
            if (index === -1) {
                results.push(`Xatolik! ${name} topilmadi`)
            } else {
                this.dataBase[index] = newObj
                results.push(`${name} yangilandi`)
            }
        }
        return results
    }
    findOne(name) {
        let found = this.dataBase.find(item => item.name === name)
        return found ? found : `Xatolik! ${name} topilmadi`
    }
    findAll() {
        return this.dataBase
    }
    deleteOne(name) {
        let index = this.dataBase.findIndex(item => item.name === name)
        if (index === -1) {
            return `Xatolik! ${name} topilmadi`
        }
        this.dataBase.splice(index, 1)
        return `${name} o'chirildi`
    }
    deleteMany(...names) {
        let results = []
        for (let name of names) {
            let index = this.dataBase.findIndex(item => item.name === name)
            if (index === -1) {
                results.push(`Xatolik! ${name} topilmadi`)
            } else {
                this.dataBase.splice(index, 1)
                results.push(`${name} o'chirildi`)
            }
        }
        return results
    }
}
const db = new DataBasePerson()
const obj1 = new Person("Elon", "Musk", 55, "Engineer")
const obj2 = new Person("Sabina", "Norbekova", 20, "Software Engineer")
const obj3 = new Person("Someone", "Some", 33, "Investor")
console.log(db.createOne(obj1))
console.log(db.createMany(obj2, obj3))
console.log(db.findOne("Elon"))
console.log(db.updateOne("Someone", new Person("Anyone", "Any", 33, "Full Stack Developer")))
console.log(db.deleteOne("Sabina"))
console.log(db.findAll())