import { View, Image, StyleSheet } from 'react-native';

interface Imgprops {
    style?: {width?:any,height?:any},
    source:any
}

export const Img = (props: Imgprops): JSX.Element => {
    return (
        <View >
            <Image  style={props.style} source={props.source} />
        </View>
    )
}
