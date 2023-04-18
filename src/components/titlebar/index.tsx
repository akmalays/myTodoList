import { Grid, Typography } from "@mui/material";

import BackIcon from "../../assets/icons/todo-back-button.svg";
import PencilIcon from "../../assets/icons/todo-title-edit-button.svg";
import SvgIcon from "../icon";
import RoundedButton from "../rounded_button";

interface TitlebarProps {
  type?: string;
}

export default function Titlebar(props: TitlebarProps) {
  const { type } = props;
  return (
    <div>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mx: "15%",
          mt: 5,
        }}
      >
        {type === "tododetail" ? (
          <>
            <Grid sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Grid sx={{ cursor: "pointer" }}>
                <SvgIcon icon={BackIcon} height={"28"} width={"28"} />
              </Grid>
              <Typography sx={{ fontWeight: "bold", fontSize: 36 }}>
                New Activity
              </Typography>
              <Grid sx={{ cursor: "pointer" }}>
                <SvgIcon icon={PencilIcon} height={"25"} width={"25"} />
              </Grid>
            </Grid>
            <RoundedButton />
          </>
        ) : (
          <>
            <Typography sx={{ fontWeight: "bold", fontSize: 36 }}>
              Activity
            </Typography>
            <RoundedButton />
          </>
        )}
      </Grid>
    </div>
  );
}
