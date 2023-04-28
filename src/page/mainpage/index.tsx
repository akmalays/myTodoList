import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, Tooltip, Typography } from "@mui/material";

import trashIcon from "../../assets/icons/todo-item-delete-button.svg";
import NoActivityImages from "../../assets/images/activity-empty-state.svg";
import AlertSnackbar from "../../components/alert_snackbar/AlertSnackbar";
import ConfirmationModal from "../../components/confirmation_modal/ConfirmationModal";
import SvgIcon from "../../components/icon/Icon";
import Navbar from "../../components/navbar/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import {
  deleteActivity,
  getAllActivity,
  postDefaultActivity,
} from "../../custom_hooks/api/activity/api";
import { IGetActivity } from "../../custom_hooks/api/activity/types";
import { convertDate } from "../../custom_hooks/utils/utils";
import { styles } from "../../theme/globalstyles";

export default function MainPage() {
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [allActivityValue, setAllActivityValue] = useState<IGetActivity[]>([]);
  const [id, setId] = useState<number | undefined>(undefined);
  const [title, setTitle] = useState<string>("");

  const navigate = useNavigate();
  const toTodoDetail = (id: number, title: string) => {
    navigate(`/todo_detail/${id}`, {
      state: title,
    });
  };

  const isOpenModalDelete = (id: number | undefined, title: string) => {
    setOpenModalDelete(true);
    setId(id);
    setTitle(title);
  };
  const onCloseModalDelete = () => {
    setOpenModalDelete(false);
  };
  const addNewActivity = async () => {
    await postDefaultActivity();
    fetchAllActivity();
  };
  const deleteMainActivity = async (id: number | undefined) => {
    await deleteActivity(id);
    fetchAllActivity();
    setOpenModalDelete(false);
  };

  const fetchAllActivity = async () => {
    try {
      const response = await getAllActivity();
      setAllActivityValue(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllActivity();
  }, []);

  return (
    <div>
      {/* navbar section */}
      <Navbar />
      {/* title section */}
      <Titlebar handleClick={addNewActivity} />
      {/* main content */}
      <Grid sx={styles.mainContentContainer}>
        <Grid
          container
          sx={{
            maxWidth: 1000,
            display: "flex",
            gap: 2,
          }}
        >
          {/* with data */}
          {allActivityValue.length > 0 ? (
            allActivityValue.map((todo) => {
              return (
                <Grid
                  sx={{
                    backgroundColor: "#ffffff",
                    width: 235,
                    height: 235,
                    boxShadow: 5,
                    borderRadius: "10px",
                  }}
                  key={todo.id}
                >
                  <Grid
                    p={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Tooltip
                      title="check todolist detail"
                      arrow
                      placement="top"
                    >
                      <Typography
                        onClick={() => toTodoDetail(todo.id, todo.title)}
                        sx={{
                          fontWeight: "bold",
                          fontSize: 18,
                          flexBasis: 170,
                          textTransform: "capitalize",
                          "&:hover": {
                            color: "#16ABF8",
                            textDecoration: "underline",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {todo.title}
                      </Typography>
                    </Tooltip>
                    <Grid display="flex" justifyContent={"space-between"}>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: 14,
                          color: "#888888",
                          textTransform: "capitalize",
                        }}
                      >
                        {convertDate(todo.created_at)}
                      </Typography>
                      <Tooltip title="delete activity" arrow placement="top">
                        <Grid
                          sx={{ cursor: "pointer" }}
                          onClick={() => isOpenModalDelete(todo.id, todo.title)}
                        >
                          <SvgIcon
                            icon={trashIcon}
                            height={"23"}
                            width={"23"}
                          />
                        </Grid>
                      </Tooltip>
                    </Grid>
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
                cursor: "pointer",
              }}
            >
              <img
                alt="no activity images"
                src={NoActivityImages}
                width={"100%"}
                height={"100%"}
              />
            </Grid>
          )}
          {/* alert */}
          <AlertSnackbar caption={"berhasil hapus task!"} isActive={false} />
        </Grid>

        <ConfirmationModal
          open={openModalDelete}
          closeModal={onCloseModalDelete}
          title={title}
          onClick={() => deleteMainActivity(id)}
        />
      </Grid>
    </div>
  );
}
