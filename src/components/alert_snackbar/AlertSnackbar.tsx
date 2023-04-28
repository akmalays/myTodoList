import { Grid, Typography } from "@mui/material";

import AlertIcon from "../../assets/icons/modal-information-icon.svg";
import SvgIcon from "../icon/Icon";

interface AlertSnackbarProps {
  caption: string;
  isActive: boolean;
}

export default function AlertSnackbar(props: AlertSnackbarProps) {
  const { caption, isActive } = props;
  return (
    <div>
      {isActive && (
        <Grid
          sx={{
            display: "flex",
            justifyContent: "right",
            mr: 5,
            mb: 5,
            zIndex: 100,
          }}
        >
          <Grid
            sx={{
              backgroundColor: "#ffffff",
              width: 490,
              height: 58,
              boxShadow: 2,
              borderRadius: "10px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                mx: 3,
                gap: 3,
              }}
            >
              <Grid sx={{ cursor: "pointer" }}>
                <SvgIcon icon={AlertIcon} height={"25"} width={"25"} />
              </Grid>
              <Typography sx={{ fontSize: 14, fontWeight: "500" }}>
                {caption}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
