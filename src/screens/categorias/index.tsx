import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, FlatList, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type Categorias = {
    id: number,
    nomeProduto: string
}


export default function Categorias() {

    const categorias: Categorias[] = [
        { id: 1, nomeProduto: 'Teclado' },
        { id: 2, nomeProduto: 'Mouse' },
        { id: 3, nomeProduto: 'Monitor' },
    ]

    const navigation = useNavigation<NavigationProps>();

    const [busca] = useState('')

    const categoriasFiltradas = categorias.filter(produto =>
        produto.nomeProduto.toLowerCase().startsWith(busca.toLowerCase())
    );



    return (
        <View style={styles.container}>
            <View style={styles.headerAction}>
                <TouchableOpacity onPress={() => navigation.navigate('CriarCategoria')} style={styles.button}>
                    <Text style={styles.buttonText}>Novo +</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={categoriasFiltradas}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Text style={styles.nomeProduto}>{item.nomeProduto}</Text>

                            <View style={styles.acoesContainer}>
                                <TouchableOpacity style={styles.buttonEdit}>
                                    <Text style={styles.textCategoria}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonDelete}>
                                    <Text style={styles.textCategoria}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8fafc'
    },
    headerAction: {
        paddingHorizontal: 16,
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 10
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 24
    },
    button: {
        backgroundColor: '#111827',
        minWidth: 110,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 14
    },
    buttonText: {
        color: '#f9fafb',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '600'
    },
    imagem: {
        width: 100,
        height: 100,
        marginBottom: 10,
        resizeMode: 'contain'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e5e7eb'
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nomeProduto: {
        fontSize: 17,
        fontWeight: '600',
        flex: 1,
        marginRight: 12,
        color: '#111827'
    },
    acoesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10
    },
    buttonEdit: {
        backgroundColor: '#111827',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDelete: {
        backgroundColor: '#ef4444',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCategoria: {
        color: '#fff',
        fontWeight: '600'
    }
})