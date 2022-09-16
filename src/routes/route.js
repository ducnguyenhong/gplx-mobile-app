import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';
import { HOME_ROUTES, MEMORIZATION_TIPS, REVIEW_QUESTION_ROUTES, TRAFFIC_SIGNS_ROUTES } from './route.data';

const Stack = createNativeStackNavigator();

const AppRoute = () => {
  // API.accessToken = accessToken;

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerBackImageSource: IconBackScreen,
        headerShown: false,
      }}>

      {HOME_ROUTES.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}

      {TRAFFIC_SIGNS_ROUTES.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}

      {REVIEW_QUESTION_ROUTES.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}

      {MEMORIZATION_TIPS.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default memo(AppRoute);
