
/* =========================
   RAILA TRIBUTE WEBSITE
   JAVASCRIPT
========================= */

// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    // Get tribute form elements
    const tributeForm = document.getElementById("tributeForm");
    const tributeList = document.getElementById("tributeList");

    // If the tribute form exists on this page
    if (tributeForm && tributeList) {

        // Load saved tributes
        let tributes = JSON.parse(
            localStorage.getItem("railaTributes") || "[]"
        );

        // Display tributes
        function displayTributes() {
            tributeList.innerHTML = "";

            tributes.forEach(function (tribute) {

                const card = document.createElement("div");
                card.className = "tribute-card";

                const name = document.createElement("h3");
                name.textContent = tribute.name;

                const message = document.createElement("p");
                message.textContent = tribute.message;

                card.appendChild(name);
                card.appendChild(message);

                tributeList.appendChild(card);
            });
        }

        // Display existing tributes
        displayTributes();

        // Handle form submission
        tributeForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nameInput = document.getElementById("name");
            const messageInput = document.getElementById("message");

            const name = nameInput.value.trim();
            const message = messageInput.value.trim();

            if (name === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Create new tribute
            const newTribute = {
                name: name,
                message: message
            };

            // Add tribute
            tributes.unshift(newTribute);

            // Save tributes in browser storage
            localStorage.setItem(
                "railaTributes",
                JSON.stringify(tributes)
            );

            // Refresh display
            displayTributes();

            // Clear form
            tributeForm.reset();

            alert("Your tribute has been added successfully!");
        });
    }

});
