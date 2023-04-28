import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Grid, TextField, Typography } from "@mui/material";

import sortIcon from "../../assets/icons/tabler_arrows-sort.svg";
import BackIcon from "../../assets/icons/todo-back-button.svg";
import PencilIcon from "../../assets/icons/todo-title-edit-button.svg";
import {
  editActivityName,
  getActivityById,
} from "../../custom_hooks/api/activity/api";
import SvgIcon from "../icon/Icon";
import RoundedButton from "../rounded_button/RoundedButton";

interface TitlebarProps {
  type?: string;
  todo?: boolean;
  handleClick?: any;
  handleOpenAddTodo?: any;
  activityId?: string;
}

export default function Titlebar(props: TitlebarProps) {
  const { type, todo, handleClick, handleOpenAddTodo, activityId } = props;
  const [activityName, setActivityName] = useState<string>("");
  const navigate = useNavigate();
  const backToDashboard = () => {
    navigate("/");
  };

  const getTodoNameById = async (activityId: string) => {
    try {
      const nameTodoById = await getActivityById(activityId);
      setActivityName(nameTodoById.title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodoNameById(activityId as string);
  }, [activityId]);

  const handleChangeActivityName = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    await setActivityName(event.target.value);
    await editActivityName(activityId as string, event.target.value);
    getTodoNameById(activityId as string);
  };
  return (
    <div>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mx: "15%",
          mt: 5,
        }}
      >
        {type === "tododetail" ? (
          <>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Grid
                data-cy="todo-back-button"
                sx={{ cursor: "pointer" }}
                onClick={backToDashboard}
              >
                <SvgIcon icon={BackIcon} height={"28"} width={"28"} />
              </Grid>
              <TextField
                data-cy="todo-title"
                size="medium"
                value={activityName}
                onChange={handleChangeActivityName}
                inputProps={{
                  style: {
                    fontSize: 40,
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  },
                }}
                sx={{
                  width: activityName.length > 5 ? "auto" : 300,
                  "& fieldset": { border: "none" },
                }}
              />
              <Grid
                data-cy="todo-title-edit-button"
                sx={{
                  cursor: "pointer",
                  ml: activityName.length > 5 ? -10 : -7,
                  zIndex: 100,
                }}
              >
                <SvgIcon icon={PencilIcon} height={"25"} width={"25"} />
              </Grid>
            </Grid>
            <Grid display={"flex"} gap={3}>
              {todo && (
                <Grid
                  data-cy="todo-sort-button"
                  sx={{
                    cursor: "pointer",
                    border: "solid 1px",
                    borderColor: "#E5E5E5",
                    borderRadius: "50%",
                    width: 54,
                    height: 54,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={handleClick}
                >
                  <SvgIcon icon={sortIcon} height={"24"} width={"24"} />
                </Grid>
              )}
              <RoundedButton
                data-cy="todo-add-button"
                roundedButtonProps={{
                  height: 54,
                  width: 159,
                  title: "Tambah",
                  color: "#16ABF8",
                  onClick: handleOpenAddTodo,
                }}
              />
            </Grid>
          </>
        ) : (
          <>
            <Typography
              sx={{ fontWeight: "bold", fontSize: 36 }}
              data-cy="activity-title"
            >
              Activity
            </Typography>
            <RoundedButton
              data-cy="activity-add-button"
              roundedButtonProps={{
                height: 54,
                width: 159,
                title: "Tambah",
                color: "#16ABF8",
                onClick: handleClick,
              }}
            />
          </>
        )}
      </Grid>
    </div>
  );
}
