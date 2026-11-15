
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

const categories = [
  '📱 Electronics',
  '👕 Fashion',
  '🏠 Home',
  '💄 Beauty',
  '👟 Shoes',
  '🧸 Toys',
  '📚 Books',
  '🛒 Grocery'
];

const products = [
  { name: 'Wireless Headphones', price: '₹999', emoji: '🎧' },
  { name: 'Smart Watch', price: '₹1,499', emoji: '⌚' },
  { name: 'Stylish Shoes', price: '₹1,199', emoji: '👟' },
  { name: 'Travel Bag', price: '₹799', emoji: '🎒' }
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.logo}>ShopNexa 🛍️</Text>
        <Text style={styles.location}>📍 Deliver to India</Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Search products..."
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Welcome to ShopNexa!</Text>
          <Text style={styles.bannerText}>
            Shop Everything, Anytime.
          </Text>
          <Text style={styles.offer}>Big Shopping Deals 🎉</Text>
        </View>

        <Text style={styles.heading}>Categories</Text>

        <View style={styles.categoryGrid}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.category}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.heading}>Popular Products</Text>

        <View style={styles.productGrid}>
          {products.map((item, index) => (
            <TouchableOpacity key={index} style={styles.product}>
              <Text style={styles.productEmoji}>{item.emoji}</Text>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.buy}>View Product</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.seller}>
          <Text style={styles.sellerText}>
            Become a Seller 🏪
          </Text>
          <Text style={styles.sellerSub}>
            Start selling your products on ShopNexa
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottom}>
        <Text>🏠 Home</Text>
        <Text>🔍 Search</Text>
        <Text>🛒 Cart</Text>
        <Text>👤 Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa'
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 16
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5b35c9'
  },
  location: {
    marginTop: 8,
    color: '#555'
  },
  search: {
    backgroundColor: '#ffffff',
    margin: 12,
    padding: 13,
    borderRadius: 12,
    fontSize: 15
  },
  banner: {
    backgroundColor: '#5b35c9',
    margin: 12,
    padding: 22,
    borderRadius: 16
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold'
  },
  bannerText: {
    color: '#ffffff',
    marginTop: 8,
    fontSize: 16
  },
  offer: {
    color: '#ffe66d',
    marginTop: 14,
    fontWeight: 'bold'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 14,
    color: '#222'
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  category: {
    backgroundColor: '#ffffff',
    padding: 13,
    borderRadius: 12,
    width: '45%',
    margin: 5
  },
  categoryText: {
    fontSize: 15,
    color: '#333'
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  product: {
    backgroundColor: '#ffffff',
    width: '45%',
    padding: 13,
    borderRadius: 14,
    marginVertical: 7
  },
  productEmoji: {
    fontSize: 48,
    textAlign: 'center',
    margin: 10
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333'
  },
  price: {
    fontSize: 17,
    color: '#5b35c9',
    fontWeight: 'bold',
    marginTop: 8
  },
  buy: {
    color: '#16834a',
    marginTop: 8
  },
  seller: {
    backgroundColor: '#e8e0ff',
    margin: 12,
    padding: 20,
    borderRadius: 14
  },
  sellerText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4c2bb5'
  },
  sellerSub: {
    marginTop: 8,
    color: '#444'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 14,
    backgroundColor: '#ffffff'
  }
});
                          
