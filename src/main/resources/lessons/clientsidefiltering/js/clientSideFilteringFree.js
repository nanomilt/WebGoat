$(document).ready(function () {
    //-- Click on detail
    $("ul.menu-items > li").on("click", function () {
        $("ul.menu-items > li").removeClass("active");
        $(this).addClass("active");
    });

    $(".attr,.attr2").on("click", function () {
        const clase = $(this).attr("class");

        $("." + clase).removeClass("active");
        $(this).addClass("active");
    });

    //-- Click on QUANTITY
    $(".btn-minus").on("click", function () {
        let now = $(".quantity").val();
        if ($.isNumeric(now)) {
            if (parseInt(now) - 1 > 0) {
                now--;
            }
            $(".quantity").val(now);
            $('#price').text(now * 899);
        } else {
            $(".quantity").val("1");
            $('#price').text(899);
        }
        calculate();
    });
    $(".btn-plus").on("click", function () {
        let now = $(".quantity").val();
        if ($.isNumeric(now)) {
            $(".quantity").val(parseInt(now) + 1);
        } else {
            $(".quantity").val("1");
        }
        calculate();
    });
    $(".checkoutCode").on("blur", function () {
        const checkoutCode = $(".checkoutCode").val();
        $.get("clientSideFiltering/challenge-store/coupons/" + checkoutCode, function (result, status) {
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
        const quantity = parseInt($(".quantity").val());
        if (d > 0) {
            $('#price').text((quantity * (899 - (899 * d / 100))).toFixed(2));

        } else {
            $('#price').text(quantity * 899);
        }
    }
});