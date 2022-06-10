import { createDrawerNavigator } from '@react-navigation/drawer';
import CardRecharge from '../pages/CardRecharge';
import Dashboard from '../pages/Dashboard';
import FarmerOrder from '../pages/FarmerOrder';
import NewFarmerDebit from '../pages/NewFarmerDebit';
import RegisterNewFarmer from '../pages/RegisterNewFarmer';

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Dashboard' screenOptions={{
        headerShown: false
      }}>
      <Drawer.Screen name="Dashboard" component={ Dashboard } options={{ drawerLabel: 'Dashboard' }} />
      <Drawer.Screen name="Register New Farmer" component={ RegisterNewFarmer } options={{ drawerLabel: 'Register New Farmer' }} />
      <Drawer.Screen name="New Farmer Debit" component={ NewFarmerDebit } options={{ drawerLabel: 'New Farmer Debit' }} />
      <Drawer.Screen name="Farmer Orders" component={ FarmerOrder } options={{ drawerLabel: 'Farmer Orders' }} />
      <Drawer.Screen name="Card Recharge" component={ CardRecharge }  options={{ drawerLabel: 'Card Recharge' }} />
    </Drawer.Navigator>
  );
}