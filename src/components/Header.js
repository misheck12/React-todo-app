import React from "react";


const headerStyle = {
  padding: "20px 0",
  lineHeight: "1.5em",
}

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={{
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1rem",
        color: "#ececec",
        textTransform: "lowercase",
        textAlign:"center"
      }}>Todo</h1>
    </header>
  )
}

export default Header;
