$(document).ready(function(){
    $("button").click(function(){
        $("h4").toggle("slow");
    });
});
$(function()
    {
        $('#imghover').hover(function()
        {
        $('#imghover').attr('src', 'Images/cupcake_in_hands.jpg');
        },
    function()
    {
        $('#imghover').attr('src', 'Images/kitchen.jpg');
    })
})
$(function()
    {
        $('#hover').hover(function()
        {
        $('#hover').attr('src', 'Images/flan.jpg');
        },
    function()
    {
        $('#hover').attr('src', 'Images/orlando.jpg');
    })
})

