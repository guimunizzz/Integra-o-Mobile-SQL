import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type Produto = {
    id: number,
    nomeProduto: string,
    valorAVista: number
}

type Quantidades = {
    [key: string]: number
}

export default function Produtos() {

    const produtos: Produto[] = [
        { id: 1, nomeProduto: 'Teclado Logitech', valorAVista: 100 },
        { id: 2, nomeProduto: 'Mouse Superlight', valorAVista: 100 }
    ]

    const navigation = useNavigation<NavigationProps>();

    const [quantidade, setQuantidades] = useState<Quantidades>({});
    const [busca, setBusca] = useState('')

    const produtosFiltrados = produtos.filter(produto =>
        produto.nomeProduto.toLowerCase().startsWith(busca.toLowerCase())
    );

    const diminuir = (id: number) => {
        setQuantidades(valor => ({
            ...valor,
            [id]: valor[id] > 1 ? valor[id] - 1 : 1
        }))
    }

    const aumentar = (id: number) => {
        setQuantidades(valor => ({
            ...valor,
            [id]: (valor[id] || 1) + 1
        }))
    }



    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput placeholder='Digite para pesquisar'
                    style={styles.textBusca}
                    value={busca}
                    onChangeText={setBusca}
                    placeholderTextColor="#9ca3af"
                />
            </View>
            <View style={styles.headerAction}>
                <TouchableOpacity onPress={() => navigation.navigate('CriarProduto')} style={styles.button}>
                    <Text style={styles.buttonText}>Novo +</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={produtosFiltrados}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.nomeProduto}>{item.nomeProduto}</Text>
                        <View style={styles.precosContainer}>
                            <Text style={styles.label}>Categoria:</Text>
                            <Text style={styles.valueText}>Sem categoria</Text>
                        </View>

                        <View style={styles.precosContainer}>
                            <Text style={styles.label}>Valor a vista:</Text>
                            <Text style={styles.precoAVista}>
                                R$ {item.valorAVista.toFixed(2).replace('.', ',')}</Text>
                        </View>

                        <View style={styles.acoesContainer}>
                            <View style={styles.qtdContainer}>
                                <TouchableOpacity onPress={() => diminuir(item.id)} style={styles.btnQtd}>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.quantidade}>
                                {quantidade[item.id] || 1}
                            </Text>

                            <View style={styles.qtdContainer}>
                                <TouchableOpacity onPress={() => aumentar(item.id)} style={styles.btnQtd}>
                                    <Text>+</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={styles.buttonAddCarrinho}>
                                <Text style={styles.textAddCarrinho}>Adicionar</Text>
                            </TouchableOpacity>
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
        backgroundColor: '#f8fafc',
        paddingTop: 10
    },
    searchContainer: {
        paddingHorizontal: 16,
        paddingBottom: 10
    },
    headerAction: {
        paddingHorizontal: 16,
        alignItems: 'flex-end',
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
    textBusca: {
        height: 46,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        color: '#111827'
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
        borderWidth: 1,
        borderColor: '#e5e7eb'
    },
    nomeProduto: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 8,
        color: '#111827'
    },
    precosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
        gap: 6
    },
    label: {
        color: '#6b7280',
        fontSize: 14
    },
    valueText: {
        color: '#111827',
        fontSize: 14,
        fontWeight: '500'
    },
    precoParcelado: {
        color: '#777',
        fontSize: 14
    },
    precoAVista: {
        color: '#111827',
        fontSize: 15,
        fontWeight: '600'
    },
    acoesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
        width: '100%'
    },
    qtdContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnQtd: {
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8
    },
    quantidade: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: '600',
        color: '#111827'
    },
    buttonAddCarrinho: {
        backgroundColor: '#111827',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAddCarrinho: {
        color: '#f9fafb',
        fontWeight: '600'
    }
})