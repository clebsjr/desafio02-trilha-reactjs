import { useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  const handleUpdateSelectedGenderId = (id: number) => {
    setSelectedGenreId(id)
  }
 
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={handleUpdateSelectedGenderId}
      />
      <Content
        selectedGenreId={selectedGenreId}
      />
    </div>
  );
}
