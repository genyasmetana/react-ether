import CardItem from "../card-item";
import Loader from "../../../components/loader";
import { CoinContext } from "../../../contexts/CoinListContext";

import "./cardlist.scss";
import { useContext } from "react";

function CardList() {
  const group = useContext(CoinContext);

  return group.length ? (
    group.map(({ title, coinData }) => (
      <div className="card-block" key={title}>
        <h4 className="card-block__title">{title}</h4>
        <div className="card-list">
          {coinData.map((item) => (
            <CardItem data={item} key={item[0]} />
          ))}
        </div>
      </div>
    ))
  ) : (
    <Loader />
  );
}

export default CardList;
