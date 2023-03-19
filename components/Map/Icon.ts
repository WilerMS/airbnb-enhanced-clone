import L from 'leaflet'
import icon from '@images/pin.png'

export const Icon = new L.Icon({
    //@ts-ignore
    iconUrl: (icon),
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});
