import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import styles from './styles';
import { Text, Button } from 'components';
import { dataBaru } from '../../dummy/master/data';

const index = props => {
  const { data,
    withButton,
    onPressEdit,
    onPressDelete,
    inventory,
    merchant,
    supplier,
    historyMaster,
    historyTransaksi,
    historyLaporan } = props;

  return (
    <View style={ { paddingHorizontal: 10, paddingBottom: 110 } }>
      {/* Data Master */ }
      { inventory && (
        <FlatList
          data={ data }
          renderItem={ ( { item, index } ) => {
            return (
              <View style={ styles.card } key={ index }>
                <View
                  style={ styles.cardDataMaster }>
                  <View
                    style={ {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    } }>
                    <View>
                      <View style={ { marginBottom: 10 } }>
                        <Text bold>Nama Produk</Text>
                        <View style={ styles.containerHeaderList }>
                          <Text style={ styles.textListView }>{ item.namaProduct }</Text>
                        </View>
                      </View>
                      <View>
                        <Text bold>SKU</Text>
                        <View style={ styles.containerHeaderList }>
                          <Text style={ styles.textListView }>{ item.sku }</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View style={ { marginBottom: 10 } }>
                        <Text bold>Varian</Text>
                        <View style={ styles.containerHeaderList }>
                          <Text style={ styles.textListView }>{ item.variant }</Text>
                        </View>
                      </View>
                      <View>
                        <Text bold>Harga Produk</Text>
                        <View style={ styles.containerHeaderList }>
                          <Text style={ styles.textListView }>{ item.price }</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={ { alignItems: 'center' } }>
                    <Text bold>STOK</Text>
                    <View style={ styles.containerHeaderList }>
                      <Text>{ item.stock }</Text>
                    </View>
                  </View>

                </View>
                {withButton && (
                  <View
                    style={ {
                      marginTop: 5,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    } }>
                    <Button
                      title="Edit"
                      btnStyle={ styles.btnSimpan }
                      onPress={ () => onPressEdit( item ) }
                    />
                    <Button
                      title="Hapus"
                      btnStyle={ styles.btnSimpan }
                      onPress={ () => onPressDelete( item ) }
                    />
                  </View>
                ) }
              </View>
            );
          } }
          keyExtractor={ ( item, index ) => index.toString() }
        />
      ) }
      { merchant && (
        <FlatList
          data={ data }
          renderItem={ ( { item, index } ) => {
            return (
              <View style={ styles.card } key={ index }>
                <View
                  style={ styles.cardDataMaster }>
                  <View
                    style={ {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    } }>
                    <View>
                      <View style={ { marginBottom: 10 } }>
                        <Text bold>Nama Produk</Text>
                        <View style={ styles.containerHeaderList }>
                          <Text style={ styles.textListView }>{ item.nama }</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View style={ { marginBottom: 10 } }>
                        <Text bold>Email</Text>
                        <View style={ styles.containerHeaderList }>
                          <Text style={ styles.textListView }>{ item.email }</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                {withButton && (
                  <View
                    style={ {
                      marginTop: 5,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    } }>
                    <Button
                      title="Edit"
                      btnStyle={ styles.btnSimpan }
                      onPress={ () => onPressEdit( item ) }
                    />
                    <Button
                      title="Hapus"
                      btnStyle={ styles.btnSimpan }
                      onPress={ () => onPressDelete( item ) }
                    />
                  </View>
                ) }
              </View>
            );
          } }
          keyExtractor={ ( item, index ) => index.toString() }
        />
      ) }
      { supplier && (
        <FlatList
          data={ data }
          renderItem={ ( { item, index } ) => {
            return (
              <View style={ styles.card } key={ index }>
                <View
                  style={ styles.cardDataMaster }>
                  <View
                    style={ {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    } }>
                    <View>
                      <View style={ { marginBottom: 10 } }>
                        <Text bold>Nama Supplier</Text>
                        <View style={ styles.containerHeaderList }>
                          <Text style={ styles.textListView }>{ item.nama }</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View style={ { marginBottom: 10 } }>
                        <Text bold>Kontak</Text>
                        <View style={ styles.containerHeaderList }>
                          <Text style={ styles.textListView }>{ item.kontak }</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                {withButton && (
                  <View
                    style={ {
                      marginTop: 5,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                    } }>
                    <Button
                      title="Edit"
                      btnStyle={ styles.btnSimpan }
                      onPress={ () => onPressEdit( item ) }
                    />
                    <Button
                      title="Hapus"
                      btnStyle={ styles.btnSimpan }
                      onPress={ () => onPressDelete( item ) }
                    />
                  </View>
                ) }
              </View>
            );
          } }
          keyExtractor={ ( item, index ) => index.toString() }
        />
      ) }


      {/* History Master */ }
      { historyMaster && (
        <FlatList
          data={ data }
          renderItem={ ( { item, index } ) => {
            if ( item.type == 'Merchant' ) {
              return (
                <View style={ styles.card } key={ index }>
                  <View
                    style={ styles.cardHistoryMaster }>
                    <View
                      style={ {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      } }>
                      <View>
                        <View style={ { marginBottom: 10 } }>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.type }</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.namaMerchant }</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View style={ { marginBottom: 10 } }>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.date }</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  {withButton && (
                    <View
                      style={ {
                        marginTop: 15,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      } }>
                      <Button
                        title="Edit"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressEdit( item ) }
                      />
                      <Button
                        title="Hapus"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressDelete( item ) }
                      />
                    </View>
                  ) }
                </View>
              );
            } else if ( item.type == 'Supplier' ) {
              return (
                <View style={ styles.card } key={ index }>
                  <View
                    style={ {
                      elevation: 5,
                      borderRadius: 15,
                      backgroundColor: 'white',
                      padding: 10,
                      borderWidth: 3,
                      borderColor: '#8000FF'
                    } }>
                    <View
                      style={ {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      } }>
                      <View>
                        <View style={ { marginBottom: 10 } }>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.type }</Text>
                          </View>
                        </View>
                        <View>
                          <View>
                            <View style={ styles.containerHeaderList }>
                              <Text style={ styles.textListView }>{ item.namaSupplier }</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View style={ { marginBottom: 10 } }>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.date }</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  {withButton && (
                    <View
                      style={ {
                        marginTop: 15,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      } }>
                      <Button
                        title="Edit"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressEdit( item ) }
                      />
                      <Button
                        title="Hapus"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressDelete( item ) }
                      />
                    </View>
                  ) }
                </View>
              );
            } else if ( item.type == 'Product' ) {

              return (
                <View style={ styles.card } key={ index }>
                  <View
                    style={ {
                      elevation: 5,
                      borderRadius: 15,
                      backgroundColor: 'white',
                      padding: 10,
                      borderWidth: 3,
                      borderColor: '#00E0FF'
                    } }>
                    <View
                      style={ {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      } }>
                      <View>
                        <View style={ { marginBottom: 10 } }>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.type }</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.sku }</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View style={ { marginBottom: 10 } }>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.date }</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>Rp. { item.price }</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  {withButton && (
                    <View
                      style={ {
                        marginTop: 15,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      } }>
                      <Button
                        title="Edit"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressEdit( item ) }
                      />
                      <Button
                        title="Hapus"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressDelete( item ) }
                      />
                    </View>
                  ) }
                </View>
              );
            }
          } }
          keyExtractor={ ( item, index ) => index.toString() }
        />
      ) }
      {/* History Transaksi */ }
      { historyTransaksi && (
        <FlatList
          data={ data }
          renderItem={ ( { item, index } ) => {
            if ( item.type == 'Income' ) {
              return (
                <View style={ styles.card } key={ index }>
                  <View
                    style={ styles.cardHistoryTransaksiIncome }>
                    <View
                      style={ {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      } }>
                      <View>
                        <View style={ { marginBottom: 10 } }>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.type }</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.namaProduct }</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.invoice }</Text>
                          </View>
                        </View>
                      </View>

                      <View>
                        <View style={ { marginBottom: 10 } }>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.date }</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.stock } pcs</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.namaMerchant }</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  {withButton && (
                    <View
                      style={ {
                        marginTop: 15,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      } }>
                      <Button
                        title="Edit"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressEdit( item ) }
                      />
                      <Button
                        title="Hapus"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressDelete( item ) }
                      />
                    </View>
                  ) }
                </View>
              );
            } else if ( item.type == 'Stock' ) {
              return (
                <View style={ styles.card } key={ index }>
                  <View
                    style={ styles.cardHistoryTransaksiStock }>
                    <View
                      style={ {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      } }>
                      <View>
                        <View style={ { marginBottom: 10 } }>
                          {/* <Text bold>Nama Supplier</Text> */ }
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.type }</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.namaProduct }</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.sku }</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View style={ { marginBottom: 10 } }>
                          {/* <Text bold>Kontak</Text> */ }
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.date }</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.stock } pcs</Text>
                          </View>
                        </View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text style={ styles.textListView }>{ item.namaSupplier }</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  {withButton && (
                    <View
                      style={ {
                        marginTop: 15,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      } }>
                      <Button
                        title="Edit"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressEdit( item ) }
                      />
                      <Button
                        title="Hapus"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressDelete( item ) }
                      />
                    </View>
                  ) }
                </View>
              );

            }
          } }
          keyExtractor={ ( item, index ) => index.toString() }
        />
      ) }
      {/* Laporan */ }
      { historyLaporan && (
        <FlatList
          data={ data }
          renderItem={ ( { item, index } ) => {
            if ( item.type == 'Income' ) {
              return (
                <View style={ styles.cardLaporan } key={ index }>
                  <View
                    style={ {
                      elevation: 5,
                      backgroundColor: '#F4F4F4',
                      padding: 10,
                    } }>
                    <View
                      style={ {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      } }>
                      <View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.type }</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.price }</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>-</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  { withButton && (
                    <View
                      style={ {
                        marginTop: 15,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      } }>
                      <Button
                        title="Edit"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressEdit( item ) }
                      />
                      <Button
                        title="Hapus"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressDelete( item ) }
                      />
                    </View>
                  ) }
                </View>
              );
            } else if ( item.type == 'Stock' ) {
              return (
                <View style={ styles.cardLaporan } key={ index }>
                  <View
                    style={ {
                      elevation: 5,
                      backgroundColor: '#E9E9E9',
                      padding: 10,
                    } }>
                    <View
                      style={ {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      } }>
                      <View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.type }</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ { marginLeft: 40 } }>-</Text>
                          </View>
                        </View>
                      </View>
                      <View>
                        <View>
                          <View style={ styles.containerHeaderList }>
                            <Text bold style={ styles.textListView }>{ item.price }</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  {withButton && (
                    <View
                      style={ {
                        marginTop: 15,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      } }>
                      <Button
                        title="Edit"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressEdit( item ) }
                      />
                      <Button
                        title="Hapus"
                        btnStyle={ styles.btnSimpan }
                        onPress={ () => onPressDelete( item ) }
                      />
                    </View>
                  ) }
                </View>
              );

            }
          } }
          keyExtractor={ ( item, index ) => index.toString() }
        />
      ) }

    </View>
  );
};

export default index;
