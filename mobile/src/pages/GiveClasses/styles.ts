import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
    },

    content: {
        flex: 1,
        justifyContent: 'center', 
        padding: 40
    },

    title: {
        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 200,

    },

    description:{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        marginTop: 24,
        maxWidth: 260,
    },

    okButton :{
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        alignSelf: 'center'
    },

    okButtonText:{
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold',

    },

});

export default styles;