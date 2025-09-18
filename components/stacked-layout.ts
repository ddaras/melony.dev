import { hstack, vstack } from "melony";
// import { header } from "./header";
import { Sidebar } from "./sidebar";

export const stackedLayout = ({
  children,
  showSidebar = true,
}: {
  children: React.ReactNode;
  showSidebar?: boolean;
}) => {
  return vstack({
    children: [
      // header(),
      hstack({
        children: [
          showSidebar ? Sidebar() : null,
          vstack({
            children: [children],
            className: `p-20 ${showSidebar ? "ml-64" : ""} w-full`,
          }),
        ],
      }),
    ],
  });
};
