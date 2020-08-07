import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function TeacherItem () {
    return ( 
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: 'https://github.com/mateusrizzo.png'}} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Mateus Rizzo</Text>
                    <Text style={styles.subject}>Geografia</Text>
                </View>

                <Text style={styles.bio}>Não sei onde tô mas consigo descobrir</Text>
            </View>
        </View>
    )
}

export default TeacherItem;