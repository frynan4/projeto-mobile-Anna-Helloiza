import { Image, StyleSheet, Platform, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
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
        <ThemedText type="title">Bem vindo </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Para realizar este login, utilize os dados de acesso do app Santander
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">CPF</ThemedText>
        <ThemedText>000.000.000-01</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Senha</ThemedText>
        <ThemedText>******</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Pressable onPress={() => console.log('Entrando...')}>
          <ThemedText type="subtitle" style={styles.loginButton}>Entrar</ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Instrução: {Platform.select({
            ios: 'cmd + d',
            android: 'cmd + m',
            web: 'use o menu de ferramentas'
          })}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    color: '#fff',
  },
});
