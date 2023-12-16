'use strict';

const URL = 'https://www.randomuser.me/api/?nat=CA&results=10&seed=same';

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors'
};

async function getUsers(){
    try{
        const result = await fetch(URL,options);
        const data = await result.json();
        const users = data.results;
        displayUsers(users);
    } catch(err) {
        console.error(err.message);
    }
}

function displayUsers(users) {
    const usersContainer = document.getElementById('usersContainer');
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'post-header add-friend';

        const userInfoDiv = document.createElement('div');
        userInfoDiv.className = 'user-info friend flexbox';

        const img = document.createElement('img');
        img.src = user.picture.medium;
        img.alt = 'Profile Picture';

        const userNameDiv = document.createElement('div');
        userNameDiv.className = 'user-name';

        const nameP = document.createElement('p');
        nameP.className = 'name-1';
        nameP.textContent = `${user.name.first} ${user.name.last}`;

        const titleP = document.createElement('p');
        titleP.className = 'title-1';
        titleP.textContent = user.location.city;

        userNameDiv.appendChild(nameP);
        userNameDiv.appendChild(titleP);

        userInfoDiv.appendChild(img);
        userInfoDiv.appendChild(userNameDiv);

        userDiv.appendChild(userInfoDiv);

        // Add the post-date div
        const postDateDiv = document.createElement('div');
        postDateDiv.className = 'post-date';
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-circle-plus';
        postDateDiv.appendChild(icon);

        userDiv.appendChild(postDateDiv);

        usersContainer.appendChild(userDiv);
    });
}

// Call getUsers to fetch and display users
getUsers();
