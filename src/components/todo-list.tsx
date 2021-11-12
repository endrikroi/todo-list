import React from "react";
import { v4 } from "uuid";
import "../App.css";
import { ListItem } from "./list-item";
import { Button, Input, ListDiv, Title, TopMarginedDiv } from "./styles";

export type Item = {
  id: string;
  value: string;
};

const TodoList = () => {
  const [items, setItems] = React.useState<Item[]>([]);

  const [itemToAdd, setItemToAdd] = React.useState("");

  const handleDelete = (id: string) => {
    const filteredItems = items.filter((i) => i.id !== id);
    setItems(filteredItems);
  };

  const handleClick = () => {
    if (!itemToAdd) {
      return;
    }
    setItems([...items, { value: itemToAdd, id: v4() }]);
    setItemToAdd("");
  };

  const handleChange = (e: any) => {
    setItemToAdd(e.target.value);
  };

  const handleEdit = (id: string, value: string) => {
    const newItems = items.map((i) =>
      i.id !== id ? i : { id: i.id, value: value }
    );
    setItems(newItems);
  };

  const newNames = items.map((n) => (
    <ListItem
      key={n.id}
      onDeleteClick={handleDelete}
      onEdit={handleEdit}
      item={n}
    />
  ));

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <>
      <TopMarginedDiv />
      <Title> ToDo List</Title>
      <TopMarginedDiv />
      <ListDiv>
        <TopMarginedDiv />
        <div>
          <Input
            value={itemToAdd}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your item here"
          />
          <Button disabled={!itemToAdd} onClick={handleClick}>
            Add
          </Button>
          <ul>{newNames}</ul>
        </div>
      </ListDiv>
    </>
  );
};

export default TodoList;
