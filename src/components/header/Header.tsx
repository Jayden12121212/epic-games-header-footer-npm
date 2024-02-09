import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import cx from "classnames";
import styles from "./Header.module.scss";
import { Link } from "./MainNav";

type HeaderProps = {
  variant?: "epic-games" | "unreal-engine" | "twinmotion" | "fortnite";
  hasIcon?: boolean;
  iconDesktopURL?: string;
  iconMobileURL?: string;
  desktopIconWidth?: string;
  desktopIconHeight?: string;
  mobileIconWidth?: string;
  mobileIconHeight?: string;
  onLogoNavigate?: (path: string) => void;
  logoNavigateTo?: string;
  links: Link[];
  activePath: string;
  onNavigate: (path: string) => void;
};

const Header = ({
  variant = "epic-games",
  hasIcon = false,
  iconDesktopURL,
  iconMobileURL,
  desktopIconWidth,
  desktopIconHeight,
  mobileIconWidth,
  mobileIconHeight,
  onLogoNavigate,
  logoNavigateTo = "/",
  links,
  activePath,
  onNavigate,
}: HeaderProps) => {
  const classes = cx(styles.header, {
    [styles[variant]]: variant,
  });

  return (
    <header id="epic-games-flyout-nav" className={classes}>
      <Logo />
      <Navigation
        hasIcon={hasIcon}
        iconDesktopURL={iconDesktopURL}
        iconMobileURL={iconMobileURL}
        desktopIconWidth={desktopIconWidth}
        desktopIconHeight={desktopIconHeight}
        mobileIconWidth={mobileIconWidth}
        mobileIconHeight={mobileIconHeight}
        onLogoNavigate={onLogoNavigate}
        logoNavigateTo={logoNavigateTo}
        links={links}
        activePath={activePath}
        onNavigate={onNavigate}
      />
    </header>
  );
};

export default Header;
