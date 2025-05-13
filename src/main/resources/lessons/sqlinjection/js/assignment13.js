$(function () {
    $('.col-check').hide();
    var $btnAdmin = $('#btn-admin');
    var $toolbarAdmin = $("#toolbar-admin");
    var $colCheck = $(".col-check");

    $btnAdmin.on('click', function () {
        if ($toolbarAdmin.is(":visible")) {
            $toolbarAdmin.hide();
            $colCheck.hide();
        }
        else {
            $toolbarAdmin.show();
            $colCheck.show();
        }
    });

    var $btnOnline = $('#btn-online');
    $btnOnline.on('click', function () {
        $('table tr').filter(':has(:checkbox:checked)').find('td').parent().removeClass().addClass('success');
        $('table tr').filter(':has(:checkbox:checked)').find('td.status').text('online');
    });

    var $btnOffline = $('#btn-offline');
    $btnOffline.on('click', function () {
        $('table tr').filter(':has(:checkbox:checked)').find('td').parent().removeClass().addClass('warning');
        $('table tr').filter(':has(:checkbox:checked)').find('td.status').text('offline');
    });

    var $btnOutOfOrder = $('#btn-out-of-order');
    $btnOutOfOrder.on('click', function () {
        $('table tr').filter(':has(:checkbox:checked)').find('td').parent().removeClass().addClass('danger');
        $('table tr').filter(':has(:checkbox:checked)').find('td.status').text('out of order');
    });

});

$(document).ready(function () {
    getServers('id');
});

var html = '<tr class="STATUS">' +
    '<td class="col-check"><input type="checkbox" class="form-check-input"/></td>' +
    '<td>HOSTNAME</td>' +
    '<td>IP</td>' +
    '<td>MAC</td>' +
    '<td class="status">ONLINE</td>' +
    '<td>DESCRIPTION</td>' +
    '</tr>';

function getServers(column) {
    $.get("SqlInjectionMitigations/servers?column=" + column, function (result, status) {
        $("#servers").empty();
        for (var i = 0; i < result.length; i++) {
            var server = html.replace('ID', result[i].id);
            var serverStatus = "success";
            if (result[i].status === 'offline') {
                serverStatus = "danger";
            }
            server = server.replace('ONLINE', serverStatus);
            server = server.replace('STATUS', serverStatus);
            server = server.replace('HOSTNAME', result[i].hostname);
            server = server.replace('IP', result[i].ip);
            server = server.replace('MAC', result[i].mac);
            server = server.replace('DESCRIPTION', result[i].description);
            $("#servers").append(server);
        }

    });
}