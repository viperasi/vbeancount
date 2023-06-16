import { timeFormat } from "d3-time-format";

const todayAsString = () => {
    return timeFormat("%Y-%m-%d")(new Date());
}

export default {
    todayAsString
}
