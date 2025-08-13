
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type AuthStackParamList = {
  AuthLogin: undefined;
  AuthRegister: undefined;
  RootTabs: undefined;
};

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, "AuthRegister">;

export default function AuthRegister() {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleRegister = async () => {
    if (!email || !username || !password || !age || !currentWeight || !targetWeight || !height) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }

    // Simulación de registro correcto
    try {
      // await registerUser({ email, username, password, age, currentWeight, targetWeight, height });
      navigation.replace("RootTabs");
    } catch (error) {
      Alert.alert("Error", "No se pudo crear la cuenta");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso actual (kg)"
        keyboardType="numeric"
        value={currentWeight}
        onChangeText={setCurrentWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso objetivo (kg)"
        keyboardType="numeric"
        value={targetWeight}
        onChangeText={setTargetWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <Button title="Registrarse" onPress={handleRegister} />

      <View style={styles.login}>
        <Text>¿Ya tienes cuenta?</Text>
        <Button title="Iniciar sesión" onPress={() => navigation.navigate("AuthLogin")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  login: {
    marginTop: 20,
    alignItems: "center",
  },
});
