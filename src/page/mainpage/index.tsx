import { useNavigate } from "react-router-dom";

import { Grid, Typography } from "@mui/material";

import trashIcon from "../../assets/icons/todo-item-delete-button.svg";
import NoActivityImages from "../../assets/images/activity-empty-state.svg";
import AlertSnackbar from "../../components/alert_snackbar/AlertSnackbar";
import ConfirmationModal from "../../components/confirmation_modal/ConfirmationModal";
import SvgIcon from "../../components/icon/Icon";
import Navbar from "../../components/navbar/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import { styles } from "../../theme/globalstyles";

export default function MainPage() {
  const todoListData = [
    { id: 1, title: "daftar belanja bulanan", time: "5 oktober 2023" },
    { id: 2, title: "paperworks home work", time: "5 oktober 2023" },
    { id: 3, title: "gym time", time: "5 oktober 2023" },
    { id: 4, title: "meditation time", time: "5 oktober 2023" },
    { id: 5, title: "iftar", time: "5 oktober 2023" },
  ];

  const navigate = useNavigate();
  const toTodoDetail = (id: number, title: string) => {
    navigate(`/todo_detail/${id}`, {
      state: title,
    });
  };

  return (
    <div>
      {/* navbar section */}
      <Navbar />
      {/* title section */}
      <Titlebar />
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
          {todoListData.length > 0 ? (
            todoListData.map((todo) => {
              return (
                <Grid
                  sx={{
                    backgroundColor: "#ffffff",
                    width: 235,
                    height: 235,
                    boxShadow: 5,
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  key={todo.id}
                  onClick={() => toTodoDetail(todo.id, todo.title)}
                >
                  <Grid
                    p={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: 18,
                        flexBasis: 170,
                        textTransform: "capitalize",
                      }}
                    >
                      {todo.title}
                    </Typography>
                    <Grid display="flex" justifyContent={"space-between"}>
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: 14,
                          color: "#888888",
                          textTransform: "capitalize",
                        }}
                      >
                        {todo.time}
                      </Typography>
                      <Grid sx={{ cursor: "pointer" }}>
                        <SvgIcon icon={trashIcon} height={"23"} width={"23"} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <img
              alt="no activity images"
              src={NoActivityImages}
              width={"50%"}
              height={"50%"}
            />
          )}
        </Grid>
        {/* <AlertSnackbar caption={"Activity Berhasil Dihapus"} /> */}
        {/* <ConfirmationModal open={true} title={`"meeting dengan client"`} /> */}
      </Grid>
    </div>
  );
}
