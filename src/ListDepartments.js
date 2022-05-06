import React from "react";

function ListItem(props) {
  return (
    <div>
      <li>
        ( {props.value.code} ) {props.value.nom} {props.value.codeRegion}
      </li>
    </div>
  );
}

class ListDepartments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      data: []
    };
    this.handlechangeInput = this.handlechangeInput.bind(this);
  }

  componentDidMount() {
    fetch("https://geo.api.gouv.fr/departements")
      .then((dataDepartement) => dataDepartement.json())
      .then((dataDepartement) => {
        this.setState({
          data: dataDepartement
        });
      });
  }
  handlechangeInput(e) {
    const { value } = e.target;
    this.setState({
      inputValue: value
    });
  }

  render() {
    const { data, inputValue } = this.state;

    const departementsList = data.filter(
      (dept) => dept.nom.toLowerCase().indexOf(inputValue) !== -1
    );
    return (
      <div>
        <h2>Liste des Departements</h2>
        <div>
          <label for="nom"> Filtrer par nom </label>
          <input
            id="nom"
            type="text"
            name="nom"
            value={inputValue}
            onChange={this.handlechangeInput}
          />
        </div>
        <div>
          <ul>
            {departementsList.map((dept) => (
              <ListItem key={dept.code} value={dept} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ListDepartments;
