// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//---------------Start Script---------------//
import { useState } from "react";
import "./App.css";

function MyButton({ count, onClick }) {
  return (
    <>
      <button onClick={onClick}>Clicked here {count} times!</button>
      <br />
      <button onClick={onClick}>Clicked there {count} times!</button>
    </>
  );
}

function FirstPage() {
  return (
    <>
      <h1>Startinng of First Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
}

function UserProfile() {
  const data = {
    name: "Hardik Patel",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    size: 50,
  };

  return (
    <>
      <h3>{data.name}</h3>
      <img
        className="img-border"
        src={data.imageUrl}
        alt={"Photo of " + data.name}
        style={{ width: data.size, height: data.size }}
      />
    </>
  );
}

function ConditionalBasedRendering() {
  let content;
  var IsFlag = true;
  if (IsFlag) {
    content = <FirstPage />;
  } else {
    content = <UserProfile />;
  }

  return <>{content}</>;
}

function UserList() {
  var Users = [
    {
      id: "1",
      name: "Kushal",
      username: "kdy",
      email: "kdy@gmail.com",
      phone: "1234567890",
    },
    {
      id: "2",
      name: "Rahul",
      username: "kdy",
      email: "kdy@gmail.com",
      phone: "1234567890",
    },
    {
      id: "3",
      name: "Kishan",
      username: "kdy",
      email: "kdy@gmail.com",
      phone: "1234567890",
    },
    {
      id: "4",
      name: "Jay",
      username: "kdy",
      email: "kdy@gmail.com",
      phone: "1234567890",
    },
    {
      id: "5",
      name: "Chintan",
      username: "kdy",
      email: "kdy@gmail.com",
      phone: "1234567890",
    },
  ];

  const LiItems = Users.map((data) => <li key={data.id}>{data.name}</li>);

  return (
    <>
      <ul>{LiItems}</ul>
    </>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function ClickHere() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>This is quick start of creating and nesting components!</h1>
      <MyButton count={count} onClick={ClickHere} />
      <br />
      <FirstPage />
      <br />
      <UserProfile />
      <br />
      <ConditionalBasedRendering />
      <br />
      <UserList />
    </div>
  );
}
//---------------End Script---------------//
