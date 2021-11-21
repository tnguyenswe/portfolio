/** @jsxImportSource theme-ui */
import { Grid, Text } from "theme-ui";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { useState } from "react";
import React from "react";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <Grid
        sx={(theme) => ({
          gridTemplateColumns: "1fr",
          justifyItems: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "60px",
          py: ["10px", "20px"],
          backgroundColor: theme.colors.navbar,
          position: "relative",
          zIndex: "10",
          boxShadow: "0 4px 8px rgba(0,0,0,0.07)",
          mb: '2rem'
        })}
      >
        {props.colorMode === "dark" ? (
          <MoonIcon
            sx={
              ((theme) => ({ fill: theme.colors.svgs }),
              {
                ":hover": { cursor: "pointer", transform: "scale(2)" },
                transform: "scale(1.5)",
                transition: "all .2s ease-in-out",
              })
            }
            onClick={props.toggleColorMode}
          />
        ) : (
          <SunIcon
            sx={
              ((theme) => ({ fill: theme.colors.svgs }),
              {
                ":hover": { cursor: "pointer", transform: "scale(2)" },
                transform: "scale(1.5)",
                transition: "all .2s ease-in-out",
              })
            }
            onClick={props.toggleColorMode}
          />
        )}
        </Grid>
    </React.Fragment>
  );
};

export default NavBar;
