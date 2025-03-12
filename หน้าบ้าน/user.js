const BASE_URL = 'http://localhost:8000';

window.onload = async () => {
    await loadData();
};

const loadData = async () => {
    console.log("user page loaded");

    try {
        const response = await axios.get(`${BASE_URL}/users`);
        const userDOM = document.getElementById('user');
        let htmlData = '';

        for (let i = 0; i < response.data.length; i++) {
            let user = response.data[i];
            htmlData += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                    <td>
                        <a href="index1.html?id=${user.id}">
                            <button>Edit</button>
                        </a>
                        <button class="delete" data-id="${user.id}">Delete</button>
                    </td>
                </tr>
            `;
        }
        htmlData += '<div>'
        userDOM.innerHTML = htmlData;

       //3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            //ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData() //recursive function = เรียกใช้ฟังก์ชันตัวเอง
            } catch (error) {
                console.log('error', error);
            }
        })
    }

    } catch (error) {
        console.error('Error loading users:', error);
    }
};

/*
const BASE_URL = 'http://localhost:8000';

window.onload = async () => {
    await loadData()
}   

const loadData = async () => {
    console.log("user page loaded");
    //1.load all user จาก api ที่เตรียมไว้
    const respone = await axios.get(`${BASE_URL}/users`)
    console.log(respone.data);

    const userDOM = document.getElementById('user');
    //2.นำ user ทั้งหมด load กลับเข้าไปใน html

    let htmlData = '<div>'
    for (let i = 0; i < respone.data.length; i++) {
        let user = respone.data[i];
        htmlData += `<div>
        ${user.id} ${user.firstname} ${user.lastname}
        <a href = 'index1.html?id=${user.id}'><button> Edit </button></a>
        <button class = 'delete' data-id = '${user.id}'>Delete </button>
        </div>`
    }
    htmlData += '<div>'
    userDOM.innerHTML = htmlData;

    //3. ลบ user
    const deleteDOMs = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOMs.length; i++) {
        deleteDOMs[i].addEventListener('click', async (event) => {
            //ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData() //recursive function = เรียกใช้ฟังก์ชันตัวเอง
            } catch (error) {
                console.log('error', error);
            }
        })
    }
}
    */