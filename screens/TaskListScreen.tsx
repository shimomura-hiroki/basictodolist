import React, { VFC } from 'react';
import tw from 'tailwind-rn';
import { SafeAreaView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, Task } from '../types/types';
import { useSelector } from 'react-redux';
import { selectTag } from '../slices/todoSlice';
import { TwitterAuthProvider } from '@firebase/auth';
import { Title } from '../components/Title';
import { TaskItem } from '../components/Taskitem';
import { useToggleDeleteTask } from '../hooks/useToggleDeleteTask';
import { useGetTasks } from '../hooks/useGetTasks';
import { NavigationContainer } from '@react-navigation/native';

type Item = {
    item: Task;
};

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'TaskList'>;
};

export const TaskListScreen: VFC<Props> = ({ navigation }) => {
    const { tag, deleteTask, toggleCompleted } = useToggleDeleteTask();
    const { tasks, getErr } = useGetTasks();
    const tasksKeyExtractor = (item: Task) => item.id;
    const taskRenderItem = ({ item }: Item) => (
        <TaskItem
            id={item.id}
            title={item.title}
            createdAt={item.createdAt}
            completed={item.completed}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
        />
    );

    return (
        <SafeAreaView style={tw('flex-1')}>
            <Title first ="Tasks" last={tag.name} />
            <View style={tw('items-center')}>
                <TouchableOpacity onPress={() => navigation.navigate('CreateTask')}>
                    <MaterialIcons name="playlist-add" size={40} color="#ff6347" />
                </TouchableOpacity>
                <Text style={tw('text-gray-700 mt-2 m-5')}>Add task</Text>
                {getErr !== '' && (
                    <Text style={tw('text-red-500 my-5 font-semibold')}>{getErr}</Text>
                )}
            </View>
            <View style={[tw('flex-1 m-2')]}>
                <FlatList
                    data={tasks}
                    keyExtractor={tasksKeyExtractor}
                    keyboardShouldPersistTaps="always"
                    renderItem={taskRenderItem}
                />
            </View>
        </SafeAreaView>
    );
};



