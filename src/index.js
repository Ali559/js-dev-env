import { getUsers, deleteUser } from "./api/userApi.js";



getUsers().then(result => {
    let userBody = "";

    result.forEach(user => {
        userBody += `<tr>       
        <td><a id="${user.id}" href="*" class="deleteUser">Delete </a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });
    global.document.getElementById('users').innerHTML = userBody;

    const deleteLinks = global.document.querySelector('.deleteUser');

    Array.from(deleteLinks, link => {
        link.onclick = (event) => {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes['data-id'].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
    })

})