/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Button, Modal,Card } from 'react-native-paper';
const group = [
    { id: 1, name: "Home" },
    { id: 2, name: "Office" },
    { id: 3, name: "Market" },
]
const Home = () => {
    const [visible, setVisible] = useState(false);
    const [text,setText]=useState("")
    const showModal = () => {
        alert("click")
        setVisible(true)
    };
    const hideModal = () => setVisible(false);

    return (
        <>
            <View style={{ backgroundColor: "rgba(199, 43, 98, 1)" }}>
                <Text style={{ fontSize: 30, color: "#fff", textAlign: "center", padding: 15 }}>Keep Notes</Text>
            </View>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: 'white', padding: 20,zIndex:10 }}>
                <Text>Create new group</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type here to translate!"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
                <Button onPress={() => {
                    group.push({ id: (group.length + 1), name: text })
                    setText("")
                    setVisible(false)
                }}>Add</Button>
            </Modal>
            <View style={style.body}>

                {!visible && group?<ScrollView>
                    {group.map((item) => {
                        return (
                            <Card key={item.id} style={{ width: 250, margin: 20, padding: 20 }}>
                                <Button onPress={()=>{alert("hello")}}>

                                <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "800" }}>{item.name}</Text>
                                </Button>
                            </Card>
                        )
                    })}
                </ScrollView>:""}
            </View>
            <Button style={style.plus} mode="contained" onPress={() => setVisible(!visible)}>
                +
            </Button>
        </>
    )
};

const style = StyleSheet.create({
    body: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
    },
    plus: {
        color: 'red',
        fontSize: 40,
        borderColor: 'blue',
        borderWidth: 2,
        width: 20,
        position: "absolute",
        bottom: 30,
        right: 30
    },
    list: {
        
    }
});

export default Home;
