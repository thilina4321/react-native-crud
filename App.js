import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import NewItem from "./screens/NewItem";
import ItemList from "./screens/ItemList";

const App = () => {
  const [buttonType, setButtonType] = useState("Add Item");
  const [itemList, setItemList] = useState([]);
  const [isList, setIsList] = useState(true);
  const [id, setId] = useState("");
  const [selectItem, setSelectItem] = useState("");

  const createButtonClick = () => {
    setIsList(false);
  };

  const addItemHandler = (value, id) => {
    if (!value) {
      return;
    }

    if (!id) {
      setItemList((items) => [
        ...items,
        { id: items.length + 1, title: value },
      ]);
    } else {
      const availableItem = [...itemList];
      const findItemIndex = availableItem.findIndex((item) => item.id === id);
      if (findItemIndex != -1) {
        availableItem[findItemIndex] = { id: id, title: value };
        setItemList(availableItem);
      }
    }
    setIsList(true);
    setId("");
    setButtonType("Add Item");
    setSelectItem("");
  };

  const cancelHandler = () => {
    setIsList(true);
    setId("");
    setButtonType("Add Item");
    setSelectItem("");
  };

  const setHandler = (id) => {
    setIsList(false);
    setButtonType("Update Item");
    setId(id);
    const findItem = itemList.find((item) => item.id == id);
    setSelectItem(findItem);
  };

  const deleteHandler = (id) => {
    const availableItem = [...itemList];
    const newItems = availableItem.filter((item) => item.id !== id);
    setItemList(newItems);
  };

  return (
    <View style={styles.container}>
      {isList && (
        <View style={styles.btn}>
          <Button onPress={createButtonClick} title="Create Item" />
        </View>
      )}
      {isList ? (
        <ItemList deleteHandler={deleteHandler} setHandler={setHandler} listItems={itemList} />
      ) : (
        <NewItem
          id={id}
          selectItem={selectItem}
          addItemHandler={addItemHandler}
          buttonType={buttonType}
          cancleHandler={cancelHandler}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    margin: "5%",
  },
  btn: {
    margin: 10,
  },
});
