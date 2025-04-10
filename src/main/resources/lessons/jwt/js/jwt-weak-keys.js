declare const $: any;
declare const document: any;

$(document).ready(function() {
    $("#secrettoken").load('JWT/secret/gettoken');
});