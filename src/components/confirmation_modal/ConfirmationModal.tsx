import { Icon } from "@iconify/react";
import { Dialog, Grid, Typography } from "@mui/material";

import RoundedButton from "../rounded_button/RoundedButton";

interface ConfirmationModalProps {
  open: boolean;
  closeModal: () => void;
  title: string;
  onClick?: any;
}
export default function ConfirmationModal(props: ConfirmationModalProps) {
  const { open, closeModal, title, onClick } = props;

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
            data-cy="modal-delete-icon"
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
          <Typography
            data-cy="modal-delete-title"
            sx={{ maxWidth: 365, textAlign: "center", fontSize: 18 }}
          >
            Apakah anda yakin menghapus activity <strong> " {title} "</strong> ?
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
            data-cy="modal-delete-cancel-button"
            roundedButtonProps={{
              height: 54,
              width: 150,
              type: "no icon",
              title: "Batal",
              color: "#F4F4F4",
              fontColor: "#4A4A4A",
              fontWeight: "600",
              onClick: closeModal,
            }}
          />
          <RoundedButton
            data-cy="modal-delete-confirm-button"
            roundedButtonProps={{
              height: 54,
              width: 150,
              type: "no icon",
              title: "Hapus",
              color: "#ED4C5C",
              fontWeight: "600",
              onClick: onClick,
            }}
          />
        </Grid>
      </Dialog>
    </div>
  );
}
