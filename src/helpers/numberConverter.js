export const numberWithCommas = (value) =>
  value?.toFixed(2)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") || "";
