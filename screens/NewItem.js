import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const NewItem = (props) => {
  const {
    buttonType,
    addItemHandler,
    id = null,
    selectItem = "",
    cancleHandler,
  } = props;
  const [value, setValue] = useState(selectItem ? selectItem.title : "");
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={(e) => setValue(e)}
        style={styles.inputComponent}
        placeholder="Enter Item Name"
      />
      <View style={styles.btn}>
        <Button onPress={() => addItemHandler(value, id)} title={buttonType} />
      </View>
      <Button onPress={cancleHandler} title={"Cancle"} />
    </View>
  );
};

export default NewItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: "100%",
  },
  inputComponent: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    margin: 10,
  },
});
