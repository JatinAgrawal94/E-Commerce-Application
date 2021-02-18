import React from 'react';
import {PhotoGallery} from '../component/PhotoGallery'
import {Catalogue} from './Catalogue';

export function HomeScreen(props){
    return(
        <div>
        <PhotoGallery></PhotoGallery>
        <Catalogue></Catalogue>
        </div>
    );
}