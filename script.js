console.log("HI");
const divSection= document.getElementsByClassName("section");
console.log(divSection);

const coffeeMenu = [
  {
    category: "Lactose-free",
    items: [
      {
        img: "./img/N0.png",
        name: "Мигдалевий Флет",
        price: 85,
        description: "Подвійне еспресо з мигдалевим молоком."
      }
    ]
  },
  {
    category: "Without adequacy",
    items: [
      {
        img: "./img/Кофе.png",
        name: "К♾ФЕ",
        price: Infinity,
        description: "Бесканечнасть..."
      },
      {
        img: "https://start-guns.com.ua/image/cachewebp/catalog/Sur-TT-33/sur-tt-1-min-1000x1000.webp",
        name: "пістолет",
        price: 99999,
        description: "-"
      }
    ]
  },
  {
    category: "Coffee",
    items: [
      {
        img: "./img/N1.webp",
        name: "Капучино",
        price: 55,
        description: "Класичний кавовий напій з ніжною пінкою."
      }
    ]
  },
  {
    category: "Non-coffee",
    items: [
      {
        img: "./img/N2.webp",
        name: "Гарячий шоколад",
        price: 65,
        description: "Густий та солодкий, зігріє навіть у вічності."
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        img: "./img/N3.webp",
        name: "Сніданок \"Англійський\"",
        price: 120,
        description: "Яйця, бекон, квасоля та тости."
      },
      {
        img: "https://s7d1.scene7.com/is/image/mcdonalds/McD_CROISANT%20ALMOND:product-header-desktop?wid=829&hei=455&dpr=off",
        name: "Круасан з мигдалем",
        price: 65,
        description: "Свіжоспечена випічка за французьким рецептом."
      },
      {
        img: "https://i.pinimg.com/736x/2a/22/49/2a2249e1b6a8a04a788d205f5d15cbed.jpg",
        name: "Чізкейк \"Зеро\"",
        price: 90,
        description: "Легкий сирний десерт без зайвих калорій."
      }
    ]
  },
  {
    category: "Tea",
    items: [
      {
        img: "https://i.pinimg.com/736x/13/db/66/13db667e8dae0ef6e2d8a7e3b5ee0ad5.jpg",
        name: "Чай \"Гірська свіжість\"",
        price: 45,
        description: "Збір карпатських трав: м'ята, чебрець та меліса."
      },
      {
        img: "https://i.pinimg.com/736x/13/db/66/13db667e8dae0ef6e2d8a7e3b5ee0ad5.jpg",
        name: "Обліпиховий чай",
        price: 70,
        description: "Яскравий вітамінний напій з медом та імбиром."
      },
      {
        img: "https://i.pinimg.com/736x/13/db/66/13db667e8dae0ef6e2d8a7e3b5ee0ad5.jpg",
        name: "Чай \"Малина-М'ята\"",
        price: 65,
        description: "Домашнє малинове варення та свіжі листочки м'яти."
      }
    ]
  }
];

const names=[];

for (let i = 0; i < coffeeMenu.length; i++) {
    const section = coffeeMenu[i];
    //section.textContent="";
    
    for (let j = 0; j < section["items"].length; j++) {
        const item = section["items"][j];
        
        // Створюємо HTML-структуру з динамічними даними
        const htmlCard = `
            <div class="coffee">
                <img src="${item.img}">
                <div>
                    <div>
                        <h2>${item.name}</h2>
                        <p>${item.price === Infinity ? '<b class="infinite">∞</b>' : item.price} грн</p>
                    </div>
                    <p>${item.description}</p>
                </div>
                <button class="buttonCoffee">в карзіну</button>
            </div>
        `;
        
        // Додаємо картку в кінець поточної секції
        divSection[i].insertAdjacentHTML('beforeend', htmlCard);
        console.log(htmlCard);
        names.push(item.name);
    }
}
console.log(names);

let willy={};

for (let i = 0; i < names.length; i++) {
    const e = names[i];
    willy[e]=0;
}
console.log(willy);

const divWilly= document.getElementById("willy");
const buttonsCoffee= document.getElementsByClassName("buttonCoffee");

function updeitWilly() {
  divWilly.textContent="";
    names.forEach(e => {
            if (willy[e]) {
            const a= document.createElement("a");
            a.textContent=`${e} X${willy[e]} `;

            const bin= document.createElement("button");
            bin.textContent="-";
            bin.onclick= function(){
              minuswilly(e);
            }

            const bin2= document.createElement("button");
            bin2.innerHTML="&times;";
            bin2.onclick= function(){
              delwilly(e);
            }

            a.appendChild(bin);
            a.appendChild(bin2);
            divWilly.appendChild(a);
          }
        }
    )
}

function appwilly(name) {
    willy[name]++;
    updeitWilly();
}

function minuswilly(name) {
    willy[name]--;
    updeitWilly();
}

function delwilly(name) {
    willy[name]=0;
    updeitWilly();
}

for (let i = 0; i < buttonsCoffee.length; i++) {
    const e = buttonsCoffee[i];
    const name = names[i];
    e.onclick = function (){
        appwilly(name);
    }
}

document.getElementById("clear").onclick = function (){
    for (let i = 0; i < names.length; i++) {
        const e = names[i];
        willy[e]=0;
    }
    divWilly.textContent="";
}
