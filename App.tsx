import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WalletScreen from './screens/WalletScreen';
import { StyleSheet, SafeAreaView } from 'react-native';
import WalletTransactionOverviewScreen from './screens/WalletTransactionOverviewScreen';
import WalletOverviewScreen from './screens/WalletOverviewScreen';
import WalletCrudScreen from './screens/WalletCrudScreen';

export type RootStackParams = {
  Wallet: {
    params: any;
  }
  WalletTransactionOverview: {
    params: any;
  }
  WalletCrud: {
    action: string;
  }
  WalletOverview: undefined;
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WalletOverview">
        <Stack.Screen name="Wallet" component={WalletScreen} options={{
            headerShown: false,
            presentation: 'card',
            animationTypeForReplace: 'push',
            animation: 'slide_from_bottom',
        }} />
        <Stack.Screen name="WalletTransactionOverview" component={WalletTransactionOverviewScreen} options={{
          headerShown: false,
          presentation: 'card',
          animationTypeForReplace: 'push',
          animation: 'slide_from_bottom',
        }}
        />
          <Stack.Screen name="WalletOverview" component={WalletOverviewScreen} options={{
            headerShown: false,
            headerTitleAlign: "center",
            presentation: 'card',
            animationTypeForReplace: 'push',
            animation: 'slide_from_bottom',
          }}
          />
          <Stack.Screen name="WalletCrud" component={WalletCrudScreen} options={{
            headerShown: false,
            presentation: 'card',
            animationTypeForReplace: 'push',
            animation: 'slide_from_bottom',
          }} />
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