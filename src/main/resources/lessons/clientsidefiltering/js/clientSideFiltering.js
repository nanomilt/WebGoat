var dataFetched = false;

function selectUser() {
    var newEmployeeID = $("#UserSelect").val();
    var employeeRecord = document.getElementById("employeeRecord");
    var selectedEmployee = document.getElementById(newEmployeeID);
    if (selectedEmployee) {
        employeeRecord.innerHTML = selectedEmployee.innerHTML;
    }
}

function fetchUserData() {
    var userID = document.getElementById("userID").value;
    if (!dataFetched) {
        dataFetched = true;
        ajaxFunction(userID);
    }
}

function ajaxFunction(userId) {
    $.get("clientSideFiltering/salaries?userId=" + userId, function (result) {
        var html = "<table border = '1' width = '90%' align = 'center'>";
        html += '<tr>';
        html += '<td>UserID</td>';
        html += '<td>First Name</td>';
        html += '<td>Last Name</td>';
        html += '<td>SSN</td>';
        html += '<td>Salary</td>';

        for (var i = 0; i < result.length; i++) {
            html += '<tr id = "' + result[i].UserID + '">';
            html += '<td>' + result[i].UserID + '</td>';
            html += '<td>' + result[i].FirstName + '</td>';
            html += '<td>' + result[i].LastName + '</td>';
            html += '<td>' + result[i].SSN + '</td>';
            html += '<td>' + result[i].Salary + '</td>';
            html += '</tr>';
        }
        html += '</table>';

        var newdiv = document.createElement("div");
        newdiv.innerHTML = html;
        var container = document.getElementById("hiddenEmployeeRecords");
        container.appendChild(newdiv);
    });
}