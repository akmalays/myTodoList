import { Button, Grid, Typography } from "@mui/material";
import { StylesSxProps } from "../../theme/custom_style";
import SvgIcon from "../icon";
import plusIcon from "../../assets/icons/tabler_plus.svg";
interface RoundedButtonProps {
  type?: string;
}

export default function RoundedButton(props: RoundedButtonProps) {
  //button style
  const styles: StylesSxProps = {
    button: {
      alignItems: "center",
      width: 159,
      height: 54,
      textTransform: "none",
      backgroundColor: "#16ABF8",
      color: "white",
      cursor: "pointer",
      borderRadius: 10,
      "&:hover": {
        backgroundColor: "#215B9D",
        color: "white",
      },
    },
  };
  return (
    <div>
      <Button sx={styles.button}>
        <Grid sx={{ display: "flex", gap: 1 }}>
          <SvgIcon icon={plusIcon} width={"20px"} height={"20px"} pb={1} />
          <Typography sx={{ fontSize: 18, fontWeight: "500", pt: 0.7 }}>
            Tambah
          </Typography>
        </Grid>
      </Button>
    </div>
  );
}
