$(document).ready(() => {
  //-- Click on detail
  $('ul.menu-items > li').on('click', function () {
    $('ul.menu-items > li').removeClass('active');
    $(this).addClass('active');
  });

  $('.attr,.attr2').on('click', function () {
    const clase = $(this).attr('class');

    $(`.${ clase}`).removeClass('active');
    $(this).addClass('active');
  });

  //-- Click on QUANTITY
  $('.btn-minus').on('click', () => {
    let now = $('.quantity').val();
    if (isNaN(now)) {
      now = 1; // Define now with a default value if it's not a number
    }
    if (parseInt(now) - 1 > 0) {
      now--;
    }
    $('.quantity').val(now);
    $('#price').text(now * 899);
    calculate();
  });

  $('.btn-plus').on('click', () => {
    let now = $('.quantity').val();
    if (isNaN(now)) {
      now = 1; // Define now with a default value if it's not a number
    }
    $('.quantity').val(parseInt(now) + 1);
    calculate();
  });

  $('.checkoutCode').on('blur', () => {
    const checkoutCode = $('.checkoutCode').val();
    $.get(`clientSideFiltering/challenge-store/coupons/${ checkoutCode}`, (result, _) => { // Unused variable replaced with _
      const discount = result.discount;
      if (discount > 0) {
        $('#discount').text(discount);
        calculate();
      } else {
        $('#discount').text(0);
        calculate();
      }
    });
  });

  function calculate() {
    const d = $('#discount').text();
    const quantity = parseInt($('.quantity').val());
    if (d > 0) {
      $('#price').text((quantity * (899 - (899 * d / 100))).toFixed(2));
    } else {
      $('#price').text(quantity * 899);
    }
  }
});