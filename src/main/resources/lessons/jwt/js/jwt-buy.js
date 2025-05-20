$(document).ready(function () {
    $("#quantity1").on("blur", function () {
        let quantity = $("#quantity1").val();
        if (!$.isNumeric(quantity) || quantity < 0) {
            $("#quantity1").val("1");
            quantity = 1;
        }
        let piecePrice = $("#piecePrice1").text();
        $('#totalPrice1').text((quantity * piecePrice).toFixed(2));
        updateTotal();
    });
    $("#quantity2").on("blur", function () {
        let quantity = $("#quantity2").val();
        if (!$.isNumeric(quantity) || quantity < 0) {
            $("#quantity2").val("1");
            quantity = 1;
        }
        let piecePrice = $("#piecePrice2").text();
        $('#totalPrice2').text((quantity * piecePrice).toFixed(2));
        updateTotal();
    });
});

function updateTotal() {
    let price1 = parseFloat($('#totalPrice1').text());
    let price2 = parseFloat($('#totalPrice2').text());
    let subTotal = price1 + price2;
    $('#subtotalJwt').text(subTotal.toFixed(2));
    let total = subTotal + 6.94;
    $('#totalJwt').text(total.toFixed(2));
}