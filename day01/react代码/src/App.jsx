// export default function App() {}
import Counter from "./components/Counter";
import Crud from "./components/Crud";
const App = () => {
  return <div>
    根组件<br />
    <Counter />
    <Crud></Crud>
  </div>;
};

export default App;
