import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ElevatedCard from './ElevatedCard'

export default function ActionCard() {
  function openWebsite(websiteLine: string){
    Linking
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in NYC 
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pFKCxH-Bp8dMoqzhuu63dg.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
          Living in New York City is impossible to describe in words. The city gives everyone a different experience, but I've learned through hearing from others that whatever it gives you could possibly be what you currently need the most, and please note that it will most likely come in the tough love form.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
          onPress={()=>openWebsite('https://medium.com/@justbycris/what-ive-learned-living-in-nyc-cb1f6c1bb5a5')}>
            <Text style={styles.socialLinks}>Read More...</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>openWebsite('https://www.instagram.com/musingsoflife._/')}>
            <Text style={styles.socialLinks}>Follow Me...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
  },

  card: { 
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal : 16
  },

  elevatedCard: {
    backgroundColor: '#e29578',
        elevation: 3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: '#FFFFFF',
        shadowOpacity: 0.4

  },

  headingContainer:{
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText:{
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600'
  },

  cardImage:{
    height: 200,
  },

  bodyContainer:{
    padding: 10,
    color: '#1d3557'
    },

  footerContainer:{
    flexDirection:'row',
    paddingTop: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  socialLinks:{
    fontSize: 16,
    backgroundColor: '#ffb5a7',
    color: '#FFFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius:6
  },
})