import { Grid, Typography } from "@mui/material";

import trashIcon from "../../assets/icons/todo-item-delete-button.svg";
import NoActivityImages from "../../assets/images/activity-empty-state.svg";
import SvgIcon from "../../components/icon";
import RoundedButton from "../../components/rounded_button";

export default function MainPage() {
  const todoListData = [
    { id: 1, title: "daftar belanja bulanan", time: "5 oktober 2023" },
    { id: 2, title: "paperworks home work", time: "5 oktober 2023" },
    { id: 3, title: "gym time", time: "5 oktober 2023" },
    { id: 4, title: "meditation time", time: "5 oktober 2023" },
    { id: 5, title: "iftar", time: "5 oktober 2023" },
  ];
  return (
    <div>
      {/* navbar section */}
      <Grid container sx={{ backgroundColor: "#16ABF8", height: 105 }}>
        <Grid
          item
          sx={{
            display: "flex",
            justifyItems: "flex-start",
            alignItems: "center",
            ml: "15%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 24,
              color: "#ffffff",
            }}
          >
            TO DO LIST APP
          </Typography>
        </Grid>
      </Grid>
      {/* title section */}

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mx: "15%",
          mt: 5,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: 36 }}>
          Activity
        </Typography>
        <RoundedButton />
      </Grid>
      {/* main content */}

      <Grid
        sx={{
          pt: 5,
          pb: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
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
                    boxShadow: 3,
                    borderRadius: "5px",
                  }}
                  key={todo.id}
                >
                  <Grid
                    p={2}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: 18,
                        flexBasis: 180,
                        textTransform: "capitalize",
                      }}
                    >
                      {todo.title}
                    </Typography>
                    <Grid display="flex" justifyContent={"space-between"}>
                      <Typography
                        sx={{
                          fontWeight: "normal",
                          fontSize: 14,
                          color: "#888888",
                          textTransform: "capitalize",
                        }}
                      >
                        {todo.time}
                      </Typography>
                      <SvgIcon icon={trashIcon} height={"20"} width={"20"} />
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
      </Grid>
    </div>
  );
}
