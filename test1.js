/*
let name = prompt("กรุณากรอกชื่อ")
let age = prompt("กรุนากรอกอายุ")

console.log("สวัสดี",name,"คุณมีอายุ",age)
*/
/*
let c = true 
let firstname = "doo"
let number = 14
let student ={names : "ku"}
let score = [ 65,25,70,23]
console.log(firstname,number,c,student.names,score[1])
*/
let scores =[10,20,30,40,50,60,70,80,90,100]
let newScortes = []
let students =[
    { name : 'fater',
        score : 85,
        age : 20
    },
    {name : "nong cake",
        score : 101,
        age : 7
    },
    {name : "bubu",
        score : 20,
        age : 20
    }
]
let student = students.find((s) =>{
    if (s.name == "bubu")
        return true
})
    let newScore = scores.filter((s) => {
        return s >= 10;
    }
    let doublescore_student = students.map((s) => {
        s.score = s.scores * 2
    })
console.log(newScore)
console.log(student)