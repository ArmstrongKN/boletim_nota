import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Firebase, {addDoc, collection, db} from '../Firebase';

export default function CadastroBoletim({ navigation }) {
    const [disciplina, setDisciplina] = useState('');
    const [nota, setNota] = useState('');

    function addDisciplina() {
        if (!disciplina.trim() || !nota.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        Firebase.collection("boletim").add({
            disciplina: disciplina,
            nota: parseFloat(nota) // Converter Nota para número
        })
        .then(() => {
            Alert.alert("Disciplina", "Disciplina cadastrada com sucesso!");
            setDisciplina('');
            setNota('');
            navigation.navigate("Home");
        })
        .catch(error => {
            console.error("Erro ao adicionar disciplina: ", error);
            Alert.alert("Erro", "Ocorreu um erro ao cadastrar a disciplina. Por favor, tente novamente.");
        });
    }

    const addBoletim = async () => {
        try{
            const docRef = await addDoc(collection(db, 'boletim'), {
                disciplina: disciplina,
                nota: nota
            });
        } catch (error) {
            console.log("erro ao inserir: ", error)
        }
    }

    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.disciplina}>Registre a Disciplina</Text>
            </View>
            <TextInput
                autoCapitalize='words'
                style={estilo.input}
                placeholder='Digite a disciplina'
                onChangeText={setDisciplina}
                value={disciplina}
            />
            <TextInput
                style={estilo.input}
                placeholder="Digite a nota"
                onChangeText={setNota}
                value={nota}
                keyboardType="numeric" // Adiciona teclado numérico para entrada de nota
            />

            <TouchableOpacity
                style={estilo.btnenviar}
                onPress={addBoletim}
            >
                <Text style={estilo.btntxtenviar}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#9ac234',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        borderRadius: 10,
    },
    btnenviar: {
        marginTop: 20,
        backgroundColor: '#9ac234',
        padding: 10,
        borderRadius: 10,
    },
    btntxtenviar: {
        fontSize: 20,
        textAlign: 'center',
    },
    disciplina: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
    },
});