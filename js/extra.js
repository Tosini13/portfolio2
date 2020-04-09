function popup() {
    $('.get_popup').each(function () {
        $(this).click(function () {
            console.log('kupa');
            $('.popup').fadeIn();
        });
    });
}

function photo() {
    document.getElementById("myPhoto")
}