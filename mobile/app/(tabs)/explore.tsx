import { StyleSheet, Image, Pressable } from 'react-native';
import { useState } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/santander.png')}
          style={styles.reactLogo}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, Pessoa!</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo disponível</ThemedText>
        <Pressable onPress={() => setShowBalance(!showBalance)}>
          <ThemedText style={styles.balance}>
            {showBalance ? 'R$ 4.200,50' : '••••••'}
          </ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.actionsContainer}>
        <Pressable style={styles.actionBox}>
          <ThemedText type="defaultSemiBold">Cartões</ThemedText>
        </Pressable>
        <Pressable style={styles.actionBox}>
          <ThemedText type="defaultSemiBold">Fatura</ThemedText>
        </Pressable>
        <Pressable style={styles.actionBox}>
          <ThemedText type="defaultSemiBold">Pix</ThemedText>
        </Pressable>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionBox: {
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});