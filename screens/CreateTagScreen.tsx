import React, { VFC } from 'react';
import tw from 'tailwind-rn';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { useCreateTag } from '../hooks/useCreateTag';
import { InputField } from '../components/InputField';
import { Title } from '../components/Title';
import { IconButton } from '../components/IconButton';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'CreateTag'>;
};

export const CreateTagScreen: VFC<Props> =({ navigation }) => {
    const { createErr, name, setName, createTag } = useCreateTag ({
        navigation,
    });
    return (
        <SafeAreaView style={tw('flex-1 bg-gray-100 items-center')}>
            <View style={tw('flex-row px-4 justify-between w-full')}></View>
        </SafeAreaView>
    );
};
