$(document).ready(() => {
    let editor2 = ace.edit("editor2");
    editor2.setTheme("ace/theme/monokai");
    editor2.session.setMode("ace/mode/java");

    editor2.getSession().on("change", () => {
        setTimeout(() => {
            $("#codesubmit2 input[name='editor2']").val(ace_collect2());
        }, 20);
    });

    editor2.setValue(
        "import org.owasp.validator.html.*;\n" +
        "import MyCommentDAO;\n" +
        "\n" +
        "public class AntiSamyController {\n" +
        "    public void saveNewComment(int threadID, int userID, String newComment){\n" +
        "        MyCommentDAO.addComment(threadID, userID, newComment);\n" +
        "    }\n" +
        "}"
    );
});

function ace_collect2() {
    let editor = ace.edit("editor2");
    let code = editor.getValue();
    return code;
}