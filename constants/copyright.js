export const intro = {
  logoOxota: {
    imgAttr: {
      src: "/images/intro/ohotaLogo.svg",
      alt: "Ohota Logo",
    },
  },

  lotoLogo: {
    imgAttr: {
      src: "/images/100lotoLogo.svg",
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
              },
            ],
          },
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
            },
          ],
        },
      },
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
            },
          ],
        },
      },
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
            },
          ],
        },
      },
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
              srcSet: "/images/winner/cardMobile4.png",
              type: "image/png",
              media: "(max-width: 1024px)",
            },
          ],
        },
      },
    },
  ],
  arrow: {
    imgAttr: {
      src: "/images/winner/arrow.svg",
      alt: "arrow",
    },
  },
  button: {
    text: "хочу выиграть",
    href: "#",
  },
};

export const app = {
  title: "Начни охоту в&nbsp;приложении &laquo;Столото&raquo;",
  subTitle: "Пусть трофеи всегда будут под рукой",
  cards: [
    {
      title: "Забери своё",
      description:
        "Выигрыш до&nbsp;600&nbsp;000&nbsp;₽ можно получить онлайн. Если охота принесла тебе более крупную добычу, приезжай на&nbsp;оформление в&nbsp;лотерейный центр &laquo;Столото&raquo; или подтверди свою личность в&nbsp;фирменной точке продаж &laquo;Столото&raquo; в&nbsp;своём городе и&nbsp;отправь документы по&nbsp;почте",
      icon: {
        imgAttr: {
          src: "/images/app/card1.png",
          alt: "card1",
        },
      },
    },
    {
      title: "Действуй быстро",
      description:
        "Очереди и&nbsp;походы в&nbsp;магазин не&nbsp;для тебя&nbsp;&mdash; покупай билеты где и&nbsp;когда удобно. Понадобятся только электронная почта и&nbsp;номер телефона при регистрации.",
      icon: {
        imgAttr: {
          src: "/images/app/card2.png",
          alt: "card2",
        },
      },
    },
    {
      title: "Твоя территория",
      description:
        "Все билеты будут храниться в&nbsp;твоём личном кабинете. Здесь&nbsp;же можно проверить результаты охоты и&nbsp;вывести трофеи до&nbsp;600&nbsp;000&nbsp;₽ на&nbsp;карту.",
      icon: {
        imgAttr: {
          src: "/images/app/card3.png",
          alt: "card3",
        },
      },
    },
    {
      title: "Будь уверен",
      description:
        "&laquo;Охота&raquo;&nbsp;&mdash; это государственная лотерея. Организатор&nbsp;&mdash; Минспорт России, а&nbsp;контролирует проведение игры ФНС России.",
      icon: {
        imgAttr: {
          src: "/images/app/card4.png",
          alt: "card4",
        },
      },
    },
  ],
  link: {
    label: "Купить билет можно в&nbsp;любой из&nbsp;точек продаж",
    href: "#",
    icon: {
      imgAttr: {
        src: "/images/app/linkIcon.png",
        alt: "linkIcon",
      },
    },
  },
};

export const modal = {
  title: "Где купить билет",
  subTitle: "Найди ближайший магазин &laquo;Столото&raquo;",
  addresses: [
    "<p>Пермский край, Пермь г, Адмирала Ушакова ул, 55</p>",
    "<p>Пермский край, Пермь г, Архитектора Свиязева ул, 30</p>",
    "<p>Пермский край, Пермь г, Белинского ул, 47</p>",
    "<p>Пермский край, Пермь г, Адмирала Ушакова ул, 55</p>",
    "<p>Пермский край, Пермь г, Архитектора Свиязева ул, 30</p>",
    "<p>Пермский край, Пермь г, Белинского ул, 47</p>",
    "<p>Пермский край, Пермь г, Вильямса ул, 49а</p>",
    "<p>Пермский край, Пермь г, Героев Хасана ул, 105, а</p>",
    "<p>Пермский край, Пермь г, Ивана Франко ул, 38</p>",
    "<p>Пермский край, Пермь г, Крупской ул, 42</p>",
    "<p>Пермский край, Пермь г, Куйбышева ул, 36</p>",
    "<p>Пермский край, Пермь г, Ласьвинская ул, 37, 1</p>",
    "<p>Пермский край, Пермь г, Ленина ул, 76</p>",
    "<p>Пермский край, Пермь г, Ленина ул, 76</p>",
  ],
  input: {
    type: "text",
    placeholder: "Введи адрес",
  }
}

export const promo = {
  title: "ПРОВЕРЬ СВОЙ ИНСТИНКТ",
  video: {
    sources: [
      {
        src: "/video/video.mp4",
        type: "video/mp4",
      },
    ],
  },
  button: {
    text: "Играть",
    href: "#",
  },
};

export const footer = {
  news: "Будь в&nbsp;курсе всех новостей",

  downloadText: {
    desk: "Наведи камеру на&nbsp;QR-код или нажми на&nbsp;кнопку, чтобы скачать мобильное приложение &laquo;Столото&raquo;",
    mob: {
      title: "Скачай приложение &laquo;Столото&raquo;",
      subTitle: "Наведи камеру на&nbsp;QR-код или нажми на&nbsp;кнопку",
    },
  },

  organizators: {
    icon: {
      imgAttr: {
        src: "/images/footer/org.png",
        alt: "org",
      },
    },
    text: "Организатор лотереи&nbsp;&mdash; Министерство спорта&nbsp;РФ",
  },

  qr: {
    imgAttr: {
      src: "/images/footer/qr.svg",
      alt: "qr",
    },
  },

  logo100Loto: {
    imgAttr: {
      src: "/images/100LotoLogo.svg",
      alt: "logo100Loto",
    },
  },

  download: {
    imgAttr: {
      src: "/images/footer/download.png",
      alt: "download",
    },
  },

  socialMedia: [
    {
      imgAttr: {
        src: "/images/footer/vk.svg",
        alt: "vk",
      },
    },
    {
      imgAttr: {
        src: "/images/footer/ok.svg",
        alt: "ok",
      },
    },
    {
      imgAttr: {
        src: "/images/footer/rutube.svg",
        alt: "rutube",
      },
    },
    {
      imgAttr: {
        src: "/images/footer/tg.svg",
        alt: "tg",
      },
    },
  ],
  copyright:
    "Фраза &laquo;Распределим 200&nbsp;000&nbsp;000&nbsp;₽&raquo; означает, что в&nbsp;тираже &laquo;ВГЛ 2&nbsp;Спорт&raquo;, алгоритм определения выигрышей &#8470;&nbsp;3, 14.11.2024&nbsp;в 21:55 мск между победителями будет распределена указанная сумма, если в&nbsp;тиражах с&nbsp;01.11.2024 по&nbsp;21:55 мск 14.11.2024 победителей в&nbsp;1-й категории. Заявленный размер суперприза (&laquo;Главный трофей от&nbsp;20&nbsp;000&nbsp;000&nbsp;₽&raquo;) является минимально гарантированной суммой, распределяемой среди победителей в&nbsp;соответствующей категории выигрышей. &laquo;Выигрывает каждый 3-й билет!&raquo; указывает на&nbsp;вероятность выигрыша в&nbsp;лотерее &laquo;ВГЛ 2&nbsp;Спорт&raquo;, алгоритм определения выигрышей &#8470;&nbsp;3, рассчитанную математическим путём и&nbsp;равную 1&nbsp;к 3,36. Фраза &laquo;Добыча будет больше&raquo; означает, что в&nbsp;случае распределения части накопленного суперприза призовой фонд каждой из&nbsp;категорий выигрышей, за&nbsp;исключением первой, будет увеличен за&nbsp;счет средств распределяемой суммы. Количество выигрышных билетов приведено по&nbsp;состоянию на&nbsp;25.09.2024. Фраза &laquo;каждые 15&nbsp;минут&raquo; означает проведение розыгрыша призового фонда тиража лотереи &laquo;ВГЛ 2&nbsp;Спорт&raquo;, алгоритм определения выигрышей &#8470;&nbsp;3, каждые 15&nbsp;минут, кроме технических перерывов. Время проведения технических перерывов&nbsp;&mdash; на&nbsp;stoloto.ru. Фраза &laquo;повышенный призовой фонд&raquo; указывает на&nbsp;то, что размер призового фонда лотереи &laquo;ВГЛ 2&nbsp;Спорт&raquo; выше минимально допустимого в&nbsp;соответствии с&nbsp;требованиями законодательства России размера призового фонда лотереи и&nbsp;составляет&nbsp;60% выручки от&nbsp;проведения лотереи. Фраза &laquo;Выигрывает каждый 3-й билет!&raquo; указывает на&nbsp;вероятность выигрыша в&nbsp;лотерее &laquo;ВГЛ 2&nbsp;Спорт&raquo;, алгоритм определения выигрышей &#8470;&nbsp;3, рассчитанную математическим путём и&nbsp;равную 1&nbsp;к 3,36. Фраза &laquo;средний выигрыш в&nbsp;3&nbsp;раза больше&raquo; указывает на&nbsp;статистически собранные данные выигрышей согласно аналитике по&nbsp;данным 07.12.2023&nbsp;&mdash; 09.06.2024. Срок проведения лотереи&nbsp;&mdash; до&nbsp;31.12.2029. Информацию об&nbsp;организаторе лотереи, о&nbsp;правилах ее&nbsp;проведения, призовом фонде лотереи, количестве призов или выигрышей, о&nbsp;сроках, месте и&nbsp;порядке получения призов или выигрышей можно узнать на&nbsp;сайте stoloto.ru.",

  note: "&copy;&nbsp;2022&nbsp;АО &laquo;Технологическая Компания &laquo;Центр&raquo;"
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
