/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import {
  Dialog,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import closeIcon from "../../assets/icons/modal-add-close-button.svg";
import { editTodos, postTodos } from "../../custom_hooks/api/todo/api";
import { IGetTodo } from "../../custom_hooks/api/todo/types";
import ColoredDot from "../colored_dot/ColoredDot";
import SvgIcon from "../icon/Icon";
import RoundedButton from "../rounded_button/RoundedButton";

interface AddItemModalProps {
  open: boolean;
  closeModal?: () => void;
  activityId: string;
  getAllTodoItems: any;
  setOpenAddList: (active: boolean) => void;
  todoItemById?: IGetTodo;
}

const prioriyData = [
  {
    id: 1,
    name: "Very High",
    color: "#ED4C5C",
    value: "very-high",
  },
  {
    id: 2,
    name: "High",
    color: "#F8A541",
    value: "high",
  },
  {
    id: 3,
    name: "Medium",
    color: "#00A790",
    value: "normal",
  },
  {
    id: 4,
    name: "Low",
    color: "#428BC1",
    value: "low",
  },
  {
    id: 5,
    name: "Very Low",
    color: "#8942C1",
    value: "very-low",
  },
];
export default function AddItemModal(props: AddItemModalProps) {
  const {
    open,
    closeModal,
    activityId,
    getAllTodoItems,
    setOpenAddList,
    todoItemById,
  } = props;

  const [todoNameValue, setTodoNameValue] = useState<string>("");
  const [priorityStatus, setPriorityStatus] = useState<string>("very-high");

  const handleTodoNameValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoNameValue(event.target.value);
  };
  const handlePriorityStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriorityStatus(event.target.value);
  };

  const addNewTodos = async () => {
    await postTodos(activityId, priorityStatus, todoNameValue);
    getAllTodoItems(activityId as string);
    setTodoNameValue("");
    setPriorityStatus("very-high");
    setOpenAddList(false);
  };
  const editTodosValue = async () => {
    await editTodos(todoItemById as IGetTodo, priorityStatus, todoNameValue);
    getAllTodoItems(activityId as string);
    setOpenAddList(false);
  };

  useEffect(() => {
    if (todoItemById?.priority) {
      setTodoNameValue(todoItemById?.title as string);
      setPriorityStatus(todoItemById?.priority as string);
    }
    if (todoItemById === null) {
      setTodoNameValue("");
      setPriorityStatus("very-high");
    }
  }, [todoItemById?.priority]);
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
          style: { borderRadius: "10px", width: 830, height: 430 },
        }}
      >
        <Grid
          data-cy="modal-add-title"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 4,
            py: 2.5,
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
            Tambah List Item
          </Typography>
          <Grid
            data-cy="modal-add-close-button"
            sx={{ cursor: "pointer" }}
            onClick={closeModal}
          >
            <SvgIcon icon={closeIcon} height={"25"} width={"25"} />
          </Grid>
        </Grid>
        <Divider />
        <Grid data-cy="modal-add-name-title" sx={{ px: 4, pt: 6, pb: 2 }}>
          <Typography sx={{ fontSize: 12, fontWeight: "600" }}>
            NAMA LIST ITEM
          </Typography>
          <Grid sx={{ pt: 1, pb: 3 }}>
            <TextField
              data-cy="modal-add-name-input"
              size="medium"
              fullWidth
              placeholder="Tambahkan nama list item"
              sx={{
                "& input::placeholder": {
                  fontSize: 16,
                  fontFamily: "Poppins",
                  color: "#4F4F4F",
                },
                "& input": {
                  fontSize: 16,
                  fontFamily: "Poppins",
                },
              }}
              value={todoNameValue}
              onChange={handleTodoNameValue}
            />
          </Grid>
          <Typography
            data-cy="modal-add-priority-title"
            sx={{ fontSize: 12, fontWeight: "600" }}
          >
            PRIORITY
          </Typography>
          <Grid sx={{ pt: 1, pb: 2 }}>
            <TextField
              data-cy="modal-add-priority-dropdown"
              size="medium"
              sx={{ width: 200 }}
              select
              type="email"
              value={priorityStatus}
              onChange={handlePriorityStatus}
            >
              {prioriyData.map((val) => {
                return (
                  <MenuItem
                    value={val.value}
                    key={val.id}
                    data-cy="modal-add-priority-item"
                  >
                    <Grid display="flex" gap={2} px={1}>
                      <Grid sx={{ pt: 0.5 }}>
                        <ColoredDot color={val.color} size={14} />
                      </Grid>
                      <Typography> {val.name}</Typography>
                    </Grid>
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          sx={{ display: "flex", justifyContent: "flex-end", px: 4, py: 2 }}
        >
          <RoundedButton
            data-cy="modal-add-save-button"
            roundedButtonProps={{
              height: 54,
              width: 150,
              type: "no icon",
              title: "Simpan",
              color: "#16ABF8",
              fontWeight: "600",
              isDisabled: todoNameValue
                ? todoNameValue.length > 0
                  ? undefined
                  : false
                : true,
              onClick: todoItemById === null ? addNewTodos : editTodosValue,
            }}
          />
        </Grid>
      </Dialog>
    </div>
  );
}
