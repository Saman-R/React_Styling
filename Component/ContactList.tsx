import {Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts =[
        { uid: 1, name: "Zoya", status: "Frontend Developer", imageUrl: "https://avatars.githubusercontent.com/u/64769?v=4" },
        { uid: 2, name: "Shuvi", status: "Backend Developer", imageUrl: "https://avatars.githubusercontent.com/u/53440571?v=4" },
        { uid: 3, name: "Sara", status: "Mobile App Developer", imageUrl: "https://avatars.githubusercontent.com/u/80880740?v=4" },
        { uid: 4, name: "Yuvraj", status: "Full Stack Developer", imageUrl: "https://avatars.githubusercontent.com/u/3169415?v=4" }
    ];

    return (
    <View>
    <Text style ={styles.headingText}>Contact List</Text>
        <ScrollView style={styles.container} scrollEnabled={false}>
            {contacts.map(({uid, name, status, imageUrl}) => (
                <View key={uid} style={styles.userCard}>
                    <Image 
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#1D201F',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
        // backgroundColor:'red'
    },
    userName: { 
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        paddingHorizontal: 10
    },
    userStatus: {
        fontSize: 12
    }
})
 // can use => () as shortcut for =>{return ()} 
 // can access items as items.uid. here we have restuctured it 