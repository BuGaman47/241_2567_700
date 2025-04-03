const BASE_URL = 'http://localhost:8000';
window.onload = async () => {
    await loadData();  
};
// ✅ ฟังก์ชันแสดงข้อความแจ้งเตือนบนหน้าเว็บ (แยกออกมาให้ใช้ได้ทุกที่)
const showMessage = (message, type = 'success') => {
    const messageDOM = document.getElementById('message');
    messageDOM.innerHTML = message;
    messageDOM.style.color = type === 'success' ? 'green' : 'red';
    messageDOM.style.fontWeight = 'bold';

    // ✅ ซ่อนข้อความหลังจาก 3 วินาที
    setTimeout(() => {
        messageDOM.innerHTML = '';
    }, 3000);
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
                    <td>${user.age}</td>
                    <td>${user.gender}</td>
                    <td>
                        <a href="index1.html?id=${user.id}">
                            <button>Edit</button>
                        </a>
                        <button class="delete" data-id="${user.id}">Delete</button>
                    </td>
                </tr>
            `;
        }
        userDOM.innerHTML = htmlData;

        // ✅ ลบ user พร้อมแจ้งเตือน
        const deleteDOMs = document.getElementsByClassName('delete');
        for (let i = 0; i < deleteDOMs.length; i++) {
            deleteDOMs[i].addEventListener('click', async (event) => {
                const id = event.target.dataset.id; // ดึงค่า id จาก attribute data-id                                                                   
                const confirmDelete = confirm(`คุณต้องการลบ User ID: ${id} ใช่หรือไม่?`);
                if (!confirmDelete) return;

                try {
                    await axios.delete(`${BASE_URL}/users/${id}`);
                    showMessage(`User ID: ${id} ถูกลบแล้ว`, 'success'); // ✅ แจ้งเตือน
                    loadData(); // โหลดข้อมูลใหม่
                } catch (error) {
                    console.error('Error deleting user:', error);
                    showMessage('เกิดข้อผิดพลาดในการลบข้อมูล', 'error'); // ✅ แจ้งเตือน error
                }
            });
        }
    } catch (error) {
        console.error('Error loading users:', error);
        showMessage('เกิดข้อผิดพลาดในการโหลดข้อมูล', 'error'); // ✅ แจ้งเตือน error
    }
};
