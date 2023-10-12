import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Divider, Text } from 'react-native-paper';

import Api from '../../services/Api';

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Buscar todos os posts
        Api.get('/posts')
            .then(response => {
                setPosts(response.data.posts);
            })
            .catch(error => {
                console.error("DEU ERRO AO BUSCAR POSTS", error);
            });
    }, []);

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => {
                    return (
                        <Card style={styles.card}>
                            <Card.Content>
                                <View style={{ padding: 10 }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text>{item.body}</Text>
                                </View>
                            </Card.Content>
                        </Card>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});