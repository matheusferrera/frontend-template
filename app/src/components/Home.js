import React from "react";

// import UserService from "../services/user.service";

const Home = () => {
  // const [content, setContent] = useState("");
  // const [monsters, setMonsters] = useState([]);

  // useEffect(() => {
  //   UserService.getPublicContent().then(
  //     response => {
  //       setContent(response.data);
  //     },
  //     error => {
  //       const _content = (error.response && error.response.data) || error.message || error.toString();

  //       setContent(_content);
  //     },
  //   );
  // }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(users => setMonsters(users));
  // }, []);

  // console.log(monsters);
  return (
    <div className="container">
      <header className="jumbotron">
        {/* <h3>{content}</h3> */}
        <h3>Página em construção</h3>
      </header>
      {/* <div className="card-list">
        {monsters.map(monster => {
          return (
            <div
              key={monster.id}
              className="card-container"
            >
              <img
                alt={`monster ${monster.name}`}
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              />
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Home;
