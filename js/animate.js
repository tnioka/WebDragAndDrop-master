var clicking = false;

function DragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function Drop(event) {
    var id = event.dataTransfer.getData("text");
    var elm = document.getElementById(id);
    event.currentTarget.appendChild(elm);
    event.preventDefault();
}
function DragOver(event) {
    event.preventDefault();
}

function sampleDrag( $event ) {
    $event.dataTransfer.setData( "Text", $event.target.id );
}

function sampleDrop( $event, $this ) {
    $event.preventDefault();
    var $data = $event.dataTransfer.getData( "Text" );
    $this.appendChild( document.getElementById( $data ) );
}
function sampleAllowDrop( $event ) {
    $event.preventDefault();
}
function sampleChangeBackgroundColor( $this, $color ) {
    $this.style.backgroundColor = $color;
}

$(function () {
    $('.box').mousedown(MouseDown);
    $(document).mouseup(MouseUp);
    $('.box').mousemove(MouseMove);
});

function MouseUp() {
    clicking = false;
    $('#clickstatus').text("mouseup");
    $('#movestatus').text("released");
    $('.drag').removeClass("drag")
}
function MouseDown() {
    clicking = true;
    $('#clickstatus').text("mousedown");
    $(this).addClass("drag");
}
function MouseMove(event) {
    if (!clicking) return;
    var drag = $('.drag');
    var offset = drag.offset();
    $('#movestatus').text("mouse moving  " + event.pageX + "," + event.pageY + " offset" + offset.left + "," + offset.top);
    drag.offset({ top: event.pageY - 45, left: event.pageX - 45 })
}
jQuery( function() {
    jQuery( "#sample" ).tooltip();
} );