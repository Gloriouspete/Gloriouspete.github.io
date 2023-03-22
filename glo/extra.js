const socket = io();

      // Display output in #output element
      function output(message) {
        const output = document.getElementById("output");
        const p = document.createElement("p");
        p.textContent = message;
        output.appendChild(p);
      }

      // Join room when "Join" button is clicked
      const joinButton = document.getElementById("join-button");
      joinButton.addEventListener("click", () => {
        const roomCode = document.getElementById("room-code").value;
        if (roomCode.length === 6) {
          socket.emit("join room", roomCode);
          output("Joined room: " + roomCode);
        } else {
          output("Room code must be 6 digits");
        }
      });

      // Handle "chat message" event
      socket.on("chat message", (msg) => {
        const messages = document.getElementById("messages");
        const li = document.createElement("li");
        li.textContent = msg;
        messages.appendChild(li);
      });

      // Send chat message when Enter key is pressed
      const input = document.getElementById("message-input");
      const sendButton = document.getElementById("send-button");
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          const msg = input.value;
          const roomCode = document.getElementById("room-code").value;
          socket.emit("chat message", msg, roomCode);
          input.value = "";
        }
      });
      sendButton.addEventListener("click", () => {
        const msg = input.value;
        const roomCode = document.getElementById("room-code").value;
        socket.emit("chat message", msg, roomCode);
        input.value = "";
      });