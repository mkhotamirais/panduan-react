import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ time }) => {
  let timeAgo = "";
  if (time) {
    const date = parseISO(time);
    const period = formatDistanceToNow(date);
    timeAgo = `${period} ago`;
  }
  return <span>{timeAgo}</span>;
};
TimeAgo.propTypes;

export default TimeAgo;
