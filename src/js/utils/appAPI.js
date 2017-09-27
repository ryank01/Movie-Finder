var AppActions = require('../actions/AppActions');

module.exports = {
  searchMovies: function(movie) {
    $.ajax({
      url: 'http://www.omdbapi.com/?s='+movie.title+'&apikey=ca9821c7',
      dataType: 'json',
      cache: false,
      success: function(data) {
        AppActions.receiveMovieResults(data.Search);
      } .bind(this),
      error: function(xhr, status, err) {
        alert(err);
      }.bind(this)
    });
  },
  /*searchMovies: function(movie) {
    this.props.movie.map(function(movie){
      $.ajax({
        url: 'http://www.omdbapi.com/?t='+movie.title+'&apikey=ca9821c7',
        dataType: 'json',
        cache: false,
        success: function(data) {
          AppActions.receiveMovieInfoResults();
        } .bind(this),
        error: function(xhr, status, err) {
          alert(err);
        }.bind(this)
      });
    })
  }*/
}
