(function(){
  var noteModel = {
    text: function(){
      return 'Favourite drink: seltzer';
    }
  }
  
  var singleNoteView = new SingleNoteView(noteModel)

  function instantiatesSingleNoteView(){
    assert.isTrue(singleNoteView instanceof SingleNoteView)
  }
  
  function instatiatesWithANoteModelParameter(){
    assert.isTrue(singleNoteView.note === noteModel)
  }
  
  function returnsNoteModelHTMLString(){
    console.log(singleNoteView.outputHTML())
    assert.isTrue(singleNoteView.outputHTML() === '<div>Favourite drink: seltzer</div>')
  }

  instantiatesSingleNoteView()
  instatiatesWithANoteModelParameter()
  returnsNoteModelHTMLString()
})()