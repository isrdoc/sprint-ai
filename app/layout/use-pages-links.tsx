import { IconCalendar, IconHeartbeat } from "@tabler/icons-react";
import { NavbarLink } from "./sidebar/navbar/navbar-link";
import { usePathname } from "next/navigation";

const pages = [
  { icon: IconCalendar, label: "Training", path: "/training" },
  { icon: IconHeartbeat, label: "Recovery", path: "/recovery" },
];

export function usePagesLinks() {
  const pathname = usePathname();

  const links = pages.map((link) => (
    <NavbarLink {...link} key={link.label} active={pathname === link.path} />
  ));

  return {
    links,
  };
}
