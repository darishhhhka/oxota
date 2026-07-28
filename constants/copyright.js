export const intro = {
  logoOxota: {
    imgAttr: {
      src: "/images/intro/ohotaLogo.svg",
      alt: "Ohota Logo",
    },
  },

  lotoLogo: {
    imgAttr: {
      src: "/images/intro/100lotoLogo.svg",
      alt: "Loto Logo",
    },
  },

  win: {
    text: "ВЫИГРЫВАЕТ<br/>",
    textBold: "КАЖДЫЙ<br/> 3-Й БИЛЕТ!",
  },

  bgImage: {
    imgAttr: {
      src: "/images/intro/bg.png",
      alt: "bg",
    },
    sourceData: {
      sources: [
        {
          srcSet: "/images/intro/bgMobile.png",
          type: "image/png",
          media: "(max-width: 1024px)",
        },
      ],
    },
  },

  menImg: {
    imgAttr: {
      src: "/images/intro/men.png",
      alt: "Men",
    },
    sourceData: {
      sources: [
        {
          srcSet: "/images/intro/menMobile.png",
          type: "image/png",
          media: "(max-width: 1024px)",
        },
      ],
    },
  },

  title: {
    text: "Забери свою добычу",
    number: "ХХХ ХХХХ&nbsp;₽",
  },
  subtitle: {
    text: "пришло твоё время!",
  },

  button: {
    text: "Играть",
    href: "#",
    icon: {
      imgAttr: {
        src: "/images/intro/lightning.svg",
        alt: "lightning",
      },
    },
  },
};

export const when = {
  when: {
    text: "14&nbsp;НОЯБРЯ 21:55&nbsp;МСК",
  },

  prize: {
    text: "РАСПРЕДЕЛИМ",
    money: "200&nbsp;000&nbsp;000&nbsp;₽",
  },

  subtext: {
    text: "ДОБЫЧА БУДЕТ БОЛЬШЕ",
  },

  img: {
    imgAttr: {
      src: "/images/when/chips.png",
      alt: "Chips",
    },
    sourceData: {
      sources: [
        {
          srcSet: "/images/when/chipsMobile.png",
          type: "image/png",
          media: "(max-width: 1024px)",
        },
      ],
    },
  },

  button: {
    text: "выйти на&nbsp;охоту",
    href: "#",
    icon: {
      imgAttr: {
        src: "/images/when/lightningRed.svg",
        alt: "lightningRed",
      },
    },
  },
};

export const about = {
  cards: [
    {
      title: "ПРАВИЛА &laquo;ОХОТЫ&raquo;",
      icon: {
        imgAttr: {
          src: "/images/about/card1.svg",
          alt: "card1",
        },
      },
      content: {
        title: "Проверь свой инстинкт прямо сейчас&nbsp;&mdash; правила просты!",
        list: [
          {
            text: "<p>Отметь числа в&nbsp;билете: по&nbsp;4&nbsp;в каждом из&nbsp;двух полей</p>",
          },
          {
            text: "<p>Дождись розыгрыша&nbsp;&mdash; они проходят каждые 15&nbsp;минут</p>",
          },
          {
            text: "<p>Забери свою добычу или испытай удачу снова</p>",
          },
        ],

        bgPhone: {
          imgAttr: {
            src: "/images/about/phone.png",
            alt: "Phone",
          },
        },
      },
    },
    {
      title: "Целься в&nbsp;главный трофей",
      icon: {
        imgAttr: {
          src: "/images/about/card2.svg",
          alt: "card2",
        },
      },
      content: {
        title: "Главный трофей от&nbsp;20&nbsp;000&nbsp;000&nbsp;₽",
        description:
          "Пора проверить свой инстинкт и&nbsp;чутьё охотника. Целься в&nbsp;числа и&nbsp;выигрывай миллионы!",
        subtext: {
          title: "Больше чисел&nbsp;&mdash; больше шансов!",
          description: "С&nbsp;развернутой ставкой средний выигрыш в&nbsp;3&nbsp;раза больше*",
        },
        note: "<p>* (по&nbsp;данным 07.12.2023&nbsp;&mdash; 09.06.2024)</p>",

        bgCrown: {
          imgAttr: {
            src: "/images/about/crown.png",
            alt: "crowm",
          },
          sourceData: {
            sources: [
              {
                srcSet: "/images/about/crownMobile.png",
                type: "image/png",
                media: "(max-width: 1024px)",
              },
            ],
          },
        },

        bgCup: {
          imgAttr: {
            src: "/images/about/cup.png",
            alt: "cup",
          },
          sourceData: {
            sources: [
              {
                srcSet: "/images/about/cupMobile.png",
                type: "image/png",
                media: "(max-width: 1024px)",
              },
            ],
          },
        },

        icon: {
          imgAttr: {
            src: "/images/about/icon.svg",
            alt: "icon",
          },
        },
      },
    },
    {
      title: "Выводи трофеи до&nbsp;600&nbsp;000&nbsp;₽",
      icon: {
        imgAttr: {
          src: "/images/about/card3.svg",
          alt: "card3",
        },
      },
      content: {
        textLight:
          "В&nbsp;личном кабинете на&nbsp;сайте и&nbsp;в&nbsp;приложении &laquo;Столото&raquo; можно вывести выигрыши до&nbsp;600&nbsp;000&nbsp;₽",
        textBold: "Регистрируйся прямо сейчас, если ещё не&nbsp;сделал этого",
      },
    },
    {
      title: "ВСЁ о&nbsp;добыче",
      icon: {
        imgAttr: {
          src: "/images/about/card4.svg",
          alt: "card4",
        },
      },
      content: {
        features: [
          {
            text: "<p>Повышенный призовой фонд</p>",
          },
          {
            text: "<p>Крупные выигрыши</p>",
          },
          {
            text: "<p>Выигрывает каждый 3-й билет</p>",
          },
          {
            text: "<p>Билеты от&nbsp;150&nbsp;₽</p>",
          },
        ],
        tableImg: {
          imgAttr: {
            src: "/images/about/table.png",
          },
          sourceData: {
            sources: [
              {
                srcSet: "/images/about/tableMobile.png",
                type: "image/png",
                media: "(max-width: 1024px)",
              }
            ]
          }
        },
        table: {
          rows: [
            {
              text: "<p>Выйгрыш в&nbsp;руб.</p>",
            },
            {
              text: "<p>Суперприз</p>",
            },
            {
              text: "<p>150&nbsp;000</p>",
            },
            {
              text: "<p>15&nbsp;000</p>",
            },
            {
              text: "<p>4&nbsp;500</p>",
            },
            {
              text: "<p>6&nbsp;000</p>",
            },
            {
              text: "<p>3&nbsp;600</p>",
            },
            {
              text: "<p>1&nbsp;500</p>",
            },
            {
              text: "<p>900</p>",
            },
            {
              text: "<p>750</p>",
            },
            {
              text: "<p>450</p>",
            },
            {
              text: "<p>150</p>",
            },
            {
              text: "<p>150</p>",
            },
          ],
        },
      },
    },
  ],
  button: {
    text: "на охоту!",
    href: "#",
    icon: {
      imgAttr: {
        src: "/images/when/lightningRed.svg",
        alt: "lightningRed",
      },
    },
  },
};

export const winner = {
  title: "Выигрывай по-крупному",
  cards: [
    {
      title: "Общая сумма выигрышей:",
      subTitle: "2&nbsp;500&nbsp;000&nbsp;000&nbsp;₽",
      note: "(по&nbsp;данным 07.12.23&nbsp;&mdash; 18.10.24)",
      bgImg: {
        imgAttr: {
          src: "/images/winner/card1.png",
          alt: "card1",
        },
        sourceData: {
          sources: [
            {
              srcSet: "/images/winner/cardMobile1.png",
              type: "image/png",
              media: "(max-width: 1024px)",
            }
          ]
        }
      }
    },
    {
      title: "Количество выигрышных билетов:",
      subTitle: "7&nbsp;526&nbsp;220&nbsp;₽",
      note: "(по&nbsp;данным 07.12.23&nbsp;&mdash; 25.09.24)",
      bgImg: {
        imgAttr: {
          src: "/images/winner/card2.png",
          alt: "card2",
        },
        sourceData: {
          sources: [
            {
              srcSet: "/images/winner/cardMobile2.png",
              type: "image/png",
              media: "(max-width: 1024px)",
            }
          ]
        }
      }
    },
    {
      title: "Ежедневная добыча охотников",
      subTitle: "более 17&nbsp;000&nbsp;000&nbsp;₽",
      note: "(по&nbsp;данным 01.09.24&nbsp;&mdash; 29.09.24)",
      bgImg: {
        imgAttr: {
          src: "/images/winner/card3.png",
          alt: "card3",
        },
        sourceData: {
          sources: [
            {
              srcSet: "/images/winner/cardMobile3.png",
              type: "image/png",
              media: "(max-width: 1024px)",
            }
          ]
        }
      }
    },
    {
      title: "Были в&nbsp;шаге от&nbsp;главного трофея:",
      subTitle: "более 145 человек",
      note: "(по&nbsp;данным 07.12.23-25.09.24)",
      bgImg: {
        imgAttr: {
          src: "/images/winner/card4.png",
          alt: "card4",
        },
        sourceData: {
          sources: [
            {
              srcSet: "/images/winner/cardMobile3.png",
              type: "image/png",
              media: "(max-width: 1024px)",
            }
          ]
        }
      }
    }
  ],
  button: {
    text: "хочу выиграть",
    href: "#",
  }
};

export const lightning = {
  red: {
    imgAttr: {
      src: "/images/lightningRed.svg",
      alt: "lightningRed",
    },
  },
  white: {
    imgAttr: {
      src: "/images/lightning.svg",
      alt: "lightning",
    },
  },
};

export const footerContent = {};
