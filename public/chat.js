

const socket = io.connect("http://localhost:3000/");
const btn = document.querySelector("button");
const output = document.getElementById("messages");
const input = document.getElementById("input");
const username = document.getElementById('name');


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    socket.emit('chat', {
        name: username.value,
        message: input.value
    })
})


socket.on('chat', (data)=>{
    output.innerHTML += `
    
        <div>
            <span>${data.name}: </span> ${data.message}
        </div>
    
    `;
})