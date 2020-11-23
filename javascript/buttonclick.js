function buttonClick(){
  $.ajax({
    url: 'https://www.omdbapi.com/?s=' + encodeURI(document.getElementById("search").value) + '&apikey=c0fc1fcc',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
      $(data).each(function(index, value){
        document.getElementById("poster").src = (value.Search[0].Poster);
        //console.log(value.Search[0].Poster);
      });
    }
  });
}
