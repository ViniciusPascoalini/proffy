import React from 'react';
import { View, ImageBackground, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles';
import PageHeader from '../../components/PageHeader';



function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    function handleLinkToWebPlatform() {
        Linking.openURL(`https:google.com`)
    }

    return (
    <View style={styles.container}>

            <PageHeader title= ''/>

        <ImageBackground 
            resizeMode='contain'
            source={giveClassesBgImage} 
            style={styles.content}
        >
            

            <Text style={styles.title}>Quer ser um Proffy?</Text>
            <Text style={styles.description}>
                Para começar, você precisa se cadastrar como professor na nossa plataforma web.
            </Text>
        </ImageBackground>

        <RectButton onPress={handleLinkToWebPlatform}  style={styles.okButton}>
            <Text style={styles.okButtonText}>Vamos lá!</Text>
        </RectButton>

    </View>)
}

export default GiveClasses;