    import React, { useContext } from 'react';
    import { SafeAreaView, StyleSheet, TextInput, Button, View, Text } from 'react-native';

    export default function Login ({ navigation }) {
        
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const signIn = () => {
        //authenticate get a token and move on
        navigation.navigate('Main Drawer');
    }

        return (
            <SafeAreaView>
                <View style={styles.topView}>
                    <Text style={styles.text}>Vart Africa</Text>
                </View>
        <TextInput style={styles.input} onChangeText={onChangeUsername} value={username} placeholder="Username"/>
        <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
        />
        <Button
            style={styles.button}
            onPress={signIn}
            title="Sign In"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </SafeAreaView>
            );
    }

    const styles = StyleSheet.create({
        input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        },
        button: {
            width: '80%',
            height: 100,
            backgroundColor: '#000000'
        },
        topView: {
            height: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center'
        },
        text: {
            alignSelf: 'center',
            fontSize: 32
        }

    });

