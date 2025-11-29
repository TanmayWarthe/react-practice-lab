import React from 'react'
import Cards from './components/Cards'


const App = () => {

  const laptops = [
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "Samsung Galaxy Book5 Thin & Light Laptop",  
    currentPrice: 939.63,          // ₹77,990  → ≈ $939.63  
    oldPrice: 1100,                // rough assumed old price  
    rating: 4.5,  
    soldCount: 722                 // reviews count as soldCount proxy  
  },
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "ASUS TUF Gaming F16 Gaming Laptop",  
    currentPrice: 843.85,          // ₹69,990 → ≈ $843.85  
    oldPrice: 1000,  
    rating: 4.6,  
    soldCount: 1100  
  },
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "Asus Vivobook 16 Intel Core Ultra 5 Laptop",  
    currentPrice: 830.00,          // ₹68,990 → ≈ $830  
    oldPrice: 1000,  
    rating: 3.8,  
    soldCount: 42  
  },
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "Acer Aspire Go 14 Intel Core Ultra 5 Laptop",  
    currentPrice: 638.43,          // ₹52,990 → ≈ $638.43  
    oldPrice: 800,  
    rating: 4.0,  
    soldCount: 150   // assumed (no review info)  
  },
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "ASUS Zenbook Duo Dual 14\" 3K OLED Touch Laptop",  
    currentPrice: 1699.99,          // actual US listing price :contentReference[oaicite:0]{index=0}  
    oldPrice: 2000,  
    rating: 5.0,                    // 5.0 / 5 from listing :contentReference[oaicite:1]{index=1}  
    soldCount: 4                    // 4 reviews in listing :contentReference[oaicite:2]{index=2}  
  },
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "ASUS Zenbook 14 OLED (UX3405)",  
    currentPrice: 698.95,          // example US-site price from Zenbook 14 listing :contentReference[oaicite:3]{index=3}  
    oldPrice: 850,  
    rating: 4.7,                   // assumed / estimated  
    soldCount: 220                // assumed  
  },
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "Apple MacBook Air 13 (2025, M4)",  
    currentPrice: 999.00,          // from a 2025 list around $999 :contentReference[oaicite:4]{index=4}  
    oldPrice: 1150,  
    rating: 4.8,  
    soldCount: 350                // assumed  
  },
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "Dell XPS 15 9530 Laptop",  
    currentPrice: 1249.02,         // from a best-selling list :contentReference[oaicite:5]{index=5}  
    oldPrice: 1500,  
    rating: 4.5,  
    soldCount: 88                // review-count as soldCount proxy :contentReference[oaicite:6]{index=6}  
  },
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "Acer Nitro V 15.6” Gaming Laptop",  
    currentPrice: 949.99,          // from a bestselling list :contentReference[oaicite:7]{index=7}  
    oldPrice: 1200,  
    rating: 4.4,  
    soldCount: 2260              // from list data :contentReference[oaicite:8]{index=8}  
  },
  {
    img: "https://m.media-amazon.com/images/I/81XKxZC94FL.jpg",  
    title: "HP Premium 15.6\" Business Laptop",  
    currentPrice: 501.47,          // from list price :contentReference[oaicite:9]{index=9}  
    oldPrice: 650,  
    rating: 4.2,  
    soldCount: 14                 // from list data :contentReference[oaicite:10]{index=10}  
  }
];

  return (
  <>

    {laptops.map((item, index) => (
      <div key={index}>
      <Cards laptops={item} />
      </div>
    ))}

  </>
  )
}

export default App
