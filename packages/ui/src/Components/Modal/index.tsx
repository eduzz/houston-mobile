import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal as ReactNativeModal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

export interface ModalProps {
  visible: boolean;
  backgroundColor?: string;
  onRequestClose?: () => void;
  onFinishClosing?: () => void;
  children?: any;
}

const TARGET_OPACITY = 0.7;
const SCREEN_TARGET_OCCUPATION = 0.7;
const CLOSE_BAR_BORDER_RADIUS = 28;
const SCROLL_ANIMATION_TIME = 300;

const Modal = ({
  visible,
  backgroundColor = "#fff",
  onRequestClose,
  onFinishClosing,
  children,
}: ModalProps) => {
  const [localVisible, setLocalVisible] = useState(visible);
  const [normalizedOffsetY, setNormalizedOffsetY] = useState(0);
  const [distanceToTop, setDistanceToTop] = useState(CLOSE_BAR_BORDER_RADIUS);
  const [isScrollingTo, setIsScrollingTo] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (visible) {
      setLocalVisible(true);
    } else {
      if (scrollViewRef.current) {
        scrollToY(0);
        setTimeout(() => {
          setLocalVisible(false);
          onFinishClosing?.();
        }, SCROLL_ANIMATION_TIME);
      }
    }
  }, [visible, onFinishClosing]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const sheetHeight = getSheetHeight();
    const screenTargetOcupation = getScreenTargetOcupation();
    const fixedSheetHeight =
      sheetHeight < screenTargetOcupation ? sheetHeight : screenTargetOcupation;
    const _normalizedOffsetY =
      event.nativeEvent.contentOffset.y / fixedSheetHeight;

    setNormalizedOffsetY(_normalizedOffsetY > 1 ? 1 : _normalizedOffsetY);
    setDistanceToTop(getScreenHeight() - event.nativeEvent.contentOffset.y);
  };

  const onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (
      Platform.OS === "ios"
        ? (event.nativeEvent.velocity?.y || 0) < -1
        : (event.nativeEvent.velocity?.y || 0) > 1
    ) {
      onRequestClose?.();
      return;
    }

    const screenHeight = getScreenHeight();
    const screenTargetOcupation = getScreenTargetOcupation();
    const sheetHeight = getSheetHeight();
    const fixedSheetHeight =
      sheetHeight < screenTargetOcupation ? sheetHeight : screenTargetOcupation;

    if (event.nativeEvent.contentOffset.y < fixedSheetHeight / 2) {
      onRequestClose?.();
    } else {
      if (event.nativeEvent.contentOffset.y < screenHeight) {
        if (
          screenHeight - event.nativeEvent.contentOffset.y <
          (screenHeight - screenTargetOcupation) / 2
        ) {
          scrollToY(screenHeight);
        } else {
          scrollToY(screenTargetOcupation);
        }
      }
    }
  };

  const getSheetHeight = () => {
    return 58.7 * React.Children.count(children) + 130; // 58.7 = ActionItem height; 130 = closeBar (30) + footer (100);
  };

  const getScreenHeight = () => {
    return Dimensions.get("window").height;
  };

  const getScreenTargetOcupation = () => {
    return getScreenHeight() * SCREEN_TARGET_OCCUPATION;
  };

  const onScrollViewLayout = () => {
    setIsScrollingTo(true);
    scrollToY(getScreenTargetOcupation());
  };

  const scrollToY = (y: number) => {
    setIsScrollingTo(true);
    scrollViewRef.current?.scrollTo({ x: 0, y, animated: true });
    setTimeout(() => setIsScrollingTo(false), SCROLL_ANIMATION_TIME);
  };

  const opacity = TARGET_OPACITY * normalizedOffsetY;
  const closeBarBorderRadius =
    (distanceToTop / (getScreenHeight() - getScreenTargetOcupation())) *
    CLOSE_BAR_BORDER_RADIUS;

  return (
    <ReactNativeModal
      animationType="none"
      visible={localVisible}
      transparent
      supportedOrientations={["portrait", "landscape"]}
    >
      <SafeAreaView
        style={styles.container}
        pointerEvents={isScrollingTo ? "none" : "auto"}
      >
        <Animated.View style={[styles.backdrop, { opacity }]} />
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollView}
          overScrollMode="never"
          bounces={false}
          onScroll={onScroll}
          onScrollEndDrag={onScrollEndDrag}
          showsVerticalScrollIndicator={false}
          onLayout={onScrollViewLayout}
          stickyHeaderIndices={[1]}
        >
          <TouchableWithoutFeedback onPress={onRequestClose}>
            <View style={{ height: getScreenHeight() }} />
          </TouchableWithoutFeedback>
          <View
            style={[
              styles.closeBar,
              {
                backgroundColor,
                borderTopEndRadius: closeBarBorderRadius,
                borderTopStartRadius: closeBarBorderRadius,
              },
            ]}
          >
            <View style={styles.closeBarIndicator} />
          </View>
          <View style={[styles.content, { backgroundColor }]}>
            <View onTouchEnd={onRequestClose}>{children}</View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    minHeight: 200,
  },
  options: {
    position: "absolute",
    width: "100%",
    flex: 0,
  },
  items: {
    minHeight: 200,
  },
  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  closeBar: {
    height: 30,
    borderTopEndRadius: CLOSE_BAR_BORDER_RADIUS,
    borderTopStartRadius: CLOSE_BAR_BORDER_RADIUS,
    alignItems: "center",
    paddingTop: 12,
    marginBottom: -1,
  },
  closeBarIndicator: {
    width: 50,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#C4C4C4",
  },
});

export default Modal;
