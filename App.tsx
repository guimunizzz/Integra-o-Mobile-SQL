import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Produtos from "./src/screens/produtos";
import Categorias from "./src/screens/categorias";
import CriarCategoria from "./src/screens/criarCategoria"
import CriarProduto from "./src/screens/criarProduto";

export type RootStackParamList = {
  Home: undefined,
  Produtos: undefined,
  Categorias: undefined,
  CriarCategoria: undefined,
  CriarProduto: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Produtos'
          component={Produtos}
        />
        <Stack.Screen 
          name='Categorias'
          component={Categorias}
        />
        <Stack.Screen 
          name='CriarCategoria'
          component={CriarCategoria}
        />
        <Stack.Screen 
          name='CriarProduto'
          component={CriarProduto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

