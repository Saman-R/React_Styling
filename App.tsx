//rnfe  snippet for default function
//<FlatCard />  is self closing or we can use the old pen close tag too
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './Component/FlatCard';
import ElevatedCard from './Component/ElevatedCard';
import FancyCard from './Component/FancyCard';
import ActionCard from './Component/ActionCard';
import ContactList from './Component/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
