import { Fragment } from 'react'; 
import MenuBar from "./components/MenuBar";
import ContactsList from './components/ContactsList';

const App = () => (
  <Fragment>
    <MenuBar appName="AddressBook 1.0" />
    <ContactsList />
  </Fragment>
);

export default App;
