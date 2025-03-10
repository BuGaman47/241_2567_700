const BASE_URL = 'http://localhost:8000/';

window.onload = async () => {
    await loadData();
};

const loadData = async () => {
    console.log('user page onload');
    try {
        // 1. Load all users from the API we created
        const response = await axios.get(`${BASE_URL}/users`);
        console.log(response.data);

        const userDOM = document.getElementById('user');
        // 2. Load all users into the HTML

        let htmlData = '<div>';
        for (let i = 0; i < response.data.length; i++) {
            let user = response.data[i];
            htmlData += `<div>
                ${user.id} ${user.firstname} ${user.lastname} 
                <a href='index.html?id=${user.id}'><button>Edit</button></a>        
                <button class='delete' data-id='${user.id}'>Delete</button>  
            </div>`;
        }
        htmlData += '</div>';
        userDOM.innerHTML = htmlData;

        // 3. Make the Delete button work
        const deleteDOM = document.getElementsByClassName('delete');
        for (let i = 0; i < deleteDOM.length; i++) {
            deleteDOM[i].addEventListener('click', async (event) => {
                // Get the id of the user to be deleted
                const id = event.target.dataset.id;
                try {
                    await axios.delete(`${BASE_URL}/users/${id}`);
                    loadData(); // Recursive function to reload data
                } catch (error) {
                    console.log('Error:', error);
                }
            });
        }
    } catch (error) {
        console.log('Error loading data:', error);
    }
};