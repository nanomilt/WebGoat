$(document).ready( () => {

    let editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/html");

    editor.getSession().on("change", () => {
        setTimeout( () => {
            $("#codesubmit input[name='editor']").val(ace_collect());
        }, 20);
    });

    editor.setValue(
        "<html>\n" +
        "<head>\n" +
        "    <title>Using GET and POST Method to Read Form Data</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "    <h1>Using POST Method to Read Form Data</h1>\n" +
        "    <table>\n" +
        "        <tbody>\n" +
        "            <tr>\n" +
        "                <td><b>First Name:</b></td>\n" +
        "                <td><input type='text' name='firstname'></td>\n" +
        "            </tr>\n" +
        "            <tr>\n" +
        "                <td><b>Last Name:</b></td>\n" +
        "                <td><input type='text' name='lastname'></td>\n" +
        "            </tr>\n" +
        "        </tbody>\n" +
        "    </table>\n" +
        "</body>\n" +
        "</html>\n" +
        "\n" +
        "\n"
    );

});

function ace_collect() {
    let editor = ace.edit("editor");
    let code = editor.getValue();
    return code;
}