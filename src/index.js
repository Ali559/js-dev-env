import { getUsers, deleteUser } from "./api/userApi.js";



getUsers().then(result => {
    let userBody = "";

    result.forEach(user => {
        userBody += `<tr>       
        <td><a href="#" id="${user.id}"  class="del">Delete </a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });
    global.document.getElementById('users').innerHTML = userBody;

    const deleteLinks = document.querySelectorAll('.del');

    Array.from(deleteLinks, link => {
        link.onclick = (event) => {
            const element = event.currentTarget;
            event.preventDefault();

            deleteUser(element.id) //eslint-disable-line no-console
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }
    })

})