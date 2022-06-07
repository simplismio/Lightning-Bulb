import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WalletScreen from './screens/WalletScreen';
import { StyleSheet, SafeAreaView } from 'react-native';
import WalletTransactionsScreen from './screens/WalletTransactionsScreen';
import WalletOverviewScreen from './screens/WalletOverviewScreen';
import WalletCrudScreen from './screens/WalletCrudScreen';

export type RootStackParams = {
  Wallet: {
    name: string;
  }
  WalletTransactions: {
    name: string;
  }
  WalletCrud: undefined;
  WalletOverview: undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WalletOverview">
        <Stack.Screen name="Wallet" component={WalletScreen} options={{
          headerShown: true,
          headerBackTitle: '',
          headerTitle: '',
          headerTitleAlign: 'center',
          headerTransparent: true
        }} />
        <Stack.Screen name="WalletTransactions" component={WalletTransactionsScreen} options={{
          headerShown: true,
          presentation: 'card',
          animationTypeForReplace: 'push',
          animation: 'slide_from_bottom',
        }}
        />
          <Stack.Screen name="WalletOverview" component={WalletOverviewScreen} />
          <Stack.Screen name="WalletCrud" component={WalletCrudScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});