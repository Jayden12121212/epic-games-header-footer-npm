import React, { useState } from "react";
import styles from "./MainNav.module.scss";

type DropdownLink = {
  label: string;
  path: string;
};

type Dropdown = {
  title: string;
  hasDescription?: boolean;
  description?: string;
  links: DropdownLink[];
};

export type Link = {
  label: string;
  path: string;
  hasDropdown?: boolean;
  dropdown?: Dropdown;
};

type MainNavProps = {
  links: Link[];
  onNavigate: (path: string) => void;
  activePath: string;
};

const MainNav = ({ links, onNavigate, activePath }: MainNavProps) => {
  const [hoveredDropdownIndex, setHoveredDropdownIndex] = useState<
    number | null
  >(null);

  const handleNavigate = (path: string) => {
    onNavigate(path);
  };

  return (
    <div className={styles.nav}>
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            onMouseLeave={() => setHoveredDropdownIndex(null)}
            onMouseEnter={() => setHoveredDropdownIndex(index)}
          >
            <div className={styles.link}>
              <a
                className={`${
                  link.path === activePath || index === hoveredDropdownIndex
                    ? styles.active
                    : ""
                }`}
                onClick={() => handleNavigate(link.path)}
              >
                <span>{link.label}</span>
              </a>
            </div>

            <div className={styles.boxZone} />

            {link.hasDropdown && link.dropdown && (
              <div
                className={`${styles.megaNav} ${
                  index === hoveredDropdownIndex ? styles.open : ""
                }`}
              >
                <div className={styles.subNav}>
                  <div className={styles.col}>
                    <div className={styles.text}>
                      <h3>{link.dropdown.title}</h3>
                      {link.dropdown.hasDescription && (
                        <p>{link.dropdown.description}</p>
                      )}
                    </div>

                    <div className={styles.subNavLinks}>
                      {link.dropdown.links.map(
                        (dropdownLink, dropdownIndex) => (
                          <div>
                            <a
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavigate(dropdownLink.path);
                              }}
                            >
                              <div className={styles.content}>
                                <div className={styles.label}>
                                  {dropdownLink.label}
                                </div>
                              </div>
                            </a>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <hr />

                  <div className={styles.subNavLinks}>
                    {link.dropdown.links.map((dropdownLink, dropdownIndex) => (
                      <div
                        role="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(dropdownLink.path);
                        }}
                      >
                        <a href="">
                          <div className={styles.content}>
                            <div className={styles.label}>
                              {dropdownLink.label}
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainNav;
