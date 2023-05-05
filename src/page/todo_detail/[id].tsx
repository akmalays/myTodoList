import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
import AlertSnackbar from "../../components/alert_snackbar/AlertSnackbar";
import ColoredDot from "../../components/colored_dot/ColoredDot";
import ConfirmationModal from "../../components/confirmation_modal/ConfirmationModal";
import SvgIcon from "../../components/icon/Icon";
import Navbar from "../../components/navbar/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import {
  changeActiveTodos,
  deleteTodos,
  getAllTodos,
  getTodosById,
} from "../../custom_hooks/api/todo/api";
import { IGetTodo } from "../../custom_hooks/api/todo/types";
import { getColor } from "../../custom_hooks/utils/utils";
import { styles } from "../../theme/globalstyles";

export default function TodoDetail() {
  const [todoItem, setTodoItem] = useState<IGetTodo[]>([]);
  const [todoItemById, setTodoItemById] = useState<IGetTodo | null>();
  const [clickedId, setClickedId] = useState<number | null>();
  const [activityId, setActivityId] = useState<string>();
  const [todosName, setTodosName] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openAddList, setOpenAddList] = useState<boolean>(false);

  const { id } = useParams();
  const open = Boolean(anchorEl);

  const handleOpenModalDelete = (id: number, todosName: string) => {
    setOpenDelete(true);
    setClickedId(id);
    setTodosName(todosName);
  };

  const changeActiveValue = async (todoId: number) => {
    const response = await getTodosById(todoId);
    await changeActiveTodos(response as IGetTodo);
    getAllTodoItems(id as string);
  };

  const onCloseModal = () => {
    setOpenDelete(false);
  };
  const handleOpenAddList = () => {
    setOpenAddList(true);
  };
  const handleOpenEditList = async (todoId: number) => {
    setOpenAddList(true);
    const response = await getTodosById(todoId);
    setTodoItemById(response);
    setClickedId(todoId);
  };
  const onCloseListModal = () => {
    setTodoItemById(null);
    setOpenAddList(false);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  const changeActiveState = (idFilter: any) => {
    let initialFilterData: any = filterData;
    for (const i in initialFilterData) {
      let { filterId, is_active } = initialFilterData[i];
      if (filterId === idFilter) {
        is_active = true;
      } else {
        is_active = false;
      }
    }
  };

  const sortOlder = async (todoItem: IGetTodo[]) => {
    const todoSorted = await todoItem.sort((a, b) => a.id - b.id);
    setTodoItem(todoSorted);
    setAnchorEl(null);
    changeActiveState("oldest");
  };

  const sortNewest = (todoItem: IGetTodo[]) => {
    const todoSorted = todoItem.sort((b, a) => a.id - b.id);
    setTodoItem(todoSorted);
    setAnchorEl(null);
  };
  const sortAZ = (todoItem: IGetTodo[]) => {
    const todoSorted = todoItem.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      } else if (a.title < b.title) {
        return 1;
      } else {
        return 0;
      }
    });
    setTodoItem(todoSorted);
    setAnchorEl(null);
  };
  const sortZA = (todoItem: IGetTodo[]) => {
    const todoSorted = todoItem.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
    setTodoItem(todoSorted);
    setAnchorEl(null);
  };
  const sortUndone = (todoItem: IGetTodo[]) => {
    const filteredData = todoItem.filter((item) => item.is_active === 0);
    const sortedData = todoItem.filter((item) => item.is_active === 1);
    const todoSorted = [...sortedData, ...filteredData];
    setTodoItem(todoSorted);
    setAnchorEl(null);
  };

  let filterData = [
    {
      id: 1,
      name: "Terbaru",
      filterId: "newest",
      icon: TerbaruIcon,
      onClickFunc: sortNewest,
      is_actve: false,
    },
    {
      id: 2,
      name: "Terlama",
      filterId: "oldest",
      icon: TerlamaIcon,
      onClickFunc: sortOlder,
      is_actve: false,
    },
    {
      id: 3,
      name: "A - Z",
      filterId: "ascending",
      icon: AzIcon,
      onClickFunc: sortZA,
      is_actve: false,
    },
    {
      id: 4,
      name: "Z - A",
      filterId: "descending",
      icon: ZaIcon,
      onClickFunc: sortAZ,
      is_actve: false,
    },
    {
      id: 5,
      name: "Belum Selesai",
      filterId: "notdone",
      icon: UndoneIcon,
      onClickFunc: sortUndone,
      is_actve: false,
    },
  ];

  console.log("cekk filter data", filterData);

  const getAllTodoItems = async (id: string) => {
    try {
      const response = await getAllTodos(id);
      setTodoItem(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getAllTodoItems(id);
      setActivityId(id);
    }
  }, [id]);

  const deleteTodosItem = async (clickedId: number) => {
    await deleteTodos(clickedId);
    getAllTodoItems(id as string);
    setOpenDelete(false);
  };

  return (
    <div>
      {/* navbar section */}
      <Navbar />
      {/* title section */}
      <Titlebar
        type={"tododetail"}
        activityId={id}
        todo={todoItem.length > 0 ? true : false}
        handleClick={handleClick}
        handleOpenAddTodo={handleOpenAddList}
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
                        onChange={() => changeActiveValue(todo.id)}
                      />
                      <ColoredDot color={getColor(todo.priority)} size={9} />
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: 20,
                          textDecoration:
                            todo.is_active === 0 ? "line-through" : "none",
                        }}
                      >
                        {todo.title}
                      </Typography>
                      <Grid
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleOpenEditList(todo.id)}
                      >
                        <SvgIcon icon={PencilIcon} height={"25"} width={"25"} />
                      </Grid>
                    </Grid>
                    <Tooltip title="delete list" arrow placement="top">
                      <Grid
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                          handleOpenModalDelete(todo.id, todo.title)
                        }
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
              data-cy="todo-empty-state"
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "auto",
              }}
            >
              <img
                alt="no activity images"
                src={NoTodoImages}
                width={"100%"}
                height={"100%"}
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
        {filterData.map((filter: any) => {
          return (
            <div>
              <MenuItem
                onClick={() => filter.onClickFunc(todoItem)}
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
                {/* {clickedIndex[index] ? (
                  <ListItemIcon>
                    <SvgIcon icon={selectedIcon} height={"20"} width={"20"} />
                  </ListItemIcon>
                ) : null} */}
              </MenuItem>
              <Divider />
            </div>
          );
        })}
      </Menu>
      <ConfirmationModal
        open={openDelete}
        closeModal={onCloseModal}
        title={todosName}
        onClick={() => deleteTodosItem(clickedId as number)}
      />
      <AddItemModal
        open={openAddList}
        closeModal={onCloseListModal}
        getAllTodoItems={() => getAllTodoItems(id as string)}
        activityId={activityId as string}
        setOpenAddList={setOpenAddList}
        todoItemById={todoItemById as IGetTodo}
      />
      {/* alert */}
      <AlertSnackbar caption={"berhasil hapus task!"} isActive={false} />
    </div>
  );
}
