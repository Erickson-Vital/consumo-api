import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import api from '../../src/services/api';

const index = () => {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        (async () =>{
            const { data } = await api.get('/user')
            setUsers(data)
        })()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.flat}>
                <FlatList 
                    data={users}
                    renderItem={({item}) => <Text>{item.email}</Text>}
                />
            </View>
        </View>
    )
}

export default index
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    flat:{
        alignItems: 'center'
    },
})
