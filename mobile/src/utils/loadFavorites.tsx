import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import TeacherItem, { Teacher } from '../components/TeacherItem';



function loadFavorites() {
    const [favorites, setFavorites] = useState<number[]>([]);

    AsyncStorage.getItem('favorites').then(response => {
        if (response) {
            const favoritedTeachers = JSON.parse(response);

            const favoritedTeachersIds = favoritedTeachers.map( (teacher: Teacher) => teacher.id )

            setFavorites(favoritedTeachersIds);
        }
    })

}
export default loadFavorites;