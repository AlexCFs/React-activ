import React from "react";

function ListItem(props) {
  return (
    <div>
      <li>
        {props.value.code} {props.value.nom} {props.value.codeRegion}
      </li>
    </div>
  );
}

class ListDepartments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
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

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <ul>
            {data.map((dept) => (
              <ListItem key={dept.code} value={dept} />
            ))}
          </ul>
        </div>
        <div>
          <h2>Liste des Departements</h2>
        </div>
      </div>
    );
  }
}

export default ListDepartments;
