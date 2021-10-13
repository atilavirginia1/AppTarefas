import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Feather from 'react-native-vector-icons/Feather';

interface TaskProps {
    data: {
        item: {
            key: string;
            nome: string;
        }

    };
    deleteItem: (key: string) => void;
    editItem: (data: Object) => void;
}

export function TaskList({ data, deleteItem, editItem }: TaskProps) {
    console.log(data);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => deleteItem(data.item.key)}>
                <Feather name='trash' size={20} color={'#fff'} />
            </TouchableOpacity>

            <View style={{ paddingRight: 10 }}>
                <TouchableWithoutFeedback onPress={() => editItem(data.item)}>
                    <Text style={styles.text}>{data.item.nome}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#121212',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4
    },

    text: {
        color: '#fff',
        paddingRight: 10
    }

})