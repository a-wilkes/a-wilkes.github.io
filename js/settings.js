$(function () {
    $('.checkbox').bootstrapToggle({
        size: "small"
    });
})

function clickToggle(button) {
    $(button).bootstrapToggle('toggle');
}