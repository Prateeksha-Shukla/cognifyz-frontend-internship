let isDefault = true;

function changeColor() {
    const statusText = document.getElementById("status");

    if (isDefault) {
        document.body.style.backgroundColor = "#e0ffe0";
        statusText.innerText = "Background changed successfully!";
    } else {
        document.body.style.backgroundColor = "#f2f6ff";
        statusText.innerText = "Background reset to default.";
    }

    isDefault = !isDefault;
}
