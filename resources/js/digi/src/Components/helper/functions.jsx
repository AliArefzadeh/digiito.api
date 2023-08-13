export const textSplitter = (value) => {
  const textArray = value.split(" ");
  let result = "";
  if (textArray.length > 10) {
    for (let i = 0; i < 10; i++) {
      if (i === 9) result += `${textArray[i]} ...`;
      else result += `${textArray[i]} `;
    }
    return result;
  } else {
    for (let i = 0; i !== textArray.length; i++) {
      if (i === textArray.length) result += `${textArray[i]}`;
      else result += `${textArray[i]} `;
    }
    return result;
  }
};

export const toInteger = (value) => {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const n = parseInt(value).toLocaleString();
  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
};

const setFilters = (items, label, newProducts) => {
  if (label === "brands") {
    if (items.length !== 0) {
      let temp = [];
      items.forEach((feature) => {
        const a = newProducts.filter((item) => item.brand === feature);
        a.map((i) => temp.push(i));
      });
      newProducts = temp;
    }
  } else if (label === "colors") {
    if (items.length !== 0) {
      let temp = [];
      items.forEach((feature) => {
        const a = newProducts.filter((item) => item.colors.includes(feature));
        a.forEach((i) => {
          if (!temp.find((item) => item.id === i.id)) {
            temp.push(i);
          }
        });
      });
      newProducts = temp;
    }
  } else {
    newProducts = newProducts.filter((product) => product.price >= items.min * 1000000 && product.price <= items.max * 1000000);
  }
  return newProducts;
};

export const searchFilter = (state, products) => {
  const { input, category, colors, brands, priceRange } = state;
  let newProducts = products;
  switch (category) {
    case "all":
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);
      newProducts = setFilters(priceRange, "price", newProducts);
      if (input !== "") {
        newProducts = newProducts.filter((item) => item.model.includes(input));
      }
      break;

    case "mobile":
      newProducts = products.filter((item) => item.model.includes("موبایل"));
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);
      newProducts = setFilters(priceRange, "price", newProducts);
      if (input !== "") {
        newProducts = newProducts.filter((item) => item.model.includes(input));
      }
      break;

    case "laptop":
      newProducts = products.filter((item) => item.model.includes("لپ تاپ"));
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);
      newProducts = setFilters(priceRange, "price", newProducts);
      if (input !== "") {
        newProducts = newProducts.filter((item) => item.model.includes(input));
      }
      break;

    case "watch":
      newProducts = products.filter((item) => item.model.includes("ساعت"));
      newProducts = setFilters(brands, "brands", newProducts);
      newProducts = setFilters(colors, "colors", newProducts);
      newProducts = setFilters(priceRange, "price", newProducts);
      if (input !== "") {
        newProducts = newProducts.filter((item) => item.model.includes(input));
      }
      break;

    default:
      break;
  }

  return newProducts;
};

export const colorExtraction = (item) => {
  const result = item.split("bg-");
  return result[1];
};

export const enTofn = (price) => {
  return new Number(price).toLocaleString("fa-ir");
};

export const ifExist = (list, product) => {
  const index = list.findIndex((i) => i.id === product.id);
  const color = list.findIndex((i) => i.color === product.color);

  if (index !== -1) {
    if (color === -1) return false;
    else return true;
  } else return false;
};

export const colorConverter = (item) => {
  let color = "";
  if (item === "سفید") color = "bg-stone-100";
  else if (item === "نقره ای") color = "bg-zinc-200";
  else if (item === "خاکستری") color = "bg-gray-400";
  else if (item === "قرمز") color = "bg-red-400";
  else if (item === "سبز") color = "bg-green-400";
  return color;
};
