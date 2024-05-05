import {
  AppBar,
  Box,
  List,
  ListItemButton, // Import ListItemButton instead of ListItem
  Toolbar,
  Typography,
} from "@mui/material";
import { NavProps } from "../Types/app";
import { useState } from "react";
import React from "react";

function NavBar({ categories, onSelectcategory }: NavProps) {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null
  );
  /*The handleCategoryClick function handles the click event on the button to filter all products in the category and adds the class hovered to the button */
  const handleCategoryClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    onSelectcategory(categories[index]);
    setActiveButtonIndex(index);
    const buttons = document.querySelectorAll(".list-item-button");
    if (event.currentTarget.innerText !== "electronics") {
      event.currentTarget.classList.remove("hovered");
    } else {
      event.currentTarget.classList.add("hovered");
    }
    buttons.forEach((button, id) => {
      if (id !== index) {
        button.classList.remove("hovered");
      }
    });
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            padding: 0,
            alignItems: "flex-start",
          },
        }}
      >
        <Box>
          <Typography variant="h6" component="div" sx={{ color: "black" }}>
            Shop By Category
          </Typography>
          <Typography
            component="div"
            sx={{
              color: "#757575",
              "@media (max-width: 390px)": {
                fontSize: "15px",
              },
            }}
          >
            Discover the perfect products for your need
          </Typography>
        </Box>

        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",

            "@media (max-width: 768px)": {
              justifyContent: "center",
            },
            "@media (max-width: 350px)": {
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
            },
          }}
        >
          {categories.map((category, index) => (
            <ListItemButton
              key={category}
              sx={{ margin: "0 5px", color: " #2196f3 ", maxWidth: "100%" }}
              className={
                index === activeButtonIndex || category === "electronics"
                  ? "hovered list-item-button"
                  : "list-item-button"
              }
              onClick={(event) => handleCategoryClick(event, index)}
            >
              {category}
            </ListItemButton>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
