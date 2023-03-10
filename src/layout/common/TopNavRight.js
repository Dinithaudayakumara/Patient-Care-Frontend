import React from "react";
import Description from "./Description";
import Logout from "../../components/common/Logout";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function TopNavRight() {
  return (
    <div>
      <Grid2 container justifyContent="space-between" alignItems="center">
        <Description />
        <Grid2 item pr={5}>
          <Logout />
        </Grid2>
      </Grid2>
    </div>
  );
}
