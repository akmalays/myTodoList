import {
  Dialog,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import closeIcon from "../../assets/icons/modal-add-close-button.svg";
import ColoredDot from "../colored_dot/ColoredDot";
import SvgIcon from "../icon/Icon";
import RoundedButton from "../rounded_button/RoundedButton";

interface AddItemModalProps {
  open: boolean;
  closeModal?: () => void;
}
const prioriyData = [
  {
    id: 1,
    name: "Very High",
    color: "#ED4C5C",
  },
  {
    id: 2,
    name: "High",
    color: "#F8A541",
  },
  {
    id: 3,
    name: "Medium",
    color: "#00A790",
  },
  {
    id: 4,
    name: "Low",
    color: "#428BC1",
  },
  {
    id: 5,
    name: "Very Low",
    color: "#8942C1",
  },
];
export default function AddItemModal(props: AddItemModalProps) {
  const { open, closeModal } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: { borderRadius: "10px", width: 830, height: 403 },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 4,
            py: 2.5,
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
            Tambah List Item
          </Typography>
          <Grid sx={{ cursor: "pointer" }} onClick={closeModal}>
            <SvgIcon icon={closeIcon} height={"25"} width={"25"} />
          </Grid>
        </Grid>
        <Divider />
        <Grid sx={{ px: 4, pt: 6, pb: 2 }}>
          <Typography sx={{ fontSize: 12, fontWeight: "600" }}>
            NAMA LIST ITEM
          </Typography>
          <Grid sx={{ pt: 1, pb: 3 }}>
            <TextField
              size="small"
              fullWidth
              placeholder="Tambahkan nama list item"
              sx={{
                "& input::placeholder": {
                  fontSize: 16,
                  fontFamily: "Poppins",
                  color: "#4F4F4F",
                },
                "& input": {
                  fontSize: 16,
                  fontFamily: "Poppins",
                },
              }}
            />
          </Grid>
          <Typography sx={{ fontSize: 12, fontWeight: "600" }}>
            PRIORITY
          </Typography>
          <Grid sx={{ pt: 1, pb: 3 }}>
            <TextField size="small" sx={{ width: 200 }} select type="email">
              {prioriyData.map((val) => {
                return (
                  <MenuItem value={val.name}>
                    <Grid display="flex" gap={2} px={1} key={val.id}>
                      <Grid sx={{ pt: 0.5 }}>
                        <ColoredDot color={val.color} size={14} />
                      </Grid>
                      <Typography> {val.name}</Typography>
                    </Grid>
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          sx={{ display: "flex", justifyContent: "flex-end", px: 4, py: 2 }}
        >
          <RoundedButton
            roundedButtonProps={{
              height: 54,
              width: 150,
              type: "no icon",
              title: "Simpan",
              color: "#16ABF8",
              fontWeight: "600",
            }}
          />
        </Grid>
      </Dialog>
    </div>
  );
}
