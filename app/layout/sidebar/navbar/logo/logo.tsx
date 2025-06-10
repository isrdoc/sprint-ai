import { Image, Tooltip } from "@mantine/core";
import classes from "./logo.module.css";
import Link from "next/link";

interface NavbarLogoProps {
  onClick?: () => void;
}

export function NavbarLogo({ onClick }: NavbarLogoProps) {
  const handleLogoClick = () => {
    onClick?.();
  };

  return (
    <Link href="/">
      <div
        className={classes.logoWrapper}
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <div className={classes.logoIconWrapper}>
          <Tooltip label="Sprint AI" position="right" withArrow>
            <Image src="/icon.png" alt="Sprint AI" width={20} height={20} />
          </Tooltip>
        </div>
      </div>
    </Link>
  );
}
