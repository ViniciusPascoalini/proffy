import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'


import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem() {
    return (
        <View style={styles.container}>

            <View style={styles.profile}>

                <Image
                    style={styles.avatar}
                    source={{uri: 'https://avatars2.githubusercontent.com/u/65316815?s=460&u=db15f09dc6dee9de6582cfa82c4b64d3fcaaf3f5&v=4'}}
                />

                <View style={styles.profileInfo}>

                    <Text style={styles.name}>Vinícius Pascoalini</Text>

                    <Text style={styles.subject}>Forró</Text>

                </View>

            </View>

            <View style={styles.bioBox}>

                <Text style={styles.bio}>
                    Eu vou mostrar pra vocês
                    {'\n'}
                    Como se dança o baião 🎶

                    {'\n'}{'\n'}
                    E quem quiser aprender
                    {'\n'}
                    É favor fazer ligação 📱👇
                </Text>

            </View>

            <View style={styles.footer}>

                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>
                        R$ 30,00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>

                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutlineIcon} />*/}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>

                </View>

                

            </View>            

        </View>
    );
}

export default TeacherItem;