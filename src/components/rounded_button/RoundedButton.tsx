import { Button, Grid, Typography } from "@mui/material";
import { isDisabled } from "@testing-library/user-event/dist/utils";

import plusIcon from "../../assets/icons/tabler_plus.svg";
import { StylesSxProps } from "../../theme/custom_style";
import SvgIcon from "../icon/Icon";

interface RoundedButtonProps {
  roundedButtonProps: {
    type?: string;
    isDisabled?: boolean;
    width: number;
    height: number;
    title: string;
    color: string;
    fontColor?: string;
    fontWeight?: string;
    onClick?: any;
  };
}

export default function RoundedButton(props: RoundedButtonProps) {
  const { roundedButtonProps } = props;
  //button style
  const styles: StylesSxProps = {
    button: {
      alignItems: "center",
      width: roundedButtonProps.width,
      height: roundedButtonProps.height,
      textTransform: "none",
      backgroundColor: roundedButtonProps.isDisabled
        ? "#f4f4f4"
        : roundedButtonProps.color,
      color: roundedButtonProps.fontColor
        ? roundedButtonProps.fontColor
        : "white",
      cursor: "pointer",
      borderRadius: 20,
      "&:hover": {
        backgroundColor: "#215B9D",
        color: "white",
      },
    },
  };
  return (
    <div>
      {roundedButtonProps.type === "no icon" ? (
        <Button
          sx={styles.button}
          onClick={roundedButtonProps.onClick}
          disabled={roundedButtonProps.isDisabled}
        >
          <Grid sx={{ display: "flex", gap: 1 }}>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: roundedButtonProps.fontWeight
                  ? roundedButtonProps.fontWeight
                  : "normal",
              }}
            >
              {roundedButtonProps.title}
            </Typography>
          </Grid>
        </Button>
      ) : (
        <Button sx={styles.button} onClick={roundedButtonProps.onClick}>
          <Grid sx={{ display: "flex", gap: 1 }}>
            <SvgIcon icon={plusIcon} width={"20px"} height={"20px"} pb={1} />
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: roundedButtonProps.fontWeight
                  ? roundedButtonProps.fontWeight
                  : "normal",
                pt: 0.7,
              }}
            >
              {roundedButtonProps.title}
            </Typography>
          </Grid>
        </Button>
      )}
    </div>
  );
}
