import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

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
import { getAllTodos } from "../../custom_hooks/api/todo/api";
import { IGetTodo } from "../../custom_hooks/api/todo/types";
import { getColor } from "../../custom_hooks/utils/utils";
import { styles } from "../../theme/globalstyles";

const listTodo = [
  { id: 1, item: "TelurAyam" },
  { id: 2, item: "Beras 5kg" },
  { id: 3, item: "Daging" },
  { id: 4, item: "Micin" },
  { id: 5, item: "Sosis" },
];

export default function TodoDetail() {
  const [todoItem, setTodoItem] = useState<IGetTodo[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openAddList, setOpenAddList] = useState<boolean>(false);
  const [clickedIndex, setClickedIndex] = useState<{ [key: number]: boolean }>(
    {}
  );

  //handle clicked filter
  const handleClickFilter = (index: number) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  const { id } = useParams();
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
  const sortOlder = (index: number) => {
    setAnchorEl(null);
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  const sortNewest = (index: number) => {
    setAnchorEl(null);
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  const sortAZ = (index: number) => {
    setAnchorEl(null);
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  const sortZA = (index: number) => {
    setAnchorEl(null);
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  const sortUndone = (index: number) => {
    setAnchorEl(null);
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const filterData = [
    { id: 1, name: "Terbaru", icon: TerbaruIcon, onClickFunc: sortNewest },
    { id: 2, name: "Terlama", icon: TerlamaIcon, onClickFunc: sortOlder },
    { id: 3, name: "A - Z", icon: AzIcon, onClickFunc: sortZA },
    { id: 4, name: "Z - A", icon: ZaIcon, onClickFunc: sortAZ },
    {
      id: 5,
      name: "Belum Selesai",
      icon: UndoneIcon,
      onClickFunc: sortUndone,
    },
  ];

  const getAllTodoItems = async (id: string) => {
    const response = await getAllTodos(id);
    setTodoItem(response);
  };

  useEffect(() => {
    if (id) {
      getAllTodoItems(id);
    }
  }, [id]);

  console.log(todoItem, "todos");
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
          {todoItem.length > 0 ? (
            todoItem.map((todo) => {
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
                        checked={todo.is_active === 0 ? true : false}
                      />
                      <ColoredDot color={getColor(todo.priority)} size={9} />
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: 20,
                          textTransform: "capitalize",
                          textDecoration:
                            todo.is_active === 0 ? "line-through" : "none",
                        }}
                      >
                        {todo.title}
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
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "auto",
              }}
            >
              <img
                alt="no activity images"
                src={NoTodoImages}
                width={"60%"}
                height={"60%"}
              />
            </Grid>
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
        {filterData.map((filter, index) => {
          return (
            <div>
              <MenuItem
                onClick={() => filter.onClickFunc(index)}
                sx={{ display: "flex", justifyContent: "space-between" }}
                key={filter.id}
              >
                <Grid>
                  <ListItemIcon>
                    <SvgIcon
                      icon={filter.icon as string}
                      height={"20"}
                      width={"20"}
                    />
                  </ListItemIcon>
                  {filter.name}
                </Grid>
                {clickedIndex[index] ? (
                  <ListItemIcon>
                    <SvgIcon icon={selectedIcon} height={"20"} width={"20"} />
                  </ListItemIcon>
                ) : null}
              </MenuItem>
              <Divider />
            </div>
          );
        })}
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
