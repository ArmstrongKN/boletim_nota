import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Firebase, { addDoc, collection, db, updateDoc, doc } from '../Firebase';
import { firestore } from "../Firebase";

export default function AddBoletim({ navigation, route }) {
    const [disciplina, setDisciplina] = useState(route.params.disciplina);
    const [nota, setNota] = useState(route.params.nota);
    const id = route.params.id;

    async function AlterarBoletim(id, disciplina, nota) {
        try {
            await updateDoc(doc(collection(db, "boletim"), id), {
                disciplina: disciplina,
                nota: nota
            })
            Alert.alert("Aviso", "Boletim alterado com sucesso.");
            navigation.navigate("Home")
        }
        catch(error) {
            console.error("Erro ao atualizar boletim: ", error);
            Alert.alert("Erro", "Ocorreu um erro ao atualizar o boletim. Por favor, tente novamente.");
        }
    }

    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}>Alterar a Disciplina</Text>
            </View>
            <View>
                <TextInput
                    autoCapitalize='words'
                    style={estilo.input}
                    placeholder='Digite a disciplina'
                    onChangeText={setDisciplina}
                    value={disciplina}
                />
                <TextInput
                    style={estilo.input}
                    placeholder="Digite sua nota"
                    onChangeText={(text) => setNota(text)}
                    value={nota.toString()} // Garante que nota seja uma string
                    keyboardType="numeric" // Adiciona teclado numérico para entrada de nota
                />
                <TouchableOpacity
                    style={estilo.btnenviar}
                    onPress={() => {
                        // Verifica se a nota é um número antes de enviar
                        if (!isNaN(parseFloat(nota))) {
                            AlterarBoletim(id, disciplina, parseFloat(nota));
                        } else {
                            Alert.alert("Aviso", "Por favor, insira uma nota válida.");
                        }
                    }}
                >
                    <Text style={estilo.btntxtenviar}>Enviar</Text>
                </TouchableOpacity>
            </View>
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
    titulo: {
        marginVertical: 40,
        fontSize: 25,
        textAlign: 'center'
    },
});
