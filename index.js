let notes = [];

function updateDom(data) {
    const outputContainer = document.getElementById("output-container");
    outputContainer.innerHTML = '';

    data.forEach((element, index) => {
        const card = document.createElement('div');
        card.style.backgroundColor = element.colorHex;
        card.classList.add('notes-card');
        card.innerHTML = `<p>${element.content}</p>
        <button onclick="deleteNote(${index})">Delete</button>`;
        outputContainer.appendChild(card);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    updateDom(notes);
}

function saveBtnHandler() {
    const textBox = document.getElementById("text-input");
    const notesValue = textBox.value;

    // Get color
    const colorInput = document.getElementById("color-input");
    const colorCode = colorInput.value;

    const obj = {
        content: notesValue,
        colorHex: colorCode
    };
    notes.push(obj);
    updateDom(notes);
}

const saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", saveBtnHandler);
