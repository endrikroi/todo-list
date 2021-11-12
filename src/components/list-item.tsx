import React, { FunctionComponent } from "react";
import { DeleteButton, FormattedDiv, Input, ListItemText } from "./styles";
import { Item } from "./todo-list";

export const ListItem: FunctionComponent<{
  item: Item;
  onDeleteClick: (id: string) => void;
  onEdit: (id: string, value: string) => void;
}> = ({ item, onDeleteClick, onEdit }) => {
  const [isOnEdit, setIsOnEdit] = React.useState(false);

  const [editValue, setEditValue] = React.useState("");

  const handleDelete = () => {
    onDeleteClick(item.id);
  };

  const handleTextClick = () => {
    setEditValue(item.value);
    setIsOnEdit(true);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.keyCode === 13) {
      onEdit(item.id, editValue);
      setIsOnEdit(false);
    }
  };

  return (
    <li>
      <FormattedDiv>
        {isOnEdit && (
          <Input
            value={editValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        )}
        {!isOnEdit && (
          <ListItemText onClick={handleTextClick}>{item.value}</ListItemText>
        )}
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </FormattedDiv>
    </li>
  );
};
