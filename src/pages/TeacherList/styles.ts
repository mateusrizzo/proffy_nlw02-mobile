import {StyleSheet} from 'react-native';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList: {
        marginTop: -40,
    },
    searchForm: {
        marginBottom: 24,
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBlock: {
        width: '48%'
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: '#04d363',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
    },
})

export default styles;