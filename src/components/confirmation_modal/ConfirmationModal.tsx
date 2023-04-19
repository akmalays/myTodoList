import { Icon } from "@iconify/react";
import { Dialog, Grid, Typography } from "@mui/material";

import RoundedButton from "../rounded_button/RoundedButton";

interface ConfirmationModalProps {
  open: boolean;
  openModal?: (active: boolean) => void;
  title: string;
}
export default function ConfirmationModal(props: ConfirmationModalProps) {
  const { open, openModal, title } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={openModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: { borderRadius: "10px", width: 490, height: 355 },
        }}
      >
        <Grid
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: 5,
          }}
        >
          <Icon
            icon="tabler:alert-triangle"
            width={84}
            height={84}
            color={"#ED4C5C"}
          />
        </Grid>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt={5}
        >
          <Typography sx={{ maxWidth: 365, textAlign: "center", fontSize: 18 }}>
            Apakah anda yakin menghapus activity <strong> {title}</strong> ?
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            pt: 4,
          }}
        >
          <RoundedButton
            roundedButtonProps={{
              height: 54,
              width: 150,
              type: "no icon",
              title: "Batal",
              color: "#F4F4F4",
              fontColor: "#4A4A4A",
              fontWeight: "600",
            }}
          />
          <RoundedButton
            roundedButtonProps={{
              height: 54,
              width: 150,
              type: "no icon",
              title: "Hapus",
              color: "#ED4C5C",
              fontWeight: "600",
            }}
          />
        </Grid>
      </Dialog>
    </div>
  );
}
