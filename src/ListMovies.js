import * as React from "react";

class ListMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [],
        open: false,
        data1 : []
    };

  }
  handleClick(id) {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b95a398c6c65c248eab3893cd6e36e2b&with_genres=" + id
    )
      .then((movies1) => movies1.json())
      .then((movies1) => {
        this.setState({
          data1: movies1.results,
          open : true
        });
      });
  }


  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=b95a398c6c65c248eab3893cd6e36e2b&language=en-US"
    )
      .then((movies) => movies.json())
      .then((movies) => {
        this.setState({
          data: movies.genres,
        });
      });
      
  }


  render() {
   const { data, data1 } = this.state;

   const mapGenre= data.map((item) => ( 
    <button onClick={()=>this.handleClick(item.id)}>
      {item.id} {item.name}
      </button>));

  
const mapHorreur= data1.map((item) => ( 
  <div>
    {item.id} {item.title}
    </div>
    ));

   return (
    <div className="main">
        <h2>Liste des genres</h2>

        <div> 
           {this.state.open === false ?  <div>{mapGenre} </div> :  <div>{mapHorreur} </div>}
        </div>

        </div>

      );
  }
}

export default ListMovies;

