import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import TextBox from "../../components/Login/TextBox";
import Button from "../../components/Login/Button";

export default function LoginSection() {
  return (
    <div>
      <Grid2 container>
        <Grid2 xs={12}>Patient Care</Grid2>
        <Grid2 xs={12}>Login</Grid2>
        <Grid2 xs={12}>
          <TextBox />
        </Grid2>
        <Grid2 xs={12}>
          <TextBox />
        </Grid2>
        <Grid2 xs={12}>
          <Button />
        </Grid2>
      </Grid2>
    </div>
  );
}
