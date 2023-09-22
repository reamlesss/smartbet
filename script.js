

const czkMultiplier = 1;
  const eurMultiplier = 26; // 1 EUR = 26 Kč

  const levelRanges = [
    { min: 0, max: 220, multiplier: 2.50 },
    { min: 221, max: 620, multiplier: 4.50 },
    { min: 621, max: 99999999, multiplier: 20.50 }
  ];

  const memberships = [
    'https://www.tipsport.cz',
    'https://www.chance.cz',
    'https://www.fortuna.cz'
  ];

  const resultElement = document.getElementById('result');
  const membershipLink = document.getElementById('membership-link');
  const currencySelect = document.getElementById('currency');

  function toggleCurrency() {
    if (currencySelect.value === "czk") {
      resultElement.textContent = "";
    } else if (currencySelect.value === "eur") {
      resultElement.textContent = "";
    }
  }

  function formatNumberWithSpaces(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function calculate() {
    const capitalInput = document.getElementById('capital');
    const currency = currencySelect.value;

    const capital = parseFloat(capitalInput.value);

    if (isNaN(capital) || capital < 0) {
      resultElement.textContent = 'Zadejte platný kapitál.';
      membershipLink.style.display = 'none';
      return;
    }

    let level = 0;

    for (let i = 0; i < levelRanges.length; i++) {
      if (capital >= levelRanges[i].min && capital <= levelRanges[i].max) {
        level = i + 1;
        membershipLink.style.display = 'block';
        membershipLink.href = memberships[i];
        break;
      }
    }

    const range = levelRanges[level - 1];
    const multiplier = (currency === "czk") ? czkMultiplier : eurMultiplier;
    const profit = Math.round(capital * multiplier * range.multiplier);
    const formattedProfit = formatNumberWithSpaces(profit);

    const formattedCurrency = (currency === "czk") ? "Kč" : "€";
    resultElement.textContent = `Zisk: ${formattedProfit} ${formattedCurrency}`;
  }

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

