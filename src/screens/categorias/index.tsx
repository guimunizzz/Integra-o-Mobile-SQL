import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput, Modal } from "react-native";

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

    const [busca] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [novaCategoria, setNovaCategoria] = useState('');

    const categoriasFiltradas = categorias.filter(produto =>
        produto.nomeProduto.toLowerCase().startsWith(busca.toLowerCase())
    );

    const handleSalvarCategoria = () => {
        if (novaCategoria.trim()) {
            setNovaCategoria('');
            setModalVisible(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerAction}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Nova Categoria</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.closeButton}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder="Inserir Categoria"
                            placeholderTextColor="#6b7280"
                            onChangeText={setNovaCategoria}
                            value={novaCategoria}
                        />

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.buttonCancel}
                                onPress={() => {
                                    setNovaCategoria('');
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={styles.textButtonCancel}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonSave}
                                onPress={handleSalvarCategoria}
                            >
                                <Text style={styles.textButtonSave}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end'
    },
    modalContent: {
        backgroundColor: '#f8fafc',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 20,
        minHeight: 280
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827'
    },
    closeButton: {
        fontSize: 24,
        color: '#6b7280',
        fontWeight: '600'
    },
    input: {
        height: 52,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#ffffff',
        marginBottom: 16,
        color: '#111827'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 20
    },
    buttonCancel: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#d1d5db',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    textButtonCancel: {
        color: '#111827',
        fontWeight: '600'
    },
    buttonSave: {
        flex: 1,
        backgroundColor: '#111827',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    textButtonSave: {
        color: '#f9fafb',
        fontWeight: '600'
    }
})