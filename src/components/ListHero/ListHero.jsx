import React, { Component } from "react";
import _ from "underscore";
import fire from "../../firebase";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const DivListHero = styled.div`
  background-color: white;
  padding: 5em 7em;
`;

const TableListHero = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
`;

const THListHero = styled.th`
  border: 1px solid black;
  border-collapse: collapse;
  padding: 15px;
  width: 40%;
`;

const THNBListHero = styled.th`
  padding: 15px;
  width: 10%;
`;

const TDListHero = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  padding: 15px;
`;

const TDNBListHero = styled.td`
  text-align: center;
  padding: 15px;
`;

class ListHero extends Component {
  state = {
    heroes: {},
    isLoading: false,
    lastVisible: null
  };

  firestore = moveAction => {
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    const heroesList = [];
    var heroesdata;
    switch (moveAction) {
      case "next":
        heroesdata = db
          .collection("heroes")
          .orderBy("name", "asc")
          .startAfter(this.state.lastVisible)
          .limit(5);
        break;
      case "previous":
        heroesdata = db
          .collection("heroes")
          .orderBy("name", "desc")
          .startAfter(this.state.lastVisible)
          .limit(5);
        break;
      default:
        heroesdata = db
          .collection("heroes")
          .limit(5)
          .orderBy("name");
    }

    heroesdata.get().then(querySnapshot => {
      // Get the last visible document
      var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      console.log("last", lastVisible.id);
      querySnapshot.forEach(doc => {
        const { name, type } = doc.data();
        heroesList.push({
          id: doc.id,
          name: name,
          type: type
        });

        this.setState({
          heroes: heroesList,
          isLoading: false,
          lastVisible
        });
      });
      console.log("state", this.state.lastVisible.id);
    });
  };

  componentDidMount() {
    this.firestore();
  }

  HandleNext = () => {
    this.firestore("next");
  };

  HandlePrevious = () => {
    this.firestore("previous");
  };

  HandleDeleteItem = id => {
    console.log(id);
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    db.collection("cities")
      .doc(id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };

  render() {
    //var heroes = _.mapObject(this.state.heroes);
    var heroes = _.sortBy(this.state.heroes, "name");
    //var heroes = this.state.heroes;

    return (
      <DivListHero>
        <h1 style={{ margin: 8 }}>List Heroes</h1>
        <TableListHero>
          <tbody>
            <tr>
              <THListHero>Name</THListHero>
              <THListHero>Type</THListHero>
              <THNBListHero colSpan="2">Action</THNBListHero>
            </tr>

            {heroes.map(val => (
              <tr style={{ border: "1px solid gray" }} key={val.id}>
                <TDListHero>{val.name}</TDListHero>
                <TDListHero>{val.type}</TDListHero>
                <TDNBListHero>
                  <Button
                    id={"btnEdit" + val.id}
                    variant="fab"
                    color="secondary"
                    aria-label="Edit"
                  >
                    <EditIcon />
                  </Button>
                </TDNBListHero>
                <TDNBListHero>
                  <Button
                    id={"btnDel" + val.id}
                    variant="fab"
                    aria-label="Delete"
                    onClick={() => this.HandleDeleteItem(val.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TDNBListHero>
              </tr>
            ))}
          </tbody>
        </TableListHero>
        <button onClick={this.HandlePrevious}>Previous</button>
        <button onClick={this.HandleNext}>Next</button>
      </DivListHero>
    );
  }
}

export default ListHero;
