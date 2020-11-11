(function(){
    var mynote = new Note("this is a new note", 0)

    function testNoteStoresTextOnInitialization() {
      assert.isTrue(mynote.text() === "this is a new note")
    }

    function testInitializedWithID(){
      assert.isTrue(mynote.id === 0)
    }
    testNoteStoresTextOnInitialization()
    testInitializedWithID()
})()