function loadUsers() {
    const list = document.getElementById("userList");
    const loading = document.getElementById("loading");

    list.innerHTML = "";
    loading.innerText = "Loading users...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            loading.innerText = "";
            data.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                list.appendChild(li);
            });
        })
        .catch(() => {
            loading.innerText = "Failed to load data.";
        });
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("formMessage");
    const out = document.getElementById("submittedData");

    if (name === "" || email === "") {
        msg.style.color = "red";
        msg.innerText = "Please fill all fields.";
        out.innerHTML = "";
        return false;
    }

    msg.style.color = "green";
    msg.innerText = "Form submitted successfully!";

    out.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    return false;
}
