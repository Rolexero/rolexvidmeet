import { Home } from "iconsax-react";

export interface SidebarItem {
  label: string;
  imgURL: string;
  route: string;
}

export const sidebarLinks: SidebarItem[] = [
  {
    imgURL: "/icons/Home.svg",
    route: "/",
    label: "Home",
  },

  {
    imgURL: "/icons/upcoming.svg",
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    imgURL: "/icons/previous.svg",
    route: "/previous",
    label: "Previous",
  },
  {
    imgURL: "/icons/Video.svg",
    route: "/recordings",
    label: "Recordings",
  },
  {
    imgURL: "/icons/add-personal.svg",
    route: "/personal-room",
    label: "Personal Room",
  },
];
