const socket = new WebSocket("ws://localhost:3000/ws");

socket.addEventListener("open", (event) => {
  console.log("WebSocket connection opened:", event);

  socket.send("Hello, WebSocket Server!");
});

socket.addEventListener("message", (event) => {
  console.log("WebSocket message received:", event.data);
});

socket.addEventListener("error", (event) => {
  console.error("WebSocket error:", event);
});

socket.addEventListener("close", (event) => {
  console.log("WebSocket connection closed:", event);
});
