        var img1 ;
        var br1;
        var br2;
        var a1;
        
        
function image_draw() {

    // Clean up last image, if its there or partially there.
    if (img1) {
        img1.remove();
    } //if
    if (br1) {
        br1.remove();
    } //if    
    if (br2) {
        br2.remove();
    } //if    
    if (a1) {
        a1.remove();
    } //if
    

    var canvas = document.createElement("canvas");
    canvas.width = document.DETAILS_F.WIDTH_VAL.value;
    canvas.height = document.DETAILS_F.HEIGHT_VAL.value;
    
    if ((document.DETAILS_F.WIDTH_VAL.value<1)||(document.DETAILS_F.HEIGHT_VAL.value<1)) {
        alert("Sorry, either the Width or Height was less that 1");
    } else {
    
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "blue";
        colour_toggle="blue"
    
        ctx.fillRect(0, 0, document.DETAILS_F.WIDTH_VAL.value, document.DETAILS_F.HEIGHT_VAL.value);
    
        indent_size=10;
        hsize=document.DETAILS_F.HEIGHT_VAL.value;
        wsize=document.DETAILS_F.WIDTH_VAL.value ; 
        ctx.font = "9px Arial";
        ctx.fillStyle = "white";
        colour_toggle="white";
        while  (wsize >= 30 && hsize >= 30 ) {
            if ((colour_toggle == "red") || (colour_toggle == "yellow")) {
                    ctx.fillStyle = "black";
            } else {
                    ctx.fillStyle = "white";
            }
            ctx.fillText(wsize + "x" + hsize,indent_size-10, indent_size-2);

            hsize=hsize-20;
            wsize=wsize-20;

            if (colour_toggle == "red") {
                ctx.fillStyle = "yellow";
                colour_toggle="yellow";
            } else {
                ctx.fillStyle = "red";
                colour_toggle="red";
            } // end else
            ctx.fillRect(indent_size, indent_size, wsize, hsize);
        
            indent_size=indent_size+10;

        }   // for w

        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
    
        img1 = document.createElement("img");
        br1 = document.createElement("br");
        br2 = document.createElement("br");
        a1 = document.createElement('a');
    
        img1.src = canvas.toDataURL("image/png");
    
        size_string_filename=document.DETAILS_F.WIDTH_VAL.value + "x" + document.DETAILS_F.HEIGHT_VAL.value + ".png";
    
        a1.href= img1.src;
        a1.download=size_string_filename;
        a1.appendChild(img1);
    
        document.body.appendChild(a1);
        document.body.appendChild(br1);
        document.body.appendChild(br2);
    } // end if positive vals
} // func