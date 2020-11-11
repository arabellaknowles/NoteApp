(function() {
    var notelist = new notelist();

    function testNoteListIsInstantiatedWithEmptyArray() {
        assert.isTrue(Array.isArray(notelist.notes));
    };

    function testNoteListCanAddANoteToArray() {
        notelist.add("this is a new note");
        assert.isTrue(notelist.notes[0].text === "this is a new note");
    };

})();