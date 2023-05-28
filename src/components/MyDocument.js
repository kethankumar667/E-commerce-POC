/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from '../assets/images/logo1.png';
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column'
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 'auto'
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 14
  },
  reportTitle: {
    color: 'black',
    fontSize: 20
  },
  invoiceNoContainer: {
    flexDirection: 'row',
    marginTop: 36,
    justifyContent: 'flex-end'
  },
  invoiceDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: 'bold',
    color: 'red'
  },
  label: {
    fontSize: '12px'
    // width: 60
  },
  headerContainer: {
    marginTop: 36
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Oblique'
  },
  tableContainers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#bff0fd'
  },
  container: {
    flexDirection: 'row',
    border: '1px solid black',
    backgroundColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1
  },
  rowcontainer: {
    flexDirection: 'row',
    border: '1px solid black',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1
  },
  description: {
    width: '60%',
    borderRightColor: 'black',
    // borderRightWidth: 1,
    alignItems: 'center'
  },
  qty: {
    width: '10%',
    borderRightColor: 'black',
    // borderRightWidth: 1,
    alignItems: 'center'
  },
  rate: {
    width: '15%',
    borderRightColor: 'black',
    // borderRightWidth: 1,
    alignItems: 'center'
  },
  amount: {
    width: '15%'
  },
  row: {
    border: '1px solid red',
    flexDirection: 'row',
    borderColor: 'red',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontSize: 12,
    fontStyle: 'bold'
  },
  descriptions: {
    width: '90%',
    borderRightColor: '#dc3545',
    // borderRightWidth: 1,
    // paddingRight: '8px',
    alignItems: 'center'
  },
  total: {
    width: '15%',
    textAlign: 'center',
    paddingRight: '8px'
  },
  reportsTitle: {
    fontSize: 12,
    textAlign: 'center',
    // textTransform: 'uppercase',
    marginTop: '20px'
  }
});
const MyDocument = (props) => {
  let date = new Date();
  const { data, user, authenticated, orderid, payment } = props;
  let item = user.find((item) => item.username === authenticated);

  const InvoiceTableRow = () => {
    const rows = data.map((item) => (
      <View style={styles.tableContainer}>
        <View style={styles.rowcontainer} key={item.id.toString()}>
          <Text style={styles.description}>{item.title.slice(0, 30) + '...'}</Text>
          <Text style={styles.qty}>{item.count}</Text>
          <Text style={styles.rate}>{item.price}</Text>
          <Text style={styles.amount}>{(item.count * item.price).toFixed(2)}</Text>
        </View>
      </View>
    ));
    return <>{rows}</>;
  };
  const InvoiceTableFooter = () => {
    const total = data
      .map((item) => item.count * item.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return (
      <View style={styles.tableContainer}>
        <View style={styles.rowcontainer}>
          <Text style={styles.descriptions}>TOTAL</Text>
          <Text style={styles.total}>$.{Number.parseFloat(total).toFixed(2)}</Text>
        </View>
      </View>
    );
  };
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image style={styles.logo} src={Logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.reportTitle}>Tax Invoice/Bill of Supply/Cash Memo</Text>
        </View>
        <>
          <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>Date: </Text>
            <Text style={styles.invoiceDate}>
              {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
            </Text>
          </View>
          <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>Invoice No:</Text>
            <Text style={styles.invoiceDate}>{orderid}</Text>
          </View>
          <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>Mode of Payment:</Text>
            <Text style={styles.invoiceDate}>{payment}</Text>
          </View>
          <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>Status:</Text>
            <Text style={styles.invoiceDate}>Draft</Text>
          </View>
          <View style={styles.headerContainers}>
            <Text style={styles.label}>Bill To:</Text>
            <Text style={styles.label}>{item.username}</Text>
            <Text style={styles.label}>{item.Address}</Text>
            <Text style={styles.label}>{item.pincode}</Text>
            <Text style={styles.label}>{item.phone}</Text>
            <Text style={styles.label}>{item.email}</Text>
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.container}>
              <Text style={styles.description}>Item Description</Text>
              <Text style={styles.qty}>Qty</Text>
              <Text style={styles.rate}>rate</Text>
              <Text style={styles.amount}>Total Amount</Text>
            </View>
          </View>
          {data ? <InvoiceTableRow></InvoiceTableRow> : <></>}
          {data ? <InvoiceTableFooter></InvoiceTableFooter> : <></>}

          <View>
            <Text style={styles.reportsTitle}>*** Thank you for shopping with us ***</Text>
          </View>
        </>
      </Page>
    </Document>
  );
};
export default MyDocument;
