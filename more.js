document.getElementById("submitBtn").addEventListener("click", async function () {
    let userInput = document.getElementById("userInput").value;

    if (userInput.trim() !== "") {
        try {
            // Send message to backend
            let response = await fetch("http://localhost:5000/save-message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: userInput })
            });

            let result = await response.json();
            alert(result.message); // Show "Message Saved!"
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to save message. Please try again.");
        }

        document.getElementById("userInput").value = ""; // Clear input
    } else {
        alert("Please type something!");
    }
});

// Existing Code (No Change)
document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "valentine.html"; // Redirect to new page
});



let noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", function () {
    let randomX = Math.floor(Math.random() * 300) - 150; // Random position
    let randomY = Math.floor(Math.random() * 300) - 150;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

document.getElementById("noBtn").addEventListener("click", function() {
    // Create the stamped text
    let dumbassStamp = document.createElement("div");
    dumbassStamp.classList.add("dumbass-stamp");
    dumbassStamp.innerText = "DUMBASS!"; 

    // Add the stamp to the body
    document.body.appendChild(dumbassStamp);

    // Remove after 3 seconds
    setTimeout(() => {
        dumbassStamp.remove();
    }, 10000);
});

