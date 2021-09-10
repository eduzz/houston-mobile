import Toast from "react-native-toast-message";

import ActionSheet from "./Components/ActionSheet";
import ActionItem from "./Components/ActionSheet/ActionItem";
import Modal, { IModal } from "./Components/Modal";
import Text from "./Components/Text";
import ThemeProvider from "./Components/ThemeProvider";

// houston-mobile ui components export
export { Modal, IModal, ActionSheet, ActionItem, Toast, Text, ThemeProvider };

// react-native-elements not modified components export
export {
  Avatar,
  Button,
  Card,
  CheckBox,
  Divider,
  Header,
  Icon,
  Image,
  Input,
  LinearProgress,
  ListItem,
  SearchBar,
  Slider,
  Switch,
  makeStyles,
  useTheme,
  FullTheme,
} from "react-native-elements";
