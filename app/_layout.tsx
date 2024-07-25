import { Link, Stack } from "expo-router"
import {View, Text} from "react-native"
export default function _layout() {
    return(
        <Stack>
            <Stack.Screen name='index' options={{headerTitle:'Home',}} />
            <Stack.Screen name='about' options={{headerTitle:'About',}} />
            
           
        </Stack>
    );
};