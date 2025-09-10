import React from 'react';
import MenuCategory from './MenuCategory';

const Menu = () => {
  // Menu data organized by categories
  const menuData = {
    etler: {
      title: "ETLER",
      items: [
        {
          id: 1,
          name: "ET",
          nameEn: "MEAT, МЯСО",
          price: "2000 TL / KG",
          image: "/images/et.jpeg"
        },
        {
          id: 2,
          name: "LOKUM",
          nameEn: "TURKISH BONELESS, РАХАТ ЛУКУМ",
          price: "2500 TL / KG",
          image: "/images/lokum.jpeg"
        },
        {
          id: 3,
          name: "KÜŞLEME",
          nameEn: "TENDERLOIN, ВЫРЕЗКА",
          price: "2500 TL / KG",
          image: "/images/kusleme.jpeg"
        },
        {
          id: 4,
          name: "T-BONE STEAK",
          nameEn: "T-BONE STEAK, Т-БОН СТЕЙК",
          price: "2000 TL / KG",
          image: "/images/tbone.jpeg"
        },
        {
          id: 5,
          name: "DALLAS STEAKS",
          nameEn: "DALLAS STEAKS, ДАЛЛАС СТЕЙКИ",
          price: "2000 TL / KG",
          image: "/images/dallas.png"
        },
        {
          id: 6,
          name: "KÖFTE",
          nameEn: "MEATBALLS, ФРИКАДЕЛЬКИ",
          price: "1500 TL / KG",
          image: "/images/kofte.jpg"
        },
        {
          id: 7,
          name: "SAÇ KAVURMA",
          nameEn: "SAÇ KAVURMA, САЧ КАВУРМА",
          price: "450 TL",
          image: "/images/sackaburma.png"
        },
        {
          id: 8,
          name: "KURBAN KAVURMA",
          nameEn: "SACRIFICE KAVURMA, ЖЕРТВЕННАЯ КАВУРМА",
          price: "450 TL",
          image: "/images/kurbankavurma.png"
        },
        {
          id: 9,
          name: "SUCUK",
          nameEn: "TURKISH SAUSAGE, ТУРЕЦКАЯ КОЛБАСА",
          price: "1500 TL / KG",
          image: "/images/sucuk.jpg"
        },
        {
          id: 10,
          name: "TAVUK",
          nameEn: "CHICKEN, КУРИЦА",
          price: "1200 TL / KG",
          image: "/images/tavuk.jpg"
        },
        {
          id: 11,
          name: "ÇOCUK HAMBURGER",
          nameEn: "KIDS BURGER, ДЕТСКИЙ БУРГЕР",
          price: "400 TL",
          image: "/images/cocuk-hamburger.jpg"
        },
        {
          id: 12,
          name: "STEAK BURGER(ANTRİKOT)",
          nameEn: "STEAK BURGER (RIB EYE), СТЕЙК БУРГЕР (РИБАЙ)",
          price: "550 TL",
          image: "/images/steak-hamburger.jpg"
        },
        {
          id: 13,
          name: "CİĞER / BÖBREK",
          nameEn: "LIVER / KIDNEY, ПЕЧЕНЬ / ПОЧКИ",
          price: "2000 TL / KG",
          image: "/images/ciger.jpeg"
        }
      ]
    },
    salatalar: {
      title: "SALATALAR",
      items: [
        {
          id: 14,
          name: "MEVSİM SALATA",
          nameEn: "SEASONAL SALAD, СЕЗОННЫЙ САЛАТ",
          price: "TEK 150 TL / DOUBLE 250 TL",
          image: "/images/mevsımsalata.png"
        },
        {
          id: 15,
          name: "KAŞIK SALATA",
          nameEn: "SPOON SALAD, ЛОЖЕЧНЫЙ САЛАТ",
          price: "TEK 150 TL / DOUBLE 250 TL",
          image: "/images/kasiksalata_1.jpg"
        },
        {
          id: 16,
          name: "ÇOBAN SALATA",
          nameEn: "SHEPHERD SALAD, ПАСТУШИЙ САЛАТ",
          price: "TEK 150 TL / DOUBLE 250 TL",
          image: "/images/cobansalata.jpg"
        },
        {
          id: 17,
          name: "GAVURDAĞ SALATA",
          nameEn: "GAVURDAĞ SALAD, ГАВУРДАГ САЛАТ",
          price: "TEK 180 TL / DOUBLE 300 TL",
          image: "/images/gavurdag.jpg"
        }
      ]
    },
    tatlilar: {
      title: "TATLILAR",
      items: [
        {
          id: 18,
          name: "SÜTLAÇ",
          nameEn: "RICE PUDDING, РИСОВЫЙ ПУДИНГ",
          price: "200 TL",
          image: "/images/sutlac.jpg"
        },
        {
          id: 19,
          name: "HAVUÇ DİLİM BAKLAVA",
          nameEn: "CARROT SLICE BAKLAVA, МОРКОВНЫЙ ЛОМТИК БАКЛАВА",
          price: "250 TL",
          image: "/images/hbaklava.webp"
        },
        {
          id: 20,
          name: "KABAK",
          nameEn: "PUMPKIN DESSERT, ТЫКВЕННЫЙ ДЕСЕРТ",
          price: "250 TL",
          image: "/images/kabak-tatlisi.webp"
        }
      ]
    },
    icecekler: {
      title: "İÇECEKLER",
      items: [
        {
          id: 21,
          name: "KÜÇÜK SU",
          nameEn: "SMALL WATER, МАЛЕНЬКАЯ ВОДА",
          price: "25 TL",
          image: "/images/kerikli.webp"
        },
        {
          id: 22,
          name: "BÜYÜK SU",
          nameEn: "LARGE WATER, БОЛЬШАЯ ВОДА",
          price: "50 TL",
          image: "/images/kerikli.webp"
        },
        {
          id: 23,
          name: "KOLA",
          nameEn: "COLA, КОЛА",
          price: "70 TL",
          image: "/images/kkola.jpeg"
        },
        {
          id: 24,
          name: "ICE TEA",
          nameEn: "ICE TEA, ХОЛОДНЫЙ ЧАЙ",
          price: "70 TL",
          image: "/images/fusetea.webp"
        },
        {
          id: 25,
          name: "SPRİTE",
          nameEn: "SPRITE, СПРАЙТ",
          price: "70 TL",
          image: "/images/sprite.jpeg"
        },
        {
          id: 26,
          name: "FANTA",
          nameEn: "FANTA, ФАНТА",
          price: "70 TL",
          image: "/images/fanta.jpeg"
        },
        {
          id: 27,
          name: "AYRAN",
          nameEn: "AYRAN, АЙРАН",
          price: "60 TL",
          image: "/images/ayran.jpg"
        },
        {
          id: 28,
          name: "AÇIK AYRAN",
          nameEn: "OPEN AYRAN, ОТКРЫТЫЙ АЙРАН",
          price: "60 TL",
          image: "/images/acıkayran.jpg"
        },
        {
          id: 29,
          name: "ZAFER",
          nameEn: "ZAFER, ЗАФЕР",
          price: "60 TL",
          image: "/images/zafer2-removebg-preview.png"
        },
        {
          id: 30,
          name: "ŞALGAM",
          nameEn: "TURNIP JUICE, СОК РЕПЫ",
          price: "60 TL",
          image: "/images/salgam.jpg"
        },
        {
          id: 31,
          name: "SODA",
          nameEn: "SODA, СОДА",
          price: "50 TL",
          image: "/images/soda.jpg"
        }
      ]
    },
    mezeler: {
      title: "MEZELER",
      items: [
        {
          id: 32,
          name: "MEZELER",
          nameEn: "APPETIZERS, ЗАКУСКИ",
          price: "150 TL",
          image: "/images/meze.jpeg"
        },
        {
          id: 33,
          name: "PATATES",
          nameEn: "POTATOES, КАРТОФЕЛЬ",
          price: "TEK 200 TL / DOUBLE 300 TL",
          image: "/images/patates .png"
        }
      ]
    }
  };

  return (
    <div className="coffee_section">
      {Object.entries(menuData).map(([categoryKey, categoryData]) => (
        <MenuCategory
          key={categoryKey}
          title={categoryData.title}
          items={categoryData.items}
        />
      ))}
    </div>
  );
};

export default Menu;
