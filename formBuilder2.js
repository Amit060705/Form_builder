const select = document.querySelector("select");
const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.getElementById("previewBox");
const fields=[];
button.addEventListener("click", () => {
    const type = select.value;
    const label = input.value;
    fields.push({label,type})
    if (label === "") {
        alert("Please enter a label before adding");
        return;
    }
    input.value="";
    render();
})
function render(){
    container.innerHTML="";
    fields.forEach(field=>{
        const divEl = document.createElement("div");
        divEl.innerHTML = `
        <label for="${field.label}">${field.label}:</label>
        <input type="${field.type}" id="${field.label}" name="${field.label}">
        `;
        container.appendChild(divEl);
    })
}