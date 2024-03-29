// Методы для работы со строками:
// .trim() - удаляет пробелы в начале и в конце строки
// .toLowerCase()
// .toUpperCase()
// .indexOf() - поиск индекса, с которого начинается подстрока (При отсутствии возвращает -1)
// .slice(a, b) - с какого по какой индекс вернуть часть строки (b не включается)
//     если b не указано, то строка вырезается до конца
//     при указании в a и b отриательных значений отсчёт идёт с конца строки влево
// .substring(a, b) - аналогично .slice(), Но не поддерживает отрицательные значения и a не может быть больше b
// .substr(a, b) - аналогично .substring, но в качестве b указывается длина вырезаемого отрезка

//     Методы для работы с числами:
// Math.round(a) - округление а до ближайшего целого
// parceInt(a) - получение целого числа из строки
//     Пример: const test  = "12.2px";
//             console.log(parseInt(test));
//     Результат: 12
// parceFloat(a) - получение дробного числа из строки
// Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.
//     Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу Math.round