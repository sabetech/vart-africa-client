import React from 'react';
import { SafeAreaView , View, StyleSheet, ScrollView } from 'react-native';
import DashboardCard from '../components/DashboardCard';

export default function Dashboard () {

    return (
        <SafeAreaView>
            <ScrollView style={ styles.cardLayout } >
                <DashboardCard cardCaption={"Show Number of Registered Famers"} icon={"people"} />
                <DashboardCard cardCaption={"Quantity of Orders Placed"} icon={"md-cube"} />
                <DashboardCard cardCaption={"Total Savings"} icon={"md-cash"} />
                <DashboardCard cardCaption={"Deductions"} icon={"ios-cash-outline"} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cardLayout: {
        display:'flex',
        flexDirection: 'column'
    }
});

