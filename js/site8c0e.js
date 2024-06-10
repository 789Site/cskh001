$(document).ready(function () {   
    $('.icon-close').on('click', function () {
        $('.content-popup').hide();
        showTab('tab1-tab');
        $('.tab-content').addClass('active');
        $('.btn-luckey').hide();
        $('#luckyDraw_v2').hide();
    });

    $('.btn-content').each(function () {
        var _this = $(this);
        _this.on('click', function () {
            var tabIdControl = $(this).data('tab-control');

            $('#show-iframe-open .code-iframe').each(function () {
                var tabContentId = $(this).data('content-tab');

                if (tabIdControl == tabContentId) {

                    $(this).addClass('active');
                    $('#box-iframe').show();
                    $('#btn-tawk-small').show();
                } else {
                    $(this).removeClass('active');
                }
            });
        });
    });

    $(".close-customer").click(function () {
        $("#imageModal").modal('hide');
    });

    $('#btn-tawk-small').hide();
    $('#box-iframe').hide();
    
    $('#btn-tawk-small').on('click', function () {
        $(this).hide();
        $('#box-iframe').hide();
        $('.btn-luckey').hide();
        $('#luckyDraw_v2').hide();
    });

    $('#draggable .chat-dialog').css('display', 'none');
    $('#draggable .chat-dialog').each(function (index, value) {
        if ($(this).hasClass('active')) {
            $(this).css('display', 'block');
            $(this).parent().hide();
        }
    });

    $('.btn-luckey').hide();
    $('.btn-content').on('click', function () {

        $('.code-iframe').each(function () {
            if ($(this).hasClass('active')) {
                var dataTr = $(this).data('content-tab');
                if (dataTr == 'SpIfame52-16' || dataTr == 'Ifame52-16') {
                    $('.btn-luckey').show();
                }
            }
        });
    });

    $('.icon-close-popup').on('click', function () {
        $('#luckyDraw_v2').hide();
    });

    $('.icon-close-giftcode').on('click', function () {
        $('.btn-luckey').hide();
    })

    $('.icon-gift-code').on('click', function () {
        $('#luckyDraw_v2').show();
    })
});