import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Campaign, CreatedAt, Tutorial } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import MainDashboard from "./pages/MainDashboard/MainDashboard";
import Analytics from "./pages/Analytics";
import UserDashboard from "./pages/User/UserDashboard";
import AdsDetails from "./pages/dashboard/AdsDetails";
import ScheduleBudgeting from "./pages/dashboard/ScheduleBudgeting";
import Targeting from "./pages/dashboard/Targeting";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard",
        path: "/",
        element: <MainDashboard />,
      },

      {
        icon: <UserCircleIcon {...icon} />,
        name: "Analytics",
        path: "/analytics",
        element: <Analytics />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "createAds",
        path: "/createAds",
        element: <CreatedAt />,
      },

      {
        icon: <BellIcon {...icon} />,
        name: "adsDetails",
        path: "/adsDetails",
        element: <AdsDetails />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Schedule",
        path: "/ScheduleBudgeting",
        element: <ScheduleBudgeting />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Targeting",
        path: "/Targeting",
        element: <Targeting />,
      },

      {
        icon: <TableCellsIcon {...icon} />,
        name: "Campaign",
        path: "/campaign",
        element: <Campaign />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "Reports",
      //   path: "/reports",
      //   element: <Reports />,
      // },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Tutorials",
        path: "/tutorial",
        element: <Tutorial />,
      },
    ],
  },
  {
    // title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
