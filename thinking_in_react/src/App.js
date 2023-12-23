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

function UserDiv({ Users, SearchText, IsUserActive }) {
  const UserList = [];

  Users.forEach((data) => {
    if (data.name.toLowerCase().indexOf(SearchText.toLowerCase()) === -1) {
      return;
    }

    if (IsUserActive && data.status === "False") {
      return;
    }

    UserList.push(
      <tr key={data.id}>
        <td style={{ border: "1px solid black" }}>{data.id}</td>
        <td style={{ border: "1px solid black" }}>{data.name}</td>
        <td style={{ border: "1px solid black" }}>{data.username}</td>
        <td style={{ border: "1px solid black" }}>{data.email}</td>
        <td style={{ border: "1px solid black" }}>{data.phone}</td>
        <td style={{ border: "1px solid black" }}>{data.status}</td>
      </tr>
    );
  });

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <table
        style={{
          textAlign: "center",
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Id</th>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Username</th>
            <th style={{ border: "1px solid black" }}>Email</th>
            <th style={{ border: "1px solid black" }}>Phone</th>
            <th style={{ border: "1px solid black" }}>Active</th>
          </tr>
        </thead>
        <tbody>{UserList}</tbody>
      </table>
    </div>
  );
}

function SearchDiv({
  SearchText,
  onSearchTextChange,
  IsUserActive,
  onIsUserActiveChange,
}) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={SearchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        checked={IsUserActive}
        onChange={(e) => onIsUserActiveChange(e.target.checked)}
      />{" "}
      Only show those users who are active.
    </div>
  );
}

function MainDiv({ Users }) {
  const [SearchText, setSearchText] = useState("");
  const [IsUserActive, setIsUserActive] = useState(false);

  return (
    <div style={{ border: "1px solid grey", padding: "10px", width: "30%" }}>
      <SearchDiv
        SearchText={SearchText}
        onSearchTextChange={setSearchText}
        IsUserActive={IsUserActive}
        onIsUserActiveChange={setIsUserActive}
      />
      <br />
      <UserDiv
        Users={Users}
        SearchText={SearchText}
        IsUserActive={IsUserActive}
      />
    </div>
  );
}

var Users = [
  {
    id: "1",
    name: "Kushal",
    username: "kdy",
    email: "kdy@gmail.com",
    phone: "1234567890",
    status: "True",
  },
  {
    id: "2",
    name: "Rahul",
    username: "kdy",
    email: "kdy@gmail.com",
    phone: "1234567890",
    status: "False",
  },
  {
    id: "3",
    name: "Kishan",
    username: "kdy",
    email: "kdy@gmail.com",
    phone: "1234567890",
    status: "True",
  },
  {
    id: "4",
    name: "Jay",
    username: "kdy",
    email: "kdy@gmail.com",
    phone: "1234567890",
    status: "False",
  },
  {
    id: "5",
    name: "Chintan",
    username: "kdy",
    email: "kdy@gmail.com",
    phone: "1234567890",
    status: "True",
  },
];

export default function MyApp() {
  return <MainDiv Users={Users} />;
}
//---------------End Script---------------//
