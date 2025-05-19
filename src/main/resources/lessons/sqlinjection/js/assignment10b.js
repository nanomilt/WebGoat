$(document).ready(() => {
    let editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/java");

    editor.getSession().on("change", () => {
        setTimeout(() => {
            $("#codesubmit input[name='editor']").val(ace_collect(editor));
        }, 20);
    });
});

function ace_collect(editor) {
    let code = editor.getValue();
    return code;
}