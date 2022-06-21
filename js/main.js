// <script>
function $load($var, $type) {
    if ((($type == "main") ? $($type).attr("data-currentUrl") : "") == $var) return;
    $.get("./static" + $var + ".xml", function(data, status) {
        $($type).html($(data).find("root").html());
        $($type).show();
        
        (($type == "main") ? $("main").attr("data-currentUrl", $var) : "");
        $("a").click(function() {
            $load($(this).attr("data-url"), $(this).attr("data-type"));
        });
    });
}

$(document).ready(function() {
    $("#app").show();

    $load("/home", "main");
    $load("/navbar", "nav");
});

var onYouTubeIframeAPIReady = function() {
    if (navigator.userAgent.match(/Opera|NX|NetFront/)) return $_playerFinish();
    new YT.Player("player", {
        height: window.innerHeight,
        width: window.innerWidth,
        videoId: "yZMg2QnV0vM",
        
        events: {
            'onReady': $_onPlayerReady,
            'onStateChange': $_onPlayerStateChange,
            'onError': $_onError
        }
    });
};

function $_playerFinish() {
    $("#onLoad").hide();
    $("#Website").show();
}

function $_onPlayerReady(e) {
    $("#onLoad").show();
    e.target.playVideo();
}

function $_onPlayerStateChange(e) {
    if (e.data == 0) {
        e.target.destroy();
        $_playerFinish(e);
    }
}

function $_onError(e) {
    e.target.destroy();
    $_playerFinish(e);
}
// </script>