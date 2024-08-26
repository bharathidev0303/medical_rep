import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    Text
} from 'react-native';
import { Img } from './Img';

/* eslint-disable-next-line */
export interface PopupProps {
    content: any;
    closeIcon?: string;
    showPopup: boolean;
    focusToclose?: boolean;
    closePopup: (e: any) => void;
}

export const Popup: React.FC<PopupProps> = ({
    content,
    closeIcon,
    showPopup,
    focusToclose = true,
    closePopup
}) => {
    const [modalVisible, setModalVisible] = useState(showPopup);

    // Ensure the modal visibility is controlled by the showPopup prop
    React.useEffect(() => {
        setModalVisible(showPopup);
    }, [showPopup]);

    const handleClose = () => {
        setModalVisible(false);
        closePopup(false);
        console.log(2342323423)
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleClose}
            >
                {/* Outer TouchableWithoutFeedback to capture taps outside the modal */}
                {focusToclose ? (
                    <TouchableWithoutFeedback onPress={handleClose}>
                        <View style={styles.modalOverlay}>
                            {/* Inner TouchableWithoutFeedback to prevent closing when tapping inside */}
                            <TouchableWithoutFeedback>
                                <View style={styles.modalView}>
                                    <TouchableOpacity
                                        style={styles.closeButton}
                                        onPress={handleClose}
                                    >
                                        {closeIcon ? (
                                            <Img source={closeIcon} />
                                        ) : (
                                            <Img
                                                style={{ width: 13, height: 13 }}
                                                source={require('@Asset/images/popupClose.png')}
                                            />
                                        )}
                                    </TouchableOpacity>
                                    <Text>{content}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                ) : (
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={handleClose}
                            >
                                {closeIcon ? (
                                    <Img source={closeIcon} />
                                ) : (
                                    <Img
                                        style={{ width: 13, height: 13 }}
                                        source={require('@Asset/images/popupClose.png')}
                                    />
                                )}
                            </TouchableOpacity>
                            <Text>{content}</Text>
                        </View>
                    </View>
                )}
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        minHeight: 200,
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex:1000
    },
});
