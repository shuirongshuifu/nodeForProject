export function IsPhone() {
    var info = navigator.userAgent;
    var isPhone = /mobile/i.test(info);
    return isPhone;
}

export const getAssetHomeURL = (i) => {
    return new URL(`../assets/homeIcon/${i}.png`, import.meta.url).href
}

