import moment from "moment";

export default (edge) => {
  const today = moment();
  const future = moment(edge.node.frontmatter.date);

  const isInTheFuture = future.diff(today) >= 0;
  const isToday = future.isSame(today, "d");

  return isInTheFuture || isToday;
};
