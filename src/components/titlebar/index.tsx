import { Grid, Typography } from "@mui/material";

import sortIcon from "../../assets/icons/tabler_arrows-sort.svg";
import BackIcon from "../../assets/icons/todo-back-button.svg";
import PencilIcon from "../../assets/icons/todo-title-edit-button.svg";
import SvgIcon from "../icon";
import RoundedButton from "../rounded_button";

interface TitlebarProps {
  type?: string;
  todo?: boolean;
  handleClick?: any;
}

export default function Titlebar(props: TitlebarProps) {
  const { type, todo, handleClick } = props;
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
            <Grid display={"flex"} gap={3}>
              {todo && (
                <Grid
                  sx={{
                    cursor: "pointer",
                    border: "solid 1px",
                    borderColor: "#E5E5E5",
                    borderRadius: "50%",
                    width: 54,
                    height: 54,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={handleClick}
                >
                  <SvgIcon icon={sortIcon} height={"24"} width={"24"} />
                </Grid>
              )}
              <RoundedButton />
            </Grid>
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
