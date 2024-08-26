
import { fontConfig, colors } from '@MR/shared';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
/* eslint-disable-next-line */
export interface ButtonProps {
  gradientColors?: string[];
  text: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
  outerStyle?: StyleProp<ViewStyle>;
  icon?: React.ReactChild;
  plainColor?: string;
  activeStyle?: any,
  padding?: any
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  disabled = false,
  style,
  textStyle,
  outerStyle,
  icon,
  isLoading,
  activeStyle,
  padding
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={outerStyle}
    >
      <View
        style={[
          style, padding ?? styles.plainContainer, style, disabled ? styles.disabled : activeStyle ?? styles.active
        ]}
      >
        <Text style={textStyle ? textStyle : styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white.color,
    ...fontConfig.GilroyBold
  },
  plainContainer: {
    paddingVertical: 18,
    borderRadius: 5,
  },
  alignmentStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: colors.disable.color,
  },
  active: {
    backgroundColor: colors.active.color,

  }
});
