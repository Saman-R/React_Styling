//rnfe  snippet for default function
//<FlatCard />  is self closing or we can use the old pen close tag too
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './Component/FlatCard';
import ElevatedCard from './Component/ElevatedCard';
import FancyCard from './Component/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
