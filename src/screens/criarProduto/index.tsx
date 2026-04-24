import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Teclado', value: '1' },
    { label: 'Mouse', value: '2' },
];


export default function CriarProduto() {
    const [text, setText] = useState('');
    const [value, setValue] = useState(null);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.field}
                placeholder="Inserir nome do produto"
                placeholderTextColor="#6b7280"
                onChangeText={newText => setText(newText)}
                value={text}
            />
            <TextInput
                style={styles.field}
                placeholder="Inserir valor"
                placeholderTextColor="#6b7280"
                onChangeText={newText => setText(newText)}
                value={text}
            />
            <Dropdown
                style={styles.field}
                placeholderStyle={styles.dropdownPlaceholder}
                selectedTextStyle={styles.dropdownSelectedText}
                inputSearchStyle={styles.dropdownSearchInput}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Selecione uma categoria"
                searchPlaceholder="Buscar..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonSave}>
                    <Text style={styles.textCategoria}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    field: {
        height: 52,
        width: '92%',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 10,
        paddingHorizontal: 12,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    dropdownPlaceholder: {
        fontSize: 15,
        color: '#6b7280'
    },
    dropdownSelectedText: {
        fontSize: 15,
        color: '#111827'
    },
    dropdownSearchInput: {
        height: 40,
        fontSize: 15,
        color: '#111827'
    },
    buttonContainer: {
        alignItems: 'flex-end',
        marginTop: 14,
        width: '92%'
    },
    buttonSave: {
        backgroundColor: '#111827',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        minWidth: 110,
        alignItems: 'center'
    },
    textCategoria: {
        color: '#f9fafb',
        fontWeight: '600'
    }
})