// Berilgan ikkita JSON obyektida bir xil kalit-qiymat juftliklarini topadigan funksiyani yozing. 
// Natijada umumiy qiymatlar bilan kalit
function findCommonPairs(date1, date2) {
    let res = {}
    for (let key in date1) {
        if (date2.hasOwnProperty(key)) {
            if (typeof date1[key] === "object" && date1[key] !== null && typeof date2[key] === "object" && date2[key] !== null) {
                let rekursion = findCommonPairs(date1[key], date2[key])
                if (Object.keys(rekursion).length > 0) {
                    res[key] = rekursion
                }
            } else {
                if (date1[key] === date2[key]) {
                    res[key] = date1[key]
                }
            }
        }
    }
    return res
}
const jsonData1 = {
    user: {
        name: "Ali",
        age: 25,
        address: {
            city: "Tashkent",
            zip: "100000"
        }
    },
    active: true
};

const jsonData2 = {
    user: {
        name: "Ali",
        age: 30,
        address: {
            city: "Tashkent",
            zip: "200000"
        }
    },
    active: true
};
console.log(findCommonPairs(jsonData1, jsonData2));
// ```js
// Chiqish:
// {
//   user: {
//     name: "Ali"
//   },
//   active: true
// }```