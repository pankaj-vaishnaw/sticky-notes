in this poject we have added a textbox with text area to use multiple lines
then we have created two div tags one is for input and one is for output 
the input containe contains the text area and save button 

#then in js file we have created a fuction called update dom 
<!-- function updateDom(data) {
    const outputContainer = document.getElementById("output-container");
    outputContainer.innerHTML = '';

    data.forEach((element, index) => {
        const card = document.createElement('div');
        card.style.backgroundColor = element.colorHex;
        card.classList.add('notes-card');
        card.innerHTML = `<p>${element.content}</p>
        <button onclick="deleteNote(${index})">Delete</button>`;
        outputContainer.appendChild(card);
    }); -->
    this fuction is for getting the output on the scree in the form of card
    then we have done some functionality with foreach loop which will iterate over each element of the array 
    then we have created the div to make a card format and to show the output in the card 

    # then we have given some style over the div that has to printed in the form of card 
    after that we have added the class to the card 
    after that we are maniputaing the dom by passing <p> tag and button tag which is for deleting the note from the list if needed 

    and then we appended bth the tags to the output container as tags which is manipulating and adding both the tags in the HTML
    \
    
<!-- function deleteNote(index) {
    notes.splice(index, 1);
    updateDom(notes);
}  -->
then we created a function called delete note which will perform the deletion operation on the card 

<!-- function saveBtnHandler() {
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
saveButton.addEventListener("click", saveBtnHandler); -->

this function is for getting the input from the user and to show it on the browser
it will proces the input whatever the user give and will get it by the value keyword 
this function will run based on the given event 
then we are storing the value in the form of object so we can pass it to the notes arrray 

after that there is an event listener click which will work when save butto is clicked and it will call the function saveBtnHandler which is for getting the input from the user