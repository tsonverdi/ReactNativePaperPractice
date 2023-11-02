import { StyleSheet, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Appbar, Button, Card, RadioButton, Text, TextInput, ToggleButton, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import MyContext from '../store'

const WeatherScreen = () => {
    const navigation = useNavigation();

    const [selectedCity, setSelectedCity] = useState("");
    const cities = ["İstanbul", "Ankara", "İzmir"];

    const { theme, setTheme } = useContext(MyContext);

    const paperTheme = useTheme();

    return (
        <View style={{ backgroundColor: paperTheme.colors.background, flex: 1 }}>
            {/* HEADER */}
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Hava Durumu Uygulaması" />
                <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>

            <View style={{ paddingHorizontal: 15, paddingVertical: 5 }}>

                {/* ŞEHİR SEÇİMİ */}
                <Card style={styles.card}>
                    <Card.Title title="Şehir Seçin" />
                    <Card.Content>
                        <RadioButton.Group
                            value={selectedCity}
                            onValueChange={(value) => setSelectedCity(value)}
                        >
                            {cities.map(city => (
                                <RadioButton.Item label={city} value={city} />
                            ))}


                        </RadioButton.Group>
                        <TextInput
                            label={"Başka bir şehir yaz"}
                            style={{ marginVertical: 10 }}
                        />

                    </Card.Content>

                    <Card.Actions>
                        <Button onPress={() => { }}>Hava Durumu Getir</Button>
                    </Card.Actions>

                </Card>

                {/* HAVA DURUMU */}
                <Card style={styles.card}>
                    <Card.Title title="Hava Durumu" />
                    <Card.Content>
                        <Text>Sıcaklık: 25&#8451;</Text>
                        <Text>Durum: Güneşli</Text>
                    </Card.Content>
                </Card>

                {/* TEMA */}
                <View style={styles.toggleContainer}>
                    <ToggleButton.Group onValueChange={(value => { setTheme(value) })} value={theme}>
                        <ToggleButton icon="weather-sunny" value='light' />
                        <ToggleButton icon="weather-night" value='dark' />
                    </ToggleButton.Group>
                </View>
            </View>
        </View>
    )
}

export default WeatherScreen

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
    },
    toggleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
    }
})