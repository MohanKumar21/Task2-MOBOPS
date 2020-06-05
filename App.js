import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import screen1 from './src/screens/screen1';
import screen2 from './src/screens/screen2';
import screen3 from './src/screens/screen3';


const nav = createStackNavigator({
    screen1:screen1,
    screen2:screen2,
    screen3:screen3
    
},{
    initialRouteName:'screen1'
})
 
export default createAppContainer(nav);