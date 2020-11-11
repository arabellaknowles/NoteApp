function testNoteStoresTextOnInitialization() {
    var mynote = new Note("this is a new note");
    assert.isTrue(mynote.text() === "this is a new note");

};
testNoteStoresTextOnInitialization();