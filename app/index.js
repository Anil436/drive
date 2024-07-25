
import { Link } from "expo-router"
import {View, Text} from "react-native"
export default function index() {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            
            <Link href={'/about'} asChild>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Go to about page</Text>
            </Link>
           
        </View>
    );
};
