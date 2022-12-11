$(document).ready(function() {

    $y = $("input[type='radio'][name='file']:checked").val();
    $("#filename").text("Logisim-Fork." + $y);
    $("input[type='radio'][class='nobox']:checked").each(function () {
        $(this).parent(".version").css("border", "4px solid white");
    });

    $(document).on('change', 'input[type="radio"][class="nobox"]',function () {
        $("input[type='radio'][class='nobox']:not(:checked)").each(function () {
            $(this).parent(".version").css("border", "4px solid #00C000");
        });
        $("input[type='radio'][class='nobox']:checked").each(function () {
            $(this).parent(".version").css("border", "4px solid white");
        });
        $y = $("input[type='radio'][name='file']:checked").val();
        $("#filename").text("Logisim-Fork." + $y);
    });
})

function loadVideoFromURL() {
    let searchParams = new URLSearchParams(window.location.search);
    let videoId = searchParams.get("id");
    if (videoId != null){
        const youTubeIframe = document.getElementById("video");
        youTubeIframe.src="https://www.youtube.com/embed/"+videoId+"?autoplay=1";
    }
}

