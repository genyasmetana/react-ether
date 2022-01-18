import React, { createContext, useState, useEffect } from "react";
import { contract } from "../contracts/contract";

export const CoinContext = createContext([]);

const CoinContextProvider = (props) => {
  const [group, setGroup] = useState([]);

  const fetchData = async () => {
    const ids = (await contract.getGroupIds()) || [];
    const groups = [];

    for (const id of ids) {
      groups.push(await contract.getGroup(id));
    }

    groups.forEach((el) => {
      const coinData = el[1].map((item) => contract.getIndex(item));

      Promise.all(coinData).then((data) => {
        setGroup((prevState) => {
          return [
            ...prevState,
            {
              title: el[0],
              coinData: data,
            },
          ];
        });
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CoinContext.Provider value={group}>{props.children}</CoinContext.Provider>
  );
};

export default CoinContextProvider;
