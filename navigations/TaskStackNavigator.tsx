import React, { VFC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { TaskListScreen } from '../screens/TaskListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TaskStackNavigator: VFC = () => {
    return(
        <Stack.Navigator initialRouteName="TaskList">
            <Stack.Group
                screenOptions={{
                    headerShown: false,
                }}
                >
                <Stack.Screen name="TaskList" component={TaskListScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
};
