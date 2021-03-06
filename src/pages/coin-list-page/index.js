import CardList from "./card-list";
import CoinContextProvider from "../../contexts/CoinListContext";
import "./coinListPage.scss";

export default function CoinListPage() {
  return (
    <CoinContextProvider>
      <h1 className="title">All Indices</h1>
      <CardList />
    </CoinContextProvider>
  );
}
