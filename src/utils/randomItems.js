const randomItems = (...items) => {
  return items
    .flat()
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
};

export default randomItems;
