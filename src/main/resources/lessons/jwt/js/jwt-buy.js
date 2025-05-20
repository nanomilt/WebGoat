$(document).ready(() => {
  $('#quantity1').on('blur', () => {
    let quantity = $('#quantity1').val() || 0;
    if (!$.isNumeric(quantity) || quantity < 0) {
      $('#quantity1').val('1');
      quantity = 1;
    }
    const piecePrice = parseFloat($('#piecePrice1').text());
    $('#totalPrice1').text((quantity * piecePrice).toFixed(2));
    updateTotal();
  });
  $('#quantity2').on('blur', () => {
    let quantity = $('#quantity2').val() || 0;
    if (!$.isNumeric(quantity) || quantity < 0) {
      $('#quantity2').val('1');
      quantity = 1;
    }
    const piecePrice = parseFloat($('#piecePrice2').text());
    $('#totalPrice2').text((quantity * piecePrice).toFixed(2));
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