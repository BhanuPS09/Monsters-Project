
// import { Component } from "react";
import MonsterCard from "./components/card/card-component";
import SearchBox from "./components/Search/search-component";
import { useState, useEffect } from "react";


const App = () => {

  const [currentValue, setValue] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filtered,setFilter]=useState(monsters);

  const search = (event) => {
    const searchstr = event.target.value.toLowerCase();
    setValue(searchstr);

  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((value) => {
      return (value.json());
    }).then((users) => {
      setMonsters(users);
    });
  }, []);

  useEffect(() => {
    const searchedmonsters = monsters.filter((elem) => {
      if (elem.name.toLowerCase().includes(currentValue.toLowerCase())) {
        return (true);
      }
      else {
        return (false);
      }

    });
    setFilter(searchedmonsters);

  }, [currentValue, monsters]);



  return (
    <div className="App" >
      <h1 className="app-title">Monsters Market</h1>
      <SearchBox onChangeHandler={search} placeHolder="Search monsters" className="monsters-search-box" />
      <MonsterCard monsters={filtered} />

    </div>
  );
}

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchstring: ""

//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((value) => {
//       return (value.json());
//     }).then((users) => {
//       this.setState(() => {
//         return ({
//           monsters: users
//         });

//       }, () => {
//         console.log(users);
//       });
//     });

//   }

//   search = (event) => {

//     const searchstr = event.target.value.toLowerCase();
//     this.setState(() => {
//       return ({
//         searchstring: searchstr
//       });

//     });
//   }



//   render() {

//     const { monsters, searchstring } = this.state;
//     const { search } = this;

//     const searchedmonsters = monsters.filter((elem) => {
//       if (elem.name.toLowerCase().includes(searchstring.toLowerCase())) {
//         return (true);
//       }
//       else {
//         return (false);
//       }

//     });

//     return (
//       <div className="App" >
//         <h1 className="app-title">Monsters Market</h1>
//         <SearchBox onChangeHandler={search} placeHolder="Search monsters" className="monsters-search-box" />
//         <MonsterCard monsters={searchedmonsters} />

//       </div>
//     )
//   }
// }

export default App;
