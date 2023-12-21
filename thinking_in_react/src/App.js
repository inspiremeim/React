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

//---------------Start JSX Script---------------//

function UserDiv({ Users }) {
  const UserList = Users.map((data) => (
    <tr>
      <td style={{ border: "1px solid black" }} key={data.id}>
        {data.id}
      </td>
      <td style={{ border: "1px solid black" }} key={data.id}>
        {data.name}
      </td>
      <td style={{ border: "1px solid black" }} key={data.id}>
        {data.username}
      </td>
      <td style={{ border: "1px solid black" }} key={data.id}>
        {data.email}
      </td>
      <td style={{ border: "1px solid black" }} key={data.id}>
        {data.phone}
      </td>
      <td style={{ border: "1px solid black" }} key={data.id}>
        {data.status}
      </td>
    </tr>
  ));

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <table
        style={{
          textAlign: "center",
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <tr>
          <th style={{ border: "1px solid black" }}>Id</th>
          <th style={{ border: "1px solid black" }}>Name</th>
          <th style={{ border: "1px solid black" }}>Username</th>
          <th style={{ border: "1px solid black" }}>Email</th>
          <th style={{ border: "1px solid black" }}>Phone</th>
          <th style={{ border: "1px solid black" }}>Active</th>
        </tr>
        {UserList}
      </table>
    </div>
  );
}

function SearchDiv() {
  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <input type="text" aria-placeholder="Search..." />
      <br />
      <input type="checkbox" /> Only show those users who are active.
    </div>
  );
}

function MainDiv({ Users }) {
  return (
    <div style={{ border: "1px solid grey", padding: "10px", width: "30%" }}>
      <SearchDiv />
      <br />
      <UserDiv Users={Users} />
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
//---------------End JSX Script---------------//

//---------------Pending Points---------------//
//Step 3: Find the minimal but complete representation of UI state
//---------------Pending Points---------------//
