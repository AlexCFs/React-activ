import React from "react";

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
          DataisLoaded: false
        };
      }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b95a398c6c65c248eab3893cd6e36e2b&sort_by=popularity.desc")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
        movies: data,
          DataisLoaded: true
        });
      });
  }

  render() {
      
    const {
        movies,
        DataisLoaded,
      } = this.state;
    return (
   <div>
       <p>hello</p>
      {(DataisLoaded) &&
        <>
      <table>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>release_date</th>
              </tr>
              {movies.results.map((item) => (
                <tr>
                  <th>{item.id}</th>
                  <th> {item.title}</th>
                  <th>{item.release_date}</th>
                </tr>
              ))}
            </table>
        </>
            } 
     </div>);
  
}
}
export default MoviesList;