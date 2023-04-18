import { Grid, Typography } from "@mui/material";
import RoundedButton from "../../components/rounded_button";
import NoActivityImages from "../../assets/images/activity-empty-state.svg";

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
            ml: "15%",
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

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mx: "15%",
          mt: 5,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: 36 }}>
          Activity
        </Typography>
        <RoundedButton />
      </Grid>
      {/* main content */}
      <Grid
        sx={{
          pt: 5,
          pb: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt="no activity images"
          src={NoActivityImages}
          width={"50%"}
          height={"50%"}
        />
      </Grid>
    </div>
  );
}
