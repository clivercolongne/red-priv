const socket = io();


// Escuchando el evento 'diego'
socket.on("cliver", data => {
    console.log(data);
    $("#chat").append(data + "<br>")
})
$("#user").change(emitir);
$("#msn").change(emitir);
$("#btn").click(emitir);


// Emite mensaje al servidor
function emitir() {
    let now = new Date().toLocaleTimeString();
    let msn = `[${now}] ` + $("#user")+ $("#msn")[0].value;

    socket.emit("cliver", msn);

    $("#msn")[0].value = "";
}
