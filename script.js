function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log("String's first character is uppercase");
    }else {
        console.log("String's first character is not uppercase");
    }
}
isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');
isFirstLetterUpperCase('NGUYEN van NAM');
isFirstLetterUpperCase('NGUYEN VAN NAM');
isFirstLetterUpperCase('nguyen van nam');
// A-Z tức là tập hợp tất cả các chữ hoa, nếu A-z thì kết quả hàm nào cũng true - code vô nghĩa//