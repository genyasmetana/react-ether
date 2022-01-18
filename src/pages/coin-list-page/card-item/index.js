import { hexToDecimal, numberWithCommas } from "../../../helpers";
import "./carditem.scss";

function CardItem({ data }) {
  return (
    <article className="currency-card">
      <h6 className="currency-card__name">{data[0]}</h6>
      <h6 className="currency-card__rate">
        ${hexToDecimal(data["usdPriceInCents"]._hex) / 100} / 1 ETH
      </h6>

      <div className="currency-card__footer">
        <p className="currency-card__market-cup">
          ${numberWithCommas(hexToDecimal(data["usdCapitalization"]._hex))}
        </p>
        <p className="currency-card__percent">
          {hexToDecimal(data["percentageChange"]._hex)}%
        </p>
      </div>
    </article>
  );
}

export default CardItem;
