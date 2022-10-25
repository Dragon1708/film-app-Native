import{ AsyncStorage  } from 'react-native';

export const saveWatching = async (data) => {
    try {
  
      await AsyncStorage.setItem(
        'userWatching',
        JSON.stringify(data)
      );
    } catch (error) {
        console.log("Error Fuck=");
      console.log(error);
      // Error saving data
    }
  };

  export const saveBookmark = async (data) => {
    try {
  
      await AsyncStorage.setItem(
        'userBookmark',
        JSON.stringify(data)
      );
    } catch (error) {
        console.log("Error Fuck=");
      console.log(error);
      // Error saving data
    }
  };

  export const saveViewed = async (data) => {
    try {
  
      await AsyncStorage.setItem(
        'userViewed',
        JSON.stringify(data)
      );
    } catch (error) {
        console.log("Error Fuck=");
      console.log(error);
      // Error saving data
    }
  };

  export const saveCategories = async (data) => {
    try {
  
      await AsyncStorage.setItem(
        'userCategories',
        JSON.stringify(data)
      );
    } catch (error) {
        console.log("Error Fuck=");
      console.log(error);
      // Error saving data
    }
  };

  export const loadWatching = async () => {
    try {
      const value = await AsyncStorage.getItem('userWatching');
      if (value !== null) {
        // We have data!!
      //  console.log(JSON.parse(value)[0])
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

  export const loadBookmark = async () => {
    try {
      const value = await AsyncStorage.getItem('userBookmark');
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

  export const loadViewed = async () => {
    try {
      const value = await AsyncStorage.getItem('userViewed');
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

  export const loadCategories = async () => {
    try {
      const value = await AsyncStorage.getItem('userCategories');
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

  export const mergeData = async (data) => {
    try {
  
      await AsyncStorage.mergeItem(
        'userData',
        JSON.stringify(data)
      );
    } catch (error) {
        console.log("Error Fuck=");
      console.log(error);
      // Error saving data
    }
  };
