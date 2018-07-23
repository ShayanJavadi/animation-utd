import { scroller } from "react-scroll";
import scrollRoutes from "../common/consts/scroll-routes";

const { TOP_OF_THE_PAGE_ROUTE } = scrollRoutes;

export default (
  scroller.scrollTo(TOP_OF_THE_PAGE_ROUTE, {
    duration: 1000,
    smooth: true,
  })
);
