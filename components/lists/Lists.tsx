
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function FolderList() {
  const res = await getData();
 

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {res.map((item: any) => {
        return (
          <ListItem>
            <ListItemText primary={item.title} secondary={item.id} />
          </ListItem>
        );
      })}
    </List>
  );
}
