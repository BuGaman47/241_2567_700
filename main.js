// string , number,boolean,object.array
//let firstname = 'john';
//console.log(firstname)

// number
/*
let age = 25;
let height = 5.9;

//boolean
let isMarried = false
let firstname = 'xxxx';
idcard = '5678';
console.log('my name is ',firstname,'and I am ',age,'years old.');
*/
//let number1 ='4';
//let number2 = '8';

//let result = number1 + number2 ;
//
//console.log('new number',result)
/*
let number1 = 5;
let number2 = 3;

let condition1 = number1 != number2 ;
console.log('resuit of condition is',condition1);
*/
/*
let number1 = 5;
let number2 = 3;

if (number1 >= number2) {
        console.log('this is if')
}else{
    console.log('this is else')
}
*/
/*
let number1 = 5;
let number2 = 5;

if (number1 != number2) {
        console.log('this is if');
} else if (number1 == number2){
    console.log('this is else if')
}
else{
    console.log('this is else')
}

if (jjj){


}
*/
/*
let score = prompt('enter your score');
console.log('your score is',score);
//if - else condition
if (score >= 80){
    console.log('you are grade A')
} else if (score >= 70){
    console.log('you are grade B')
} else if (score >= 60){
    console.log('you are grade C')
} else if (score >= 50){
    console.log('you are grade D')
}else {
    console.log('you are grade F')
}
*/
/*
&& และ
|| หรือ
! not หรือ ไม่
*/
/*
let number1 = 5;
let number2 = 8;
// true && true
//let condition = number1 >= 3 && number2 >= 5;
let condition = number1 >= 3 || number2 >= 10;
console.log('result of condition1',condition);

let age = 30;
let gender = 'male';

// true && true = true
if (age >= 20 && gender == 'male') {
    console.log('you are male adult');
}
*/
/*
let number = 21;

if (!(number % 2 == 0)){
    console.log('your number is even number');
}
*/
/*
let counter = 0;

while (counter < 10) {
    console.log('while loop ');
    counter = counter + 1;
}


for (let counter = 0; counter < 10; counter = counter + 1){
    console.log('for loop');
}
*/  
/*
array
*/
/*
let age1 = 20; 
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1,age2,age3,age4);
*/
/*
let ages = [20,30,40,50];
console.log('new age',ages[2]);
console.log('age list',ages);
//แทนที่ค่าใน array
ages = [45,50]
console.log('new age',ages);
//ต่อค่าใน array
ages.push(55);
console.log('new age',ages);
//ลบค่าใน array
ages.pop();
console.log('new age',ages);
*/
/*
let ages = [30,35,40,45,50];

if (ages.includes(40)){
    console.log('you have to be 40');
}
*/

/*
let ages = [90,60,40,45,50];
console.log(ages);
ages.sort();
console.log(ages);

let name_list = ['john','jane','joe','james'];
name_list.push('jim');
console.log(names_list.lenght);
console.log(names_list[0]);
console.log(names_list[1]);
console.log(names_list[2]);

for (let index = 0; index < name_list.lenght; index++){
    console.log('name',name_list[index]);
}
*/
/*
let student = [{
    name : 'weeeeee',
    age : 100,
    grade : 'a'
},{
    name : 'teeeeee',
    age : 90,
    grade : 'B'
}];

for (let index = 0; index < student.lenght; index++){
    console.log('name',student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].grade);
}
*/
/*
let scores1 = 50
let scores2 = 90
let grades = ''
*/
/*
function calulateGrade(scores){
    if (scores >= 80){
        grades = 'A'
    } else if (scores >= 70){
        grades = 'B'
    } else if (scores >= 60){
        grades = 'C'
    } else if (scores >= 50){
        grades = 'D'
    } else {
        grades = 'F'
    }
    return grades
}
let student1 = calulateGrade(scores1)
let student2 = calulateGrade(scores2)
console.log('grade:',student1,student2)
*/
/*
let scores = [10,20,30,40,50,60,70,80,90,100];
for (let index = 0; index < scores.lenght; index++){
    console.log(scores[index]);
}
scores = scores.map((s) => {
    return s * 2 ;
});

scores.forEach((s)=> {
    console.log('new score:',s)
})
*/
/*
 let scores = [10,20,30,40,];
 let newScortes = []

for (let index = 0; index < scores.lenght; index++){
    console.log('Scores'scores[index]);

let newScore = scores.filter((s) => {
    return s >= 20;
}

newScortes.forEach((ns) => {
    console.log('new score:',ns)
})

*/







/*
object function
*/
/*
let students = [
    {
        name : 'john',
        age : 90,
        grade : 'A'
    },
    {
        name : 'jane',
        age : 75,
        grade : 'B'
    },
    {
        name : 'joe',
        age : 60,
        grade : 'C'
    }
]
let student = students.find((s) => {
    if (s.name == 'john'){
        return true
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
})

let highscore_student = students.filter((s) => {
    if (s.age >= 80) {
        return true
    }
})


console.log('student',student)
console.log('highscore_student',highscore_student)
*/
