import { Grid, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <div>
      <Grid container sx={{ backgroundColor: "#16ABF8", height: 105 }}>
        <Grid
          item
          sx={{
            display: "flex",
            justifyItems: "flex-start",
            alignItems: "center",
            ml: "15%",
          }}
        >
          <Typography
            data-cy="header-title"
            sx={{
              fontWeight: "bold",
              fontSize: 24,
              color: "#ffffff",
            }}
          >
            TO DO LIST APP
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
