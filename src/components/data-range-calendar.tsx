
import { fontConfig, colors } from '@MR/shared';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Modal,
} from 'react-native';
import { Button } from './button';
import { Calendar } from 'react-native-calendars';
/* eslint-disable-next-line */
export interface DateProps {
  minDate?: Date;
  maxDate?: Date;
  onDateRangeSelected: (e: any) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  isLoading?: boolean;
  outerStyle?: StyleProp<ViewStyle>;
  icon?: React.ReactChild;
  plainColor?: string;
  openButton?: any
}


export const DaterangePicker: React.FC<DateProps> = ({
  minDate,
  maxDate,
  onDateRangeSelected,
  style,
  textStyle,
  outerStyle,
  icon,
  isLoading,
  openButton
}) => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate]: any = useState(new Date());

  const handleConfirm = () => {
    if (startDate <= endDate) {
      onDateRangeSelected({ startDate, endDate });
    } else {
      // Handle case where startDate is after endDate
    }
    setOpen(false);
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
  const handleSelect = (ranges: any) => {

  }
  const handleDayPress = (day: any) => {
    const selectedDate = new Date(day.dateString);
    if (!startDate || (endDate && selectedDate < startDate)) {
      setStartDate(selectedDate);
      setEndDate(null);
    } else {
      if (selectedDate >= startDate) {
        setEndDate(selectedDate);
      }
    }
  };
  const generateMarkedDates = () => {
    const markedDates: any = {};

    if (startDate) {
      markedDates[startDate.toISOString().split('T')[0]] = {
        startingDay: true,
        color: colors.active.color,
        textColor: 'white',
      };
    }

    if (endDate) {
      markedDates[endDate.toISOString().split('T')[0]] = {
        endingDay: true,
        color: colors.active.color,
        textColor: 'white',
      };
    }

    if (startDate && endDate) {
      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        markedDates[currentDate.toISOString().split('T')[0]] = {
          color: colors.active.color,
          textColor: 'white',
        };
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    return markedDates;
  };

  return (
    <View>
      <Button textStyle={{ fontSize: 11 }} padding={styles.dateRangePickerText} activeStyle={styles.dateRangePicker} text={openButton ?? 'Date'} onPress={() => setOpen(true)} />
      <Modal visible={open} transparent={true} animationType='fade'>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text>Select Start Date:</Text>

            <Calendar
              style={styles.calendar}
              onDayPress={handleDayPress}
              markingType="period"
              markedDates={generateMarkedDates()}
            />
            {/* <Text style={styles.dateText}>
              {startDate ? `Start Date: ${startDate.toDateString()}` : 'Start Date: Not selected'}
            </Text>
            <Text style={styles.dateText}>
              {endDate ? `End Date: ${endDate.toDateString()}` : 'End Date: Not selected'}
            </Text> */}
            {/* {startDate && endDate && (
              <Button
                text="Confirm Date Range"
              />
            )} */}
            <View style={styles.datePickerButton}>
              <Button text="Cancel" textStyle={{ fontSize: 14, color: 'white' }} padding={styles.buttonStyle} activeStyle={styles.datePickerbuttonitem} onPress={() => setOpen(false)} />
              <Button text="Confirm" textStyle={{ fontSize: 14, color: 'white' }} padding={styles.buttonStyle} activeStyle={styles.datePickerbuttonitem} onPress={handleConfirm} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  calendar: {
    width: '100%',
    height: 350,
  },
  dateText: {
    margin: 10,
    fontSize: 16,
  },
  datePickerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  datePickerbuttonitem: {
    backgroundColor: colors.active.color,
    fontSize: 12
  },
  buttonStyle: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  dateRangePicker: {
    backgroundColor: 'rgba(245, 245, 245, 1)',
    fontSize: 12
  },
  dateRangePickerText: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
});
