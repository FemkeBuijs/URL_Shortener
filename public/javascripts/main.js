dataURL = {};

$('#urlSubmit').on('click', function(){
    //check whether the value of the longURL input is empty, if so alert the client.
    if($('#longURL').val() === ""){
        alert('It\'s empty!')
    } else {
        //set a random number, converting it to string using base36 and slice the string to make it shorter
        var shortURL = Math.random().toString(36).slice(2,8);
        //give the link back to the client
        $('#shortURL').val('localhost:3000/l/' + shortURL);
        //set an object including the longURL and converted URL
        dataURL = {
          longURL: $('#longURL').val(),
          shortURL: shortURL
        };
        //sent the object off to be posted in the database
        $.ajax('/', {
            method: "POST",
            data: dataURL,
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.log('error: ' + error)
            }
        })
    }
});