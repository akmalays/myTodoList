import { Checkbox, Grid, Typography } from "@mui/material";

import trashIcon from "../../assets/icons/todo-item-delete-button.svg";
import PencilIcon from "../../assets/icons/todo-title-edit-button.svg";
import NoTodoImages from "../../assets/images/todo-empty-state.svg";
import ColoredDot from "../../components/colored_dot";
import SvgIcon from "../../components/icon";
import Navbar from "../../components/navbar";
import Titlebar from "../../components/titlebar";
import { styles } from "../../theme/globalstyles";

const listTodo = [
  { id: 1, item: "TelurAyam" },
  { id: 2, item: "Beras 5kg" },
  { id: 3, item: "Daging" },
  { id: 4, item: "Micin" },
  { id: 5, item: "Sosis" },
];

export default function TodoDetail() {
  return (
    <div>
      {/* navbar section */}
      <Navbar />
      {/* title section */}
      <Titlebar type={"tododetail"} />
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
                      <ColoredDot color={"#43C4E3"} size={"9px"} />
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: 18,
                          textTransform: "capitalize",
                        }}
                      >
                        {todo.item}
                      </Typography>
                      <Grid sx={{ cursor: "pointer" }}>
                        <SvgIcon icon={PencilIcon} height={"25"} width={"25"} />
                      </Grid>
                    </Grid>
                    <Grid sx={{ cursor: "pointer" }}>
                      <SvgIcon icon={trashIcon} height={"23"} width={"23"} />
                    </Grid>
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
    </div>
  );
}
