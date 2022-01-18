import Header from "./components/header";
import CoinListPage from "./pages/coin-list-page/";
import "./resources/styles/index.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <CoinListPage />
      </div>
    </div>
  );
}

export default App;
