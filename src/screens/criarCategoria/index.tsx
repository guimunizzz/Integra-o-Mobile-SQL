import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";



export default function CriarCategoria() {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Inserir Categoria"
                placeholderTextColor="#6b7280"
                onChangeText={newText => setText(newText)}
                value={text}
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
    input: {
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