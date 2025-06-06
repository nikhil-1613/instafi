import { auth } from "@/auth";
import Logo from "./Logo";
import MoreDropdown from "./MoreDropDown";
import NavLinks from "./NavLinks";
import ProfileLink from "./ProfileLinks";

async function SideNav() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="border-t -ml-3 md:ml-0 bg-white dark:bg-neutral-950 h-16 justify-evenly fixed z-50 flex-1 w-full md:relative md:h-full bottom-0 md:border-none flex flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2">
        <Logo />
        <NavLinks />
        {typeof user?.username === "string" && user.username && (
          <ProfileLink user={{ ...user, username: user.username as string }} />
        )}

        <div className="hidden md:flex relative md:mt-auto flex-1 items-end w-full">
          <MoreDropdown />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
// // Update the import path below if your auth module is located elsewhere
// // import { auth } from "../auth";
// import { auth } from "@/auth";
// import Logo from "./Logo";
// import MoreDropdown from "./MoreDropDown";
// import NavLinks from "./NavLinks";
// import ProfileLink from "./ProfileLinks";
// import { User } from "next-auth";

// async function SideNav() {
//   const session = await auth();
//   const user = session?.user;

//   return (
//     <div className="flex h-full flex-col px-3 py-4 md:px-2">
//       <div className="border-t -ml-3 md:ml-0 bg-white dark:bg-neutral-950 h-16 justify-evenly fixed z-50 flex-1 w-full md:relative md:h-full bottom-0 md:border-none flex flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2">
//         <Logo />
//         <NavLinks />
//         {/* {user && <ProfileLink user={user} />} */}
//         {typeof user?.username === "string" && user.username && (
//           <ProfileLink user={{ ...user, username: user.username as string }} />
//         )}

//         <div className="hidden md:flex relative md:mt-auto flex-1 items-end w-full">
//           <MoreDropdown />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideNav;