import { Grid } from "@mui/material";

interface ColoredDotProps {
  color: string;
  size: number;
}

export default function ColoredDot(props: ColoredDotProps) {
  const { color, size } = props;
  return (
    <div>
      <Grid
        sx={{
          backgroundColor: color,
          borderRadius: "50%",
          width: size,
          height: size,
        }}
      />
    </div>
  );
}
