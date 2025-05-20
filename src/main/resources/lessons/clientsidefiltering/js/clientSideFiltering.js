let dataFetched = false;

function selectUser() {
  const newEmployeeID = $('#UserSelect').val();
  document.getElementById('employeeRecord').innerHTML = document.getElementById(newEmployeeID).innerHTML;
}

function fetchUserData() {
  if (!dataFetched) {
    dataFetched = true;
    ajaxFunction(document.getElementById('userID').value);
  }
}

function ajaxFunction(userId) {
  $.get(`clientSideFiltering/salaries?userId=${ userId}`, (result, _) => {
    let html = "<table border = '1' width = '90%' align = 'center'";
    html = `${html }<tr>`;
    html = `${html }<td>UserID</td>`;
    html = `${html }<td>First Name</td>`;
    html = `${html }<td>Last Name</td>`;
    html = `${html }<td>SSN</td>`;
    html = `${html }<td>Salary</td>`;

    for (let i = 0; i < result.length; i++) {
      html = `${html }<tr id = "${ result[i].UserID }">`;
      html = `${html }<td>${ result[i].UserID }</td>`;
      html = `${html }<td>${ result[i].FirstName }</td>`;
      html = `${html }<td>${ result[i].LastName }</td>`;
      html = html = `${html }<td>${ result[i].SSN }</td>`;
      html = `${html }<td>${ result[i].Salary }</td>`;
      html = `${html }</tr>`;
    }
    html = `${html }</table>`;

    const newdiv = document.createElement('div');
    newdiv.innerHTML = html;
    const container = document.getElementById('hiddenEmployeeRecords');
    container.appendChild(newdiv);
  });
}