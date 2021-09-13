import Toast from "react-native-toast-message";

import ActionSheet from "./Components/ActionSheet";
import ActionItem, {
  ActionItemProps,
} from "./Components/ActionSheet/ActionItem";
import Modal, { ModalProps } from "./Components/Modal";
import Text from "./Components/Text";
import ThemeProvider from "./Components/ThemeProvider";

// houston component types export
export { ModalProps, ActionItemProps };

// houston components and RNE modified components export
export { Modal, ActionSheet, ActionItem, Toast, Text, ThemeProvider };

// non modified RNE components export
export {
  Avatar,
  Badge,
  BottomSheet,
  Button,
  ButtonGroup,
  Card,
  CheckBox,
  Chip,
  Divider,
  FAB,
  Header,
  Icon,
  Image,
  Input,
  LinearProgress,
  ListItem,
  Overlay,
  PricingCard,
  Rating,
  SearchBar,
  Slider,
  SocialIcon,
  SpeedDial,
  Switch,
  Tab,
  Tile,
  Tooltip,
  makeStyles,
  useTheme,
} from "react-native-elements";
