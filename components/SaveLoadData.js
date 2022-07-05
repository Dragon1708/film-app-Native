import{ AsyncStorage  } from 'react-native';

export const saveData = async (data) => {
    try {
  
      await AsyncStorage.setItem(
        'userData',
        JSON.stringify(data)
      );
    } catch (error) {
        console.log("Error Fuck=");
      console.log(error);
      // Error saving data
    }
  };

  export const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) {
        // We have data!!
        //  JSON.parse(value).then((data) => {
            return JSON.parse(value)
        // });
        console.log(JSON.parse(value));
      }
    } catch (error) {
          console.log("Error Fuck=");
      console.log(error);
      // Error retrieving data
    }
  };