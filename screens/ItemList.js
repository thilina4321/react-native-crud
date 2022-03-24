import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const ItemList = (props) => {
  const { listItems = [], setHandler, deleteHandler } = props;
  return (
    <View style={styles.items}>
      <FlatList
        data={listItems}
        renderItem={(itemData) => (
          <TouchableOpacity
            onLongPress={() => deleteHandler(itemData.item.id)}
            onPress={() => setHandler(itemData.item.id)}
          >
            <View style={styles.item}>
              <Text> {itemData.item.title} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  items: {
    width: "100%",
  },
  item: {
    width: "100%",
    elevation: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
});
