
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
import { Img } from './Img';
/* eslint-disable-next-line */
export interface Props {
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
}

export const IconButton: React.FC<Props> = ({
  text,
  onPress,
  disabled = false,
  style,
  textStyle,
  outerStyle,
  icon,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={outerStyle}
    >
      <View
        style={[
          style, styles.plainContainer
        ]}
      >
        <Img style={{width:40,height:30}} source={icon}/>
        <Text style={textStyle ? textStyle : styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  container: { paddingVertical: 18, borderRadius: 10 },
  plainContainer: {
    borderRadius: 5,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
    paddingRight:20,
    gap:10,
    paddingTop:10,
    paddingBottom:10,
  },
  alignmentStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

});
