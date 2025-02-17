const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;
app.use(bodyParser.json());

let users = [];
let counter = 1 

app.get('/testdb', (req, res) => {
   let conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password : 'root',
        database: 'webdb',
        port: 8830
    }).then((conn) => {
        conn.query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0])
        })
        .catch((error) => {
            console.log('error', error.message)
            res.status(500).json({error: 'Error fetching users'})
            })
        })
})


// path = GET /users สำหรับ get user ทั้งหมดที่บันทีกไว้
app.get('/users', (req, res) => {
    const filterUsers = users.map(user => {//เก็บข้อมูลที่ต้องการเเสดง
        return{
            id: user.id,//เเสดงเฉพาะ id
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: user.firstname + ' ' + user.lastname
        }
})
    res.json(filterUsers);
})


// path = POST /user ใช้สำหรับการสร้างข้อมูล user ใหม่บันทึกเข้าไป
app.post('/users', (req, res) => {
    let user = req.body;
    user.id = counter //เพิ่ม id ให้ user
    counter += 1
    users.push(user);//เพิ่ม user ใหม่เข้าไปใน array
    res.json({
        message: 'Create new user successfully',
        user : user
    });
})


// path = GET /users สำหรับ get user ทั้งหมดที่บันทีกไว้
app.get('/users/: id', (req, res) => {
    let id = req.params.id;
   //ค้นหา user หรือ index ที่ต้องการดึงข้อมูล
    let selectedUser = users.find(user => user.id == id);

    res.json(users[selectedIndex]);
})


// path:PUT /users/:id ใช้สำหรับเเก้ไขข้อมูล user โดยใช้ id เป็นตัวระบุ
// get post put ใช้ได้หมด
app.put('/users/:id', (req, res) => {
    let id = req.params.id; 
    let updateUser = req.body;
    let selectedIndex = users.findIndex(user => user.id == id );
    
        users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
        users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
        users[selectedIndex].age = updateUser.age || users[selectedIndex].age;
        users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender
    
    res.json({
        message: 'Update user successfully',
        data:{
            user: updateUser,
            indexUpdated : selectedIndex
        }
    }) 
    res.send(id) 
})



//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id เป็นตัวระบุ
app.delete('/users/:id', (req, res) => {
    let id = req.params.id;
    //หา index ของ user ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);

    //ลบ user ที่เจอ
    users.splice(selectedIndex, 1);
    res.json({
        message: 'Delete user successfully',
        indexDeleted: selectedIndex
    })
 })
app.listen(port, (req,res) => {
    console.log('Http Server is running on port' +port);
});


//cd change directory
//ls list
//pwd print working directory
// cd.. กลับไปที่ directory ก่อนหน้า go back 
// exit ออกจาก terminal
//docker stop <container id> หยุด container
//docker system prune -a ลบ container ทั้งหมด
//docker -compose up รัน container
//docker-compose down หยุด container