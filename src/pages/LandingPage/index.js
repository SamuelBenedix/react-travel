import React from "react";
import { Button } from "../../components";

const LandingPage = () => {
  return (
    <div>
      Buat Button
      <Button
        onclick={() => {
          console.log("test");
        }}
      >
        Test
      </Button>
    </div>
  );
};

export default LandingPage;
