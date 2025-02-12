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
    alert("I Love You! ❤️");

    // List of memory images
    let images = [
        "images/image1.jpg","images/image2.jpg","images/image3.jpg",
        "images/image4.jpg","images/image5.jpg","images/image6.jpg",
        "images/image7.jpg","images/image8.jpg","images/image9.jpg",
        "images/image10.jpg","images/image11.jpg","images/image12.jpg",
        "images/image13.jpg","images/image14.jpg","images/image15.jpg",
        "images/image16.jpg","images/image17.jpg","images/image18.jpg",
        "images/image19.jpg","images/image20.jpg","images/image21.jpg",
        "images/image22.jpg","images/image23.jpg","images/image24.jpg",
        "images/image25.jpg"
    ];


    let heartCoordinates = [
        [0, -2], [1, -2], [-1, -2], [2, -1], [-2, -1],
        [3, 0], [-3, 0], [2, 1], [-2, 1], [1, 2],
        [-1, 2], [0, 3], [1, 3], [-1, 3], [2, 4], 
        [-2, 4], [3, 5], [-3, 5], [0, 6], [1, 6], 
        [-1, 6], [0, 7]
    ];

    let heartContainer = document.createElement("div");
    heartContainer.classList.add("heart-container");

    images.slice(0, heartCoordinates.length).forEach((src, i) => {
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("memory-img");

        // Set heart-shaped positions
        let [x, y] = heartCoordinates[i];
        img.style.transform = `translate(${x * 60}px, ${y * 60}px)`;

        heartContainer.appendChild(img);
    });

    document.body.appendChild(heartContainer);
    
    // Fade-in effect
    setTimeout(() => heartContainer.style.opacity = "1", 100);
});


let noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", function () {
    let randomX = Math.floor(Math.random() * 300) - 150; // Random position
    let randomY = Math.floor(Math.random() * 300) - 150;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

noBtn.addEventListener("click", function() {
    alert("Dumbass!");
});
