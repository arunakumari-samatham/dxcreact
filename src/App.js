import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import ChildComponent from './components/ChildComponent';
import Fragments from './components/Fragments';
import NewTable from './components/NewTable';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Form from './components/Form';
import FunctionClick from './components/FunctionClick';
import Inline from './components/Inline';
import MemoComp from './components/MemoComp';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  );
}

export default App;
