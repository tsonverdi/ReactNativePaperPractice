import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Avatar, Divider, FAB, List, Portal, useTheme } from 'react-native-paper';

const HomeScreen = () => {
    const [open, setOpen] = useState(false);

    const navigation = useNavigation();

    const theme = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>

            {/* HEADER */}
            <Appbar.Header
                mode='center-aligned'
                style={{ backgroundColor: "red" }}
            >
                <Appbar.Content color='white' title="Home Screen" />
                <Appbar.Action color='white' icon="home" />
            </Appbar.Header>

            {/* LİSTE */}
            <ScrollView style={{ padding: 10 }}>
                <List.Item
                    title="Amy Farha"
                    description="Vice President"
                    left={(props) => <Avatar.Image
                        size={60}
                        source={{ uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                    />}
                />
                <Divider />
                <List.Item
                    title="Chris Jackson"
                    description="Vice Chairman"
                    left={(props) => <Avatar.Image
                        size={60}
                        source={{ uri: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ix[…]GVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }}
                    />}
                />

                <Divider />
            </ScrollView>

            {/* FAB */}
            <Portal>
                <FAB.Group
                    fabStyle={styles.fab}
                    color={'white'}
                    backdropColor='rgba(0,0,0,0.4)'
                    open={open}
                    icon={open ? "window-close" : "home"}
                    actions={[
                        {
                            icon: "plus",
                            label: "Add",
                            style: styles.fabItem,
                            labelStyle: [styles.labelItem, { backgroundColor: theme.colors.background }],
                            color: "white",
                            onPress: () => navigation.navigate("Weather")
                        },
                        {
                            icon: "delete",
                            label: "Delete",
                            style: styles.fabItem,
                            labelStyle: [styles.labelItem, { backgroundColor: theme.colors.background }],
                            color: "white",
                            onPress: () => console.log("sil")
                        }
                    ]}
                    onStateChange={() => setOpen(!open)}
                />
            </Portal>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fab: {
        backgroundColor: "red",
        borderRadius: 50,
    },
    fabItem: {
        backgroundColor: "red",
        borderRadius: 50,
    },
    labelItem: {
        // backgroundColor: "white",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
    }
})