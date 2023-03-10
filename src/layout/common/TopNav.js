import React from "react";
import Logo from "../../components/common/Logo";
import TopNavRight from "./TopNavRight";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function TopNav() {
  return (
    <div>
      <Grid2 container>
        <Grid2 item xs={1}>
          <Logo />
        </Grid2>
        <Grid2 item xs={11}>
          <TopNavRight />
        </Grid2>
      </Grid2>
    </div>
  );
}
