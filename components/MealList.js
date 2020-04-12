import React from 'react';
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from '../components/MealItem';

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id == itemData.item.id);
        return (
            <MealItem
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavorite
                        }
                    });
                }}
                item={itemData.item}
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList
                style={{ width: '100%' }}
                keyExtractor={(item, index) => item.id}
                data={props.listData}
                renderItem={renderMealItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;