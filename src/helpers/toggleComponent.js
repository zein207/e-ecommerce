
export const toggleComponent = ( componentName, direction ) => {
    document.querySelector(`.navbar__collapse-${ componentName }`).classList.toggle(`is-active-${ direction }`);
};