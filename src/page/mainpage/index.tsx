import { Grid, Typography } from "@mui/material";

export default function MainPage() {
  return (
    <div>
      {/* navbar section */}
      <Grid container sx={{ backgroundColor: "#16ABF8", height: 105 }}>
        <Grid
          item
          sx={{
            display: "flex",
            justifyItems: "flex-start",
            alignItems: "center",
            ml: "20%",
          }}
        >
          <Typography
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
      {/* title section */}
      {/* main content */}
    </div>
  );
}
