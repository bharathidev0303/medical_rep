import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Path, Svg } from 'react-native-svg';
import { fontConfig } from '@MR/shared';



const DropdownComponent = (props: any) => {
  const { options, onSelect, placeholder, selectedvalue } = props
  const [value, setValue] = useState(selectedvalue);
  const [isFocus, setIsFocus] = useState(false);
  const [data, setDate] = useState(options);

  useEffect(() => {
    setDate(options);
  }, [options])
  const filterNow = (filter: any) => {
    if (filter != null && filter != '') {
      let value = options.filter((e: any) => {
        return e.label.toUpperCase().indexOf(filter.toUpperCase()) > -1
      })
      setDate(value);
    }
    else {
      setDate(options);
    }
  }

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search ..."
        value={value}
        onChange={(item: any) => {
          setValue(item.value);
          onSelect(item.value);
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        renderItem={(e, i) => {
          return (
            <Text style={[styles.optionText, e.value == value ? { backgroundColor: '#e7ebf8', color: 'rgba(20, 57, 187, 1)' } : {}]}>{e.label}</Text>)
        }}
        renderInputSearch={() => {
          return (
            <View style={styles.searchbox}>
              <Svg style={styles.searchIcon} width="14" height="14" viewBox="0 0 14 14" fill="none" >
                <Path d="M13.8601 13.1537L10.5887 9.88229V9.88291C11.936 8.2903 12.3604 6.1129 11.7095 4.13155C11.0586 2.14957 9.42605 0.647346 7.39727 0.163752C5.36848 -0.319889 3.23361 0.284197 1.75887 1.75886C0.284214 3.23353 -0.319917 5.36848 0.163771 7.39727C0.647411 9.42606 2.14958 11.0587 4.13156 11.7095C6.1129 12.3604 8.29026 11.9361 9.8829 10.5887L13.1543 13.8601H13.1537C13.3496 14.0492 13.661 14.0461 13.8539 13.8539C14.0461 13.661 14.0492 13.3497 13.8601 13.1537ZM1.02564 6.01817C1.02564 4.69391 1.55173 3.42399 2.48781 2.4878C3.42389 1.5516 4.69393 1.02562 6.01818 1.02562C7.34242 1.02562 8.61235 1.55171 9.54854 2.4878C10.4847 3.42388 11.0107 4.69392 11.0107 6.01817C11.0107 7.34242 10.4846 8.61236 9.54854 9.54855C8.61246 10.4847 7.34242 11.0107 6.01818 11.0107C4.69454 11.0095 3.42576 10.4828 2.48973 9.54667C1.55363 8.61057 1.0269 7.34178 1.02564 6.01817Z" fill="#D4D4D4" />
              </Svg>
              <TextInput onChangeText={(e) => filterNow(e)} style={styles.searchField} placeholder={placeholder} />
            </View>
          )
        }}
        renderRightIcon={() => {
          return (
            <View>
              {isFocus ?
                <Svg width="14" height="7" viewBox="0 0 14 7" fill="none">
                  <Path d="M14 6.3C14 6.48667 13.9277 6.66167 13.7947 6.79467C13.5217 7.06767 13.0783 7.06767 12.8053 6.79467L7.7 1.68933C7.52033 1.50967 7.266 1.407 7 1.407C6.734 1.407 6.47967 1.50967 6.3 1.68933L1.19467 6.79467C1.05933 6.93 0.879667 7 0.7 7C0.520333 7 0.340666 6.93233 0.205333 6.79467C0.0699998 6.657 0 6.48667 0 6.3C0 6.11333 0.0723331 5.93833 0.205333 5.80533L5.31067 0.7C5.761 0.249667 6.363 0 7 0C7.637 0 8.239 0.249667 8.68933 0.7L13.7947 5.80533C13.9277 5.93833 14 6.11333 14 6.3Z" fill="black" />
                </Svg> :
                <Svg width="14" height="7" viewBox="0 0 14 7" fill="none" >
                  <Path d="M14 0.7C14 0.513333 13.9277 0.338334 13.7947 0.205334C13.5217 -0.0676664 13.0783 -0.0676664 12.8053 0.205334L7.7 5.31067C7.52033 5.49033 7.266 5.593 7 5.593C6.734 5.593 6.47967 5.49033 6.3 5.31067L1.19467 0.205334C1.05933 0.0700003 0.879667 0 0.7 0C0.520333 0 0.340666 0.0676669 0.205333 0.205334C0.0699998 0.343 0 0.513333 0 0.7C0 0.886667 0.0723331 1.06167 0.205333 1.19467L5.31067 6.3C5.761 6.75033 6.363 7 7 7C7.637 7 8.239 6.75033 8.68933 6.3L13.7947 1.19467C13.9277 1.06167 14 0.886667 14 0.7Z" fill="black" />
                </Svg>
              }
            </View>
          )
        }}

      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 16
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#f5f5f5',
    paddingLeft: 15,
    paddingRight: 10,
    width: "100%"
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
    color: 'rgba(145, 147, 161, 1)'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  optionText: {
    fontSize: 16,
    color: '#555',
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8,
    ...fontConfig.GilroyRegular
  },
  searchbox: {
    position: 'relative',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8
  },
  searchIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10

  },
  searchField: {
    borderWidth: 1,
    borderColor: 'rgba(212, 212, 212, 1)',
    padding: 5,
    paddingLeft: 30,
    fontSize: 14,
    borderRadius: 5,
  }
});
