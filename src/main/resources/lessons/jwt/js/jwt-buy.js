$(document).ready(function () {
    $("#quantity1").on("blur", function () {
        let quantity = $("#quantity1").val();
        if (!$.isNumeric(quantity) || quantity < 0) {
            $("#quantity1").val("1");
            quantity = 1;
        }
        const piecePrice = parseFloat($("#piecePrice1").text());
        const totalPrice = (quantity * piecePrice).toFixed(2);
        $('#totalPrice1').text(totalPrice);
        updateTotal();
    });
    $("#quantity2").on("blur", function () {
        let quantity = $("#quantity2").val();
        if (!$.isNumeric(quantity) || quantity < 0) {
            $("#quantity2").val("1");
            quantity = 1;
        }
        const piecePrice = parseFloat($("#piecePrice2").text());
        const totalPrice = (quantity * piecePrice).toFixed(2);
        $('#totalPrice2').text(totalPrice);
        updateTotal();
    });
});

function updateTotal() {
    const price1 = parseFloat($('#totalPrice1').text());
    const price2 = parseFloat($('#totalPrice2').text());
    const subTotal = price1 + price2;
    $('#subtotalJwt').text(subTotal.toFixed(2));
    const total = subTotal + 6.94;
    $('#totalJwt').text(total.toFixed(2));
}