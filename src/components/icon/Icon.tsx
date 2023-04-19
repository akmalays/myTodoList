import { Icon } from "@mui/material";

interface SvgIconProps {
  icon: string;
  width: string;
  height: string;
  pb?: number;
}
export default function SvgIcon(props: SvgIconProps) {
  const { icon, width, height, pb } = props;
  return (
    <div>
      <Icon sx={{ pb: pb }}>
        <img alt="button icon" src={icon} width={width} height={height} />
      </Icon>
    </div>
  );
}
