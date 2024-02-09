import React from "react";
import MainNav from "./MainNav";
import type { Link } from "./MainNav";
import styles from "./Navigation.module.scss";

type NavigationProps = {
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
  onNavigate?: (path: string) => void;
};

const Navigation = ({
  hasIcon,
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
}: NavigationProps) => {
  return (
    <div className={styles.nav}>
      {hasIcon && (
        <div className={styles.logo}>
          <a onClick={() => onLogoNavigate(logoNavigateTo)}>
            {iconDesktopURL && (
              <img
                className={styles.desktopIcon}
                width={desktopIconWidth}
                height={desktopIconHeight}
                alt="Unreal Engine Logo"
                src="https://media.graphassets.com/qiFQiyH6TiuMdOIA5yZJ"
              />
            )}
            {iconMobileURL && (
              <img
                className={styles.mobileIcon}
                width={mobileIconWidth}
                height={mobileIconHeight}
                alt="Unreal Engine Logo"
                src="https://media.graphassets.com/B8hDILAISampfm5yFOQA"
              />
            )}
          </a>
        </div>
      )}

      <button aria-label="Menu">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5Zm0 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className={styles.drawer}>
        <MainNav
          activePath={activePath}
          onNavigate={onNavigate}
          links={links}
        />
      </div>

      <button role="button" type="button" className={styles.cta}>
        <div className={styles.label}>Download</div>
      </button>
    </div>
  );
};

export default Navigation;
