const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();


const port = 8000;

app.use(bodyParser.json());
app.use(cors())

let users = [];
<<<<<<< HEAD
let conn = null;

// ฟังก์ชันเชื่อมต่อ MySQL
const initMySQL = async () => {
    conn = await mysql.createConnection({
=======
let conn = null

const initMysql = async () => {
    const conn = await mysql.createConnection({
>>>>>>> 933a11d (งานส่งไม่ขึ้น)
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8830
<<<<<<< HEAD
=======
    })
}
// path = GET /users สำหรับ get user ทั้งหมดที่บันทีกไว้
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0])
})



// path = POST /user ใช้สำหรับการสร้างข้อมูล user ใหม่บันทึกเข้าไป
app.post('/users', async (req, res) => {
    let user = req.body;
    user.id = counter //เพิ่ม id ให้ user
    counter += 1
    users.push(user);//เพิ่ม user ใหม่เข้าไปใน array
    res.json({
        message: 'Create new user successfully',
        user : user
>>>>>>> 933a11d (งานส่งไม่ขึ้น)
    });
};

<<<<<<< HEAD
// GET /users - ดึง Users ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
});
 
// POST /users - เพิ่ม Users ใหม่
app.post('/users', async (req, res) => { 
    try {
        let user = req.body;  
        const results = await conn.query('INSERT INTO users SET ?', user);
        res.json({
            message: 'Create user successfully', 
            data: results[0]
        })
    } catch (error) {
        console.error('error :', error.message);
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
=======

// path = GET /users สำหรับ get user ทั้งหมดที่บันทีกไว้
app.get('/users/: id', (req, res) => {
    let id = req.params.id;
   //ค้นหา user หรือ index ที่ต้องการดึงข้อมูล
    let selectedUser = users.find(user => user.id == id);

    res.json(users[selectedIndex]);
})


// path:PUT /users/:id ใช้สำหรับเเก้ไขข้อมูล user โดยใช้ id เป็นตัวระบุ
// get post put ใช้ได้หมด
app.put('/users/:id', async (req, res) => {
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
>>>>>>> 933a11d (งานส่งไม่ขึ้น)
        }
        )
    }
});
// GET /users/:id - ดึง Users ตาม ID
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id);
        if (results[0].length == 0) {
            throw { statusCode: 404, message: 'user not found' }
        }
        res.json(results[0][0])
    } catch (error) {
        console.error('error :', error.message);
        let statusCode = error.statusCode || 500;
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        }
        )
    }
});

<<<<<<< HEAD
// PUT /users/:id - อัปเดตข้อมูล Users ตาม ID
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updateUser = req.body;
        let user = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id]);
        res.json({
            message: 'Update user successfully!!',
            data: results[0]
        })
    } catch (error) {
        console.error('error :', error.message);
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        }
        )
    }
});
=======
//path: DELETE /user/:id ใช้สำหรับลบข้อมูล user โดยใช้ id เป็นตัวระบุ
app.delete('/users/:id', async (req, res) => {
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
app.listen(port,async (req,res) => {
    await initMysql()
    console.log('Http Server is running on port' +port);
})
>>>>>>> 933a11d (งานส่งไม่ขึ้น)



// DELETE /users/:id - ลบ Users ตาม ID
app.delete('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const results = await conn.query('DELETE  users WHERE id = ?', parseInt(id))
        res.json({
            message: 'Delete user successfully',
            data: results[0]
        })
    } catch (error) {
        console.error('error :', error.message)
        res.status(500).json({
            message: 'something went wrong',
            errorMessage: error.message
        }) 
    }
});

// เริ่มเซิร์ฟเวอร์และเชื่อมต่อฐานข้อมูล
app.listen(port, async () => {
    await initMySQL();
    console.log('Http Server is running on port ' + port);
});
