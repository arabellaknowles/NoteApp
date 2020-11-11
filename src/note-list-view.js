class noteListView {
    constructor(noteList) {
        this.list = noteList.all();
    };

    returnHTML() {
        let htmlOutput = "";
        for (let i = 0; i < this.list.length; i++) {
            htmlOutput += "<li><div>" + this.list[i].text + "</div></li>"
        }
        return "<ul>" + htmlOutput + "</ul>"
    };
};