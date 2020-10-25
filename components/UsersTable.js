import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';

const UsersTable = ({ users }) => {
  return (
    <View styles={styles.tableContainer}>
      <DataTable styles={styles.table}>
        <DataTable.Header>
          <DataTable.Title>ID</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Position</DataTable.Title>
          <DataTable.Title>Date Started</DataTable.Title>
        </DataTable.Header>
        {users.map((user) => (
          <DataTable.Row key={user.id}>
            <DataTable.Cell>{user.id}</DataTable.Cell>
            <DataTable.Cell>{user.name}</DataTable.Cell>
            <DataTable.Cell>{user.position}</DataTable.Cell>
            <DataTable.Cell>{user.date_started}</DataTable.Cell>
          </DataTable.Row>
        ))}
        {/* <DataTable.Pagination
                    page={1}
                    numberOfPages={3}
                    onPageChange=
                /> */}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    overflow: 'scroll',
  },
  table: {},
});

export default UsersTable;
