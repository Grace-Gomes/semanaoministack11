import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Who(){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack()
    }
    return(
        <View style={styles.container}> 
        <View style={styles.header}>
            <Image source={logoImg}/>
            
        </View>
        <Text style ={styles.title}>
        Sobre nós        
        </Text>
        <Text style ={styles.description}>
        Somos uma plataforma de interação entre voluntários e ONGS. 
        Destinada somente a ajuda , sem fins lucrativos.
        Para maiores informações entre em contato conosco.      
        </Text>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
        </View>

       
    )
}