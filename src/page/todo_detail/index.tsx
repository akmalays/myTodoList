import { Grid } from "@mui/material";

import NoTodoImages from "../../assets/images/todo-empty-state.svg";
import Navbar from "../../components/navbar";
import Titlebar from "../../components/titlebar";
import { styles } from "../../theme/globalstyles";

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
          <img
            alt="no activity images"
            src={NoTodoImages}
            width={"60%"}
            height={"60%"}
          />
        </Grid>
      </Grid>
    </div>
  );
}
