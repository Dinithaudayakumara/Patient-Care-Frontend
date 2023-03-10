import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import UserName from "../../components/common/UserName";
import UserType from "../../components/common/UserType";

export default function Description() {
  return (
    <div>
      <Grid2 container direction="column" alignItems="flex-start">
        <Grid2 item>Dashboard</Grid2>
        <Grid2 item>
          <UserName />
        </Grid2>
        <Grid2 item>
          <UserType />
        </Grid2>
      </Grid2>
    </div>
  );
}
