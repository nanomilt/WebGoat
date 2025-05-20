$(document).ready(() => {
    let editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");

    editor.getSession().on("change", () => {
        setTimeout(() => {
            $("#codesubmit input[name='editor']").val(aceCollect());
        }, 20);
    });
});

function aceCollect() {
    let editor = ace.edit("editor");
    let code = editor.getValue();
    return code;
}