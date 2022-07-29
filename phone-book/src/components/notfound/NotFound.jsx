import React from "react";
import { Card } from "semantic-ui-react";

function NotFound() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card centered>
        <h1 className="center">404</h1>
        <h1 className="center">Page Not Found !</h1>
      </Card>
    </div>
  );
}

export default NotFound;
