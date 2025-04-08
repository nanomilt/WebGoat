declare let $: any;

$(document).ready(
    function() {
        $("#secrettoken").load('JWT/secret/gettoken');
    }
);