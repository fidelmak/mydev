import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { s, vs, moderateScale } from 'react-native-size-matters';

interface PillsProps {
  text: string;
  icon: React.ReactNode;
}

const Pills = ({ icon, text }: PillsProps) => {
  return (
    <View style={styles.pills}>
      {icon}

      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pills: {
    width: '45%',
    height: vs(45),

    borderWidth: 1,
    borderColor: 'white',
    borderRadius: s(20),

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: s(8),
    marginTop: vs(20),
  },

  text: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: '300',
  },
});

export default Pills;