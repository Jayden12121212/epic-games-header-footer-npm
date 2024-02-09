import React from "react";
import cx from "classnames";
import styles from "./LogoNav.module.scss";

type LogoNavProps = {
  isOpen: boolean;
};

const LogoNav = ({ isOpen = false }: LogoNavProps) => {
  const classes = cx(styles.nav, {
    [styles.isOpen]: isOpen,
  });

  return (
    <ul className={classes}>
      <li className={styles.list}>
        <span className={styles.title}>Play</span>
        <ul>
          <li>
            <a href="https://www.fortnite.com/?lang=en-US">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)",
                }}
              />
              <span>Fortnite</span>
            </a>
          </li>
          <li>
            <a href="https://www.rocketleague.com?lang=en">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/nvjfw8LwTbyiETLiJEeE)",
                }}
              />
              <span>Rocket League</span>
            </a>
          </li>
          <li>
            <a href="https://fallguys.com/?lang=en-US">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)",
                }}
              />
              <span>Fall Guys</span>
            </a>
          </li>
        </ul>
      </li>

      <li className={styles.list}>
        <span className={styles.title}>Discover</span>
        <ul>
          <li>
            <a href="https://store.epicgames.com/en-US/">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)",
                }}
              />
              <span>Epic Games Store</span>
            </a>
          </li>
          <li>
            <a href="https://www.fab.com?lang=en-US">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/VYHbV8mMQhCzjH0TIGVO)",
                }}
              />
              <span>Fab</span>
            </a>
          </li>
          <li>
            <a href="https://sketchfab.com/">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/SueHxUd6SFy59VZItanD)",
                }}
              />
              <span>Sketchfab</span>
            </a>
          </li>
          <li>
            <a href="https://www.artstation.com/">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/GnVa6hUTtSLOfMZrWNxe)",
                }}
              />
              <span>ArtStation</span>
            </a>
          </li>
        </ul>
      </li>

      <li className={styles.list} data-section-id="2">
        <span className={styles.title}>Create</span>
        <ul>
          <li>
            <a href="https://www.unrealengine.com/?lang=en-US">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)",
                }}
              />
              <span>Unreal Engine</span>
            </a>
          </li>
          <li>
            <a href="https://create.fortnite.com/welcome?team=personal&amp;lang=en-US">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)",
                }}
              />
              <span>Create in Fortnite</span>
            </a>
          </li>
          <li>
            <a href="https://www.unrealengine.com/metahuman?lang=en-US">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)",
                }}
              />
              <span>MetaHuman</span>
            </a>
          </li>
          <li>
            <a href="https://www.twinmotion.com/?lang=en-US">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/bx1K2n3URsKKIismuqzF)",
                }}
              />
              <span>Twinmotion</span>
            </a>
          </li>
          <li>
            <a href="https://www.unrealengine.com/realityscan?lang=en-US">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)",
                }}
              />
              <span>RealityScan</span>
            </a>
          </li>
          <li>
            <a href="https://www.capturingreality.com/realitycapture">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/4hsNBIcXQcCzsN0FYLfD)",
                }}
              />
              <span>RealityCapture</span>
            </a>
          </li>
          <li>
            <a href="https://dev.epicgames.com/?lang=en-US">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)",
                }}
              />
              <span>Epic Online Services</span>
            </a>
          </li>
          <li>
            <a href="http://store.epicgames.com/en-US/distribution">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)",
                }}
              />
              <span>Publish on Epic Games Store</span>
            </a>
          </li>
          <li>
            <a href="https://dev.superawesome.com/">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/ijWMz82OStqcWRGDawM9)",
                }}
              />
              <span>Kids Web Services</span>
            </a>
          </li>
          <li>
            <a href="https://dev.epicgames.com/community?locale=en-us">
              <div
                className={styles.logo}
                style={{
                  maskImage:
                    "url(https://media.graphassets.com/aChpm2RFQ3k8uQWWVwgM)",
                }}
              />
              <span>Developer Community</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default LogoNav;
