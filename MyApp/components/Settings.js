import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.settingsScreen}>
      <Text style={styles.settings}></Text>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Language</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>My Profile</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Contact Us <Ionicons name="chevron-forward" size={24} color="gray"/></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Change Password</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.text}>Dark Theme</Text>
          <Switch
            trackColor={{ false: 'white', true: 'green' }}
            thumbColor={isEnabled ? 'white' : 'white'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsScreen: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  settings: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  itemContainer: {
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  text: {
    fontSize: 16,
  },
});
export default Settings