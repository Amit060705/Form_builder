const select = document.querySelector("select");
const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.getElementById("previewBox");
button.addEventListener("click", () => {
    const type = select.value;
    const label = input.value;
    if (label === "") {
        alert("Please enter a label before adding");
        return;
    }
    const divEl = document.createElement("div");
    divEl.innerHTML = `
    <label for="${label}">${label}:</label>
    <input type="${type}" id="${label}" name="${label}">
    `
    container.appendChild(divEl);

})