import * as React from 'react';
import { useState } from 'react';

import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface IActionItem {
  title: string;
  description?: string;
  iconElement?: any;
  color?: string;
  backgroundColor?: string;
  avoidClosing?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const ActionItem = ({
  title,
  description,
  iconElement,
  color,
  backgroundColor,
  avoidClosing,
  onPress,
}: IActionItem) => {
  const [touchStartLocationY, setTouchStartLocationY] = useState(0);

  const onTouchStart = (event: GestureResponderEvent) => {
    setTouchStartLocationY(event.nativeEvent.locationY);
  };

  const onTouchEnd = (event: GestureResponderEvent) => {
    if (event.nativeEvent.locationY !== touchStartLocationY) {
      event.stopPropagation();
      return;
    }

    if (avoidClosing) {
      event.stopPropagation();
      onPress && onPress(event);
      return;
    }

    setTimeout(() => {
      onPress && onPress(event);
    }, 300);
  };

  return (
    <TouchableOpacity>
      <View
        style={[styles.container, !!backgroundColor && { backgroundColor }]}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {!!iconElement && <View style={styles.icon}>{iconElement}</View>}
        <View style={styles.info}>
          <Text style={[styles.title, { color }]} numberOfLines={1}>
            {title}
          </Text>
          <Text style={[styles.description, { color }]} numberOfLines={1}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  icon: {
    flex: 0,
    width: 30,
    height: 30,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 18,
  },
  description: {
    color: '#000',
    fontSize: 14,
  },
});

export default ActionItem;
