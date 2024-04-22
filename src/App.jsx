import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      <ButtonComponent/>
      <ImageComponent src="https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif" alt="you got rick-rolled" className="medium-img"/>
      <ImageComponent src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="a japanese tempe" className="medium-img"/>
      </header>

    </div>
  );
}

export default App;
