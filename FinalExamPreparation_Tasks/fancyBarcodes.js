function fancyBarcodes(input) {
    let n = Number(input[0]);

    let pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

    for (let i = 1; i <= n; i++) {
        let line = input[i];
        let match = line.match(pattern);

        if (match) {
            let barcode = match.groups.barcode;
            let digits = barcode.match(/\d/g);
            let productGroup = digits ? digits.join("") : "00";
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcodes([
  "3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"
]);
