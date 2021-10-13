import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../../services/firebaseConnection';

export default function Login({changeStatus} : any) {
    const [type, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        if(type === 'login'){
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
            .then( (user) => {
                changeStatus(user.user?.uid)
            }).catch( () => {
                alert("Ops, algo deu errado!")
                return;
            });
        }else{
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( (user) => {
                changeStatus(user.user?.uid)
            })
            .catch( () => {
                alert("Ops, algo deu errado!")
                return;
            })
        }
    }
    return (
        <View style={styles.container}>


            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                placeholder="Password"
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={[styles.handleLogin, { backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'}]}
                onPress={handleLogin}
            >
                <Text style={{color: '#fff'}}>
                    { type === 'login' ? 'Acessar' : 'Cadastrar'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')}>
                <Text style={{textAlign: 'center'}}>
                    { type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta' }
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f6fc',
        paddingTop: 40,
        paddingHorizontal: 10
    },

    input: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414'
    },

    handleLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        marginBottom: 10
    }
});
