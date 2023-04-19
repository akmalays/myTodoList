import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Checkbox,
  Divider,
  Fade,
  Grid,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";

import AzIcon from "../../assets/icons/icon-A-Z.svg";
import UndoneIcon from "../../assets/icons/icon-belum-selesai.svg";
import TerbaruIcon from "../../assets/icons/icon-terbaru.svg";
import TerlamaIcon from "../../assets/icons/icon-terlama.svg";
import ZaIcon from "../../assets/icons/icon-Z-A.svg";
import selectedIcon from "../../assets/icons/selected-icon.svg";
import trashIcon from "../../assets/icons/todo-item-delete-button.svg";
import PencilIcon from "../../assets/icons/todo-title-edit-button.svg";
import NoTodoImages from "../../assets/images/todo-empty-state.svg";
import AddItemModal from "../../components/add_item_modal/AddItemModal";
import ColoredDot from "../../components/colored_dot/ColoredDot";
import ConfirmationModal from "../../components/confirmation_modal/ConfirmationModal";
import SvgIcon from "../../components/icon/Icon";
import Navbar from "../../components/navbar/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import { styles } from "../../theme/globalstyles";

const listTodo = [
  { id: 1, item: "TelurAyam" },
  { id: 2, item: "Beras 5kg" },
  { id: 3, item: "Daging" },
  { id: 4, item: "Micin" },
  { id: 5, item: "Sosis" },
];

export default function TodoDetail() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openAddList, setOpenAddList] = useState<boolean>(false);

  const { state } = useLocation();
  const open = Boolean(anchorEl);
  const handleOpenModal = () => {
    setOpenDelete(true);
  };
  const onCloseModal = () => {
    setOpenDelete(false);
  };
  const handleOpenAddList = () => {
    setOpenAddList(true);
  };
  const onCloseListModal = () => {
    setOpenAddList(false);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };
  const sortOlder = () => {
    setAnchorEl(null);
    setSelected(true);
  };
  const sortNewest = () => {
    setAnchorEl(null);
    setSelected(true);
  };
  const sortAZ = () => {
    setAnchorEl(null);
    setSelected(true);
  };
  const sortZA = () => {
    setAnchorEl(null);
    setSelected(true);
  };
  const sortUndone = () => {
    setAnchorEl(null);
    setSelected(true);
  };
  return (
    <div>
      {/* navbar section */}
      <Navbar />
      {/* title section */}
      <Titlebar
        type={"tododetail"}
        todo={listTodo.length > 0 ? true : false}
        handleClick={handleClick}
        handleOpenAddTodo={handleOpenAddList}
        nameTodo={state as string}
      />
      {/* main content */}
      <Grid sx={styles.mainContentContainer}>
        <Grid container display={"column"} justifyContent={"center"}>
          {listTodo.length > 0 ? (
            listTodo.map((todo) => {
              return (
                <Grid
                  sx={{
                    backgroundColor: "#ffffff",
                    width: 1000,
                    height: 80,
                    boxShadow: 2,
                    borderRadius: "10px",
                    display: "flex",
                    my: 1,
                    alignItems: "center",
                  }}
                  key={todo.id}
                >
                  <Grid
                    container
                    display={"flex"}
                    alignItems="center"
                    justifyContent={"space-between"}
                    mx={4}
                  >
                    <Grid display={"flex"} gap={2} alignItems="center">
                      <Checkbox
                        sx={{ borderColor: "#4F4F4F", borderWidth: 0.5 }}
                        checked={true}
                      />
                      <ColoredDot color={"#43C4E3"} size={9} />
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: 20,
                          textTransform: "capitalize",
                        }}
                      >
                        {todo.item}
                      </Typography>
                      <Grid sx={{ cursor: "pointer" }}>
                        <SvgIcon icon={PencilIcon} height={"25"} width={"25"} />
                      </Grid>
                    </Grid>
                    <Tooltip title="delete list" arrow placement="top">
                      <Grid
                        sx={{ cursor: "pointer" }}
                        onClick={handleOpenModal}
                      >
                        <SvgIcon icon={trashIcon} height={"23"} width={"23"} />
                      </Grid>
                    </Tooltip>
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <img
              alt="no activity images"
              src={NoTodoImages}
              width={"60%"}
              height={"60%"}
            />
          )}
        </Grid>
      </Grid>
      {/* dropdown menu */}
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        TransitionComponent={Fade}
        sx={{ "& .MuiPaper-root": { minWidth: 235 } }}
      >
        <MenuItem
          onClick={sortNewest}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid>
            <ListItemIcon>
              <SvgIcon icon={TerbaruIcon} height={"20"} width={"20"} />
            </ListItemIcon>
            Terbaru
          </Grid>
          {selected === true && (
            <ListItemIcon>
              <SvgIcon icon={selectedIcon} height={"20"} width={"20"} />
            </ListItemIcon>
          )}
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={sortOlder}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid>
            <ListItemIcon>
              <SvgIcon icon={TerlamaIcon} height={"20"} width={"20"} />
            </ListItemIcon>
            Terlama
          </Grid>
          {selected === true && (
            <ListItemIcon>
              <SvgIcon icon={selectedIcon} height={"20"} width={"20"} />
            </ListItemIcon>
          )}
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={sortAZ}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid>
            <ListItemIcon>
              <SvgIcon icon={AzIcon} height={"20"} width={"20"} />
            </ListItemIcon>
            A - Z
          </Grid>
          {selected === true && (
            <ListItemIcon>
              <SvgIcon icon={selectedIcon} height={"20"} width={"20"} />
            </ListItemIcon>
          )}
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={sortZA}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid>
            <ListItemIcon>
              <SvgIcon icon={ZaIcon} height={"20"} width={"20"} />
            </ListItemIcon>
            Z - A
          </Grid>
          {selected === true && (
            <ListItemIcon>
              <SvgIcon icon={selectedIcon} height={"20"} width={"20"} />
            </ListItemIcon>
          )}
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={sortUndone}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid>
            <ListItemIcon>
              <SvgIcon icon={UndoneIcon} height={"20"} width={"20"} />
            </ListItemIcon>
            Belum Selesai
          </Grid>
          {selected === true && (
            <ListItemIcon>
              <SvgIcon icon={selectedIcon} height={"20"} width={"20"} />
            </ListItemIcon>
          )}
        </MenuItem>
      </Menu>
      <ConfirmationModal
        open={openDelete}
        closeModal={onCloseModal}
        title={"meeting dengan client"}
      />
      <AddItemModal open={openAddList} closeModal={onCloseListModal} />
    </div>
  );
}
