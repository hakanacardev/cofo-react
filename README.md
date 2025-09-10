# Etçi Kısmet - React Menu Application

Bu proje, Etçi Kısmet restoranının menü sayfasının React ile yeniden yazılmış halidir.

## Özellikler

- **Modern React Yapısı**: Functional components ve hooks kullanılarak oluşturulmuş
- **Responsive Tasarım**: Mobil ve desktop uyumlu
- **Kategori Bazlı Menü**: ETLER, SALATALAR, TATLILAR, İÇECEKLER, MEZELER
- **Orijinal Tasarım**: Orijinal HTML/CSS tasarımına sadık kalınmış
- **Bootstrap Entegrasyonu**: React Bootstrap kullanılarak responsive grid sistemi

## Menü Kategorileri

### ETLER
- ET, LOKUM, KÜŞLEME
- T-BONE STEAK, DALLAS STEAKS, KÖFTE
- SAÇ KAVURMA, KURBAN KAVURMA, SUCUK
- TAVUK, ÇOCUK HAMBURGER, STEAK BURGER
- CİĞER / BÖBREK

### SALATALAR
- MEVSİM SALATA, KAŞIK SALATA
- ÇOBAN SALATA, GAVURDAĞ SALATA

### TATLILAR
- SÜTLAÇ, HAVUÇ DİLİM BAKLAVA, KABAK

### İÇECEKLER
- Su çeşitleri (Küçük/Büyük)
- Gazlı içecekler (Kola, Sprite, Fanta)
- Ice Tea, Ayran çeşitleri
- Şalgam, Soda, Zafer

### MEZELER
- Mezeler, Patates

## Teknolojiler

- **React 18**
- **Bootstrap 5**
- **React Bootstrap**
- **CSS3** (Custom styling)

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm start

# Production build oluştur
npm run build
```

## Proje Yapısı

```
src/
├── components/
│   ├── Header.js          # Header/Navbar componenti
│   ├── Menu.js            # Ana menü componenti
│   ├── MenuCategory.js    # Kategori componenti
│   └── MenuItem.js        # Menü öğesi componenti
├── App.js                 # Ana uygulama
└── App.css               # Global stiller
```

## Özellikler

- **Responsive Design**: Tüm ekran boyutlarında uyumlu
- **Hover Efektleri**: Menü öğelerinde interaktif animasyonlar
- **Modern UI**: Gradient arka planlar ve gölge efektleri
- **Türkçe/İngilizce/Rusça**: Çok dilli menü açıklamaları

## Renk Paleti

- **Ana Renk**: #8B4513 (Saddle Brown)
- **İkincil Renk**: #A0522D (Sienna)
- **Arka Plan**: #f8f9fa (Light Gray)
- **Metin**: #111111 (Dark Gray)

## Geliştirici

[Hakan Acar](https://github.com/hakanacardev)

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.