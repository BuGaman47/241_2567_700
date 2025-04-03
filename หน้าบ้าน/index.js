const BASE_URL = 'http://localhost:8000' //เปลี่ยนเป็น url ของ server ที่เรา deploy
let mode = 'CREATE' //default mode
let selectedID = '' //default selectedID

window.onload = async () => { //เมื่อเปิดหน้าเว็บ ให้ทำการโหลดข้อมูล
    const urlParams = new URLSearchParams(window.location.search); //ดึงข้อมูลจาก url
    const id = urlParams.get('id') //ดึง id จาก url
    console.log('id', id);
    if (id) {
        mode = 'EDIT'
        selectedID = id

        //1. ดึง user ที่ต้องการแก้ไข
         try {
            const response = await axios.get(`${BASE_URL}/users/${id}`); //ดึงข้อมูลจาก server
            console.log('data', response.data);//ดูข้อมูลที่ดึงมา
            const user = response.data; //เก็บข้อมูล user ไว้ในตัวแปร user
            
            //2. นำข้อมูล user ที่ดึงมา ใส่ใน input ที่มี

            let firstNameDOM = document.querySelector("input[name=firstname]")
            let lastNameDOM = document.querySelector("input[name=lastname]")
            let ageDOM = document.querySelector("input[name=age]")
            let descriptionDOM = document.querySelector("textarea[name='description']")

            firstNameDOM.value = user.firstname
            lastNameDOM.value = user.lastname
            ageDOM.value = user.age
            descriptionDOM.value = user.description

            
            let genderDOMs = document.querySelectorAll("input[name=gender]")
            let interestDOMs = document.querySelectorAll("input[name=interest]")

            for (let i =0; i < genderDOMs.length; i++) {
                if (genderDOMs[i].value == user.gender) {
                    genderDOMs[i].checked = true
                }
            }
            
            for (let i =0; i < interestDOMs.length; i++) {
                if (user.interests.includes(interestDOMs[i].value)) {
                    interestDOMs[i].checked = true
                }
            }

         } catch (error) { 
            console.log('error', error);
         }
        
    }
}
const validateData = (userData) => {
    let errors = [];
    if (!userData.firstName) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastName) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.interest) {
        errors.push('กรุณาเลือกงานอดิเรก');
    }
    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบาย');
    }

    return errors;
    
};

const submitData = async () => {
    let submitButton = document.getElementById('submitButton');
    submitButton.style.display = "none"; // ซ่อนปุ่ม

     
    let firstNameDOM = document.querySelector("input[name=firstname]");
    let lastNameDOM = document.querySelector("input[name=lastname]");
    let ageDOM = document.querySelector("input[name=age]");
    let genderDOM = document.querySelector("input[name=gender]:checked") || {}
    let interestDOMs = document.querySelectorAll("input[name=interest]:checked") || {}
    let descriptionDOM = document.querySelector("textarea[name='description']");

    let messageDOM = document.getElementById('message');
    
    try {
    let interest = '';
    for (let i = 0; i < interestDOMs.length; i++) {
        interest += interestDOMs[i].value 
        if (i != interestDOMs.length - 1) {
            interest += ', '
        }
    }
    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interests: interest
    }

    console.log('submitData', userData); //ดูข้อมูลที่จะส่งไปบันทึก

        let message = 'บันทึกข้อมูลเรียบร้อย'
        if (mode == 'CREATE') {
            const response = await axios.post(`${BASE_URL}/users`, userData)
            console.log('response', response.data);

        }else { 
            if (!selectedID) {
                alert('ไม่พบ ID ของผู้ใช้ กรุณารีเฟรชหน้าเว็บ');
                return;
            }
            const response = await axios.put(`${BASE_URL}/users/${selectedID}`, userData)
            message = 'แก้ไขข้อมูลเรียบร้อย'
            console.log('response', response.data);
        }

        messageDOM.innerText = message //แสดงข้อความบันทึกสำเร็จ
        messageDOM.className = "message success"
    } catch (error) {
        console.log('Error', error.errors);

        if (error.response) {
            console.log(error.response);
            error.message = error.response.data.message;
            error.errors = error.response.data.errors;
        }
           
        let htmlData = `<div><div> ${error.message} </div><ul>`;
        for (let i = 0; i < error.errors.length; i++) {
            htmlData += `<li> ${error.errors[i]} </li>`
        }
        htmlData += '</ul></div>';

        messageDOM.innerHTML = htmlData;
        messageDOM.className = 'message danger';
         // แสดงปุ่มกลับมา ถ้าส่งข้อมูลไม่สำเร็จ
        submitButton.style.display = "block";
    }
}