const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1
//path: Get/ ใช้สำหรับส่งข้อความกลับไปหา client
app.get('/users',(req,res)=>{
    res.json(users);
});

//path:Post/user ใช้สำหรับสร้างข้อมูล user ใหม่
app.post('/user',(req,res)=>{
    let user = req.body;
    user.id = counter
    counter += 1
    users.push(user);
    res.json({
        message: 'Create new user successfully',
        user: user
    });
})
//path:Put /user/:id ใช้สำหรับแสดงข้อมูล user ตาม id ที่ระบุ
app.put('/user/:id',(req,res)=>{
    let id = req.params.id;
    let updateUsers = req.body;
    //หา user จาก id ที่ระบุ
    let selectedIndex = users.findIndex(user =>user.id == id);
    //แก้ไขข้อมูล user ที่หาเจอ
    users[selectedIndex].firstname = updateUsers.firstname || users[selectedIndex].firstname 
    users[selectedIndex].lastname = updateUsers.lastname || users[selectedIndex].lastname
    
    res.json({
        message: 'Update user successfully',
        data:{
        user: updateUsers ,
        indexUpdated: selectedIndex
        }
    })
})
    //users ที่ update ใหม่ update กลับไปใน users เดิม


    //path:delete /user/:id ใช้สำหรับลบข้อมูล user ตาม id ที่ระบุ
    app.delete('/user/:id',(req,res)=>{
        let id = req.params.id;
        //หา user จาก id ที่ระบุ
        let selectedIndex = users.findIndex(user =>user.id == id);
        //ลบ user ที่หาเจอ
        users.splice(selectedIndex,1);
        res.json({
            message: 'Delete user successfully',
            indexDeleted: selectedIndex
        })
    })  
app.listen(port,(req,res)=>{
    console.log('Http Server is running on port '+port);
});