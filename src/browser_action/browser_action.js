function init() {
    $("#enable").click(function() {
        alert("click");
        alert($("#enable").val());
    });
}

$(function() {
    alert("jquery");
    init();
});