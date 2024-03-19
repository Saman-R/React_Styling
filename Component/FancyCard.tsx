import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
    <View>
        <Text style ={styles.headingText}>Trending Places</Text>
        <View style ={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri:'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Maroon Bells</Text>
            <Text style={styles.cardLabel}>United States</Text>
            <Text style={styles.cardDescription}>Spring in Full Bloom</Text>
            <Text style={styles.cardFooter}>12 hrs Away</Text>
        </View>
        </View>
        <View style ={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri:'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Castellammare del Golfo</Text>
            <Text style={styles.cardLabel}>Italy</Text>
            <Text style={styles.cardDescription}>Amazing Sunset in Scopello</Text>
            <Text style={styles.cardFooter}>10 hrs Away</Text>
        </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card:{
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,

    },
    cardTitle:{
        color:'#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel:{
        color:'#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription:{
        color:'#2F363F',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter:{
        color:'#000000',

    }

})