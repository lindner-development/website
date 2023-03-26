import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';

export const plugins = [
    autoprefixer(),
    csso({
        restructure: false
    })
];