import {
  ActionItem,
  ActionSheet,
  Button,
  Text,
  Divider,
  ThemeProvider,
} from "@eduzz/houston-mobile-ui";
import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";

import deleteImage from "./assets/delete.png";
import notificationsOff from "./assets/notificationoff.png";

export default function App() {
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  const openActionSheet = () => {
    setActionSheetVisible(true);
  };

  const closeActionSheet = () => {
    setActionSheetVisible(false);
  };

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text size="xx-small">Houston Design System</Text>
        <Text size="x-small">Houston Design System</Text>
        <Text size="small">Houston Design System</Text>
        <Text size="normal">Houston Design System</Text>
        <Text size="medium">Houston Design System</Text>
        <Text size="large">Houston Design System</Text>
        <Text size="x-large">Houston Design System</Text>

        <Divider width={50} />

        <Text weight="light">Houston Design System</Text>
        <Text weight="regular">Houston Design System</Text>
        <Text weight="semibold">Houston Design System</Text>
        <Text weight="bold">Houston Design System</Text>

        <Divider width={50} />

        <Button title="ActionSheet" onPress={openActionSheet} />

        <ActionSheet
          backgroundColor="#212121"
          visible={actionSheetVisible}
          onRequestClose={closeActionSheet}
        >
          <ActionItem
            title="Excluir"
            avoidClosing
            description="Excluir esta notificação"
            color="#fff"
            iconElement={<Image style={styles.icon} source={deleteImage} />}
          />
          <ActionItem
            title="Desativar"
            description="Pare de receber notificações deste curso"
            color="#fff"
            iconElement={
              <Image style={styles.icon} source={notificationsOff} />
            }
          />
        </ActionSheet>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    tintColor: "#fff",
    width: "100%",
    height: "100%",
  },
});
