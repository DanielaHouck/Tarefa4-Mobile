import React, {Fragment, useState} from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'

export default comp => {
    const [numero, setNumero] = useState(0)
    const pulosinc = () => setNumero(numero + 25)
    const pulosdec = () => setNumero(numero - 25)

    const [valor, setNumero2] = useState(2)
    const multiplosinc = () => setNumero2(valor * 2)
    const multiplosdec = () => setNumero2(valor / 2)

    return (
        <View style={styles.container}>

        <> 
            <Text style={styles.fontGrande}>
                {numero}
            </Text>
            <Button style={styles.botao} title=' + ' onPress={pulosinc} />
            <Button style={styles.botao} title=' - ' onPress={pulosdec} />
        </>     

        <> 
            <Text style={styles.fontGrande}>
                {valor}
            </Text>
            <Button style={styles.botao} title=' + ' onPress={multiplosinc} />
            <Button style={styles.botao} title=' - ' onPress={multiplosdec} />
        </>  

        
        </View>

        
    )
}
const styles = StyleSheet.create({
    fontGrande:{
        fontSize:30,
    },
    fontMedia:{
        fontSize:20,
        fontFamily:'Arial',
    },
    container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#AC9",
    },

    botao:{
    width: 10,
    },

});