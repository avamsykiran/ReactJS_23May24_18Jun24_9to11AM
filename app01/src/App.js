import { Fragment } from "react";
import FriendsList from "./components/FriendsList";
import Header from "./components/Header";
import Counter from "./components/Counter";

const App = () => (
  <Fragment>
    <Header />
    <FriendsList />
    <Counter />
  </Fragment>
);

export default App;
