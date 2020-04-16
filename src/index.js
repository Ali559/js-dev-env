import { getUsers } from "./api/userApi.js";

getUsers().then(result => {
    let userBody = "";

    result.forEach(user => {
        userBody += `<tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td><a href="#" data-id="${user.id}" class="deleteUser btn-danger">delete </a></td>
        </tr>`

    });
    global.document.getElementById('users').innerHTML = userBody;
})