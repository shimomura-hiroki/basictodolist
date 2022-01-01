import React, { VFC } from 'react';
import tw from 'tailwind-rn';
import { View, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../firebaseConfig';
import { RootStackParamList } from '../types/types';
import { selectUser, logout } from '../slices/userSlice';
import { TagListScreen } from '../screens/TagListScreen';
import { CreateTagScreen } from '../screens/CreateTagScreen';
import { IconButton } from '../components/IconButton';
import { TaskStackNavigator } from './TaskStackNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TagStackNavigator: VFC = () => (
    <Stack.Navigator>
        <Stack.Screen name="Taglist" component={TagListScreen} />
    </Stack.Navigator>
);
