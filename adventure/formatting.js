
var currentNumberFormat = "Mixed";

// const formatSignificant = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 });
const formatFraction = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 });
const formatScientific = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3, notation: "scientific" });
const formatEngineering = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3, notation: "engineering" });

const PREFIXES = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc",
    "TDc", "QaDc", "QiDc", "SxDc", "SpDc", "ODc", "NDc", "Vg", "UVg", "DVg", "TVg",
    "QaVg", "QiVg", "SxVg", "SpVg", "OVg", "NVg", "Tg", "UTg", "DTg", "TTg", "QaTg",
    "QiTg", "SxTg", "SpTg", "OTg", "NTg", "Qd", "UQd", "DQd", "TQd", "QaQd", "QiQd",
    "SxQd", "SpQd", "OQd", "NQd", "Qt", "UQt", "DQt", "TQt", "QaQt", "QiQt", "SxQt",
    "SpQt", "OQt", "NQt", "Se", "USe", "DSe", "TSe", "QaSe", "QiSe", "SxSe", "SpSe",
    "OSe", "NSe", "St", "USt", "DSt", "TSt", "QaSt", "QiSt", "SxSt", "SpSt", "OSt",
    "NSt", "Og", "UOg", "DOg", "TOg", "QaOg", "QiOg", "SxOg", "SpOg", "OOg", "NOg",
    "Nn", "UNn", "DNn", "TNn", "QaNn", "QiNn", "SxNn", "SpNn", "ONn", "NNn", "Ce"];

function formatNumIntl(num, formatType = 0) {
    // fortmatTpe: 0 = suffixes, 1 = scientific, 2 = engineering
    const absNum = Math.abs(num);
    if (num === 0) return "0";
    // For very small numbers, always use scientific notation.
    if (absNum < 0.001) return formatScientific.format(num).toLowerCase();
    else if (absNum < 1000 && (absNum > 0.001 || formatType == 0)) return formatFraction.format(num);
    else if (formatType == 1) return formatScientific.format(num).toLowerCase();
    else if (formatType == 2) return formatEngineering.format(num).toLowerCase();

    const exponent = Math.floor(Math.log10(absNum) / 3);
    const digits = formatFraction.format(num / 10 ** (3 * exponent));

    return digits + PREFIXES[exponent];
}

function formatNumber(num) {
    let formattedNum;

    switch(currentNumberFormat) {
        case 'Mixed':
            if(Math.abs(num) < 1e36){
                formattedNum = formatNumIntl(num, 0);
            } else {
                formattedNum = formatNumIntl(num, 1);
            }
            break;
        case 'Scientific':
            formattedNum = formatNumIntl(num, 1);
            break;
        case 'Suffixes':
            formattedNum = formatNumIntl(num, 0);
            break;
        case 'Engineering':
            formattedNum = formatNumIntl(num, 2);
            break;
    }

    // Return the formatted number, wrapped in a span tag with red color if the number is negative
    if (num < 0) {
        return `<span style="color: red;">${formattedNum}</span>`;
    } else {
        return formattedNum;
    }
}

function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}