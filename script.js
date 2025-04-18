function Compound_Amount(v, i, n) {
    // find F Given P
    const F = v * (1 + i) ** n;
    return `F/P = ${F.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
}

function Present_Worth(v, i, n) {
    // find P Given F
    const P = v / ((1 + i) ** n);
    return `P/F = ${P.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
}

function Compound_Amount_Series(v, i, n) {
    // find F Given A
    const F = v * (((1 + i) ** n) - 1) / i;
    return `F/A = ${F.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
}

function Sinking_Fund_Series(v, i, n) {
    // find A Given F
    const A = v * (i / ((1 + i) ** n - 1));
    return `A/F = ${A.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
}

function Present_Worth_Series(v, i, n) {
    // find P Given A
    const P = v * (((1 + i) ** n - 1) / (i * (1 + i) ** n));
    return `P/A = ${P.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
}

function Capital_Recovery_Series(v, i, n) {
    // find A Given P
    const A = v * ((i * (1 + i) ** n) / ((1 + i) ** n - 1));
    return `A/P = ${A.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
}

function Uniform_Gradient_Series(v, i, n) {
    // find A Given G
    const A = v * ((1 / i) - (n / ((1 + i) ** n - 1)));
    return `A/G = ${A.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
}

function Geometric_Gradient_Series(v, i, n, g) {
    // find P, given F/G
    const P = (v / (i - g)) * (1 - (((1 + g) ** n) / ((1 + i) ** n)));
    return `P/(F/G) = ${P.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
}

function calculateForce() {
    const i = parseFloat(document.getElementById('interest').value);
    const n = parseFloat(document.getElementById('period').value);
    const v = parseFloat(document.getElementById('value').value);
    const g = parseFloat(document.getElementById('g').value);

    if (isNaN(i) || isNaN(n)) {
        document.getElementById('result').innerText = 'กรุณากรอกค่าที่ถูกต้อง';
        return;
    }

    const interestRate = i / 100;
    const gRate = g / 100;
    const compoundText = Compound_Amount(v, interestRate, n);
    const presentText = Present_Worth(v, interestRate, n);
    const compoundSeriesText = Compound_Amount_Series(v, interestRate, n);
    const sinkingSeriesText = Sinking_Fund_Series(v, interestRate, n);
    const presentSeriesText = Present_Worth_Series(v, interestRate, n);
    const CapitalSeriesText = Capital_Recovery_Series(v, interestRate, n);
    const uniformGradientSeries = Uniform_Gradient_Series(v, interestRate, n);
    const geometricGradientSeries = Geometric_Gradient_Series(v, interestRate, n, gRate);

    document.getElementById('single_payment').innerText = `${compoundText}\n${presentText}`;
    document.getElementById('Series').innerText = `${compoundSeriesText}\n${sinkingSeriesText}\n${presentSeriesText}\n${CapitalSeriesText}\n${uniformGradientSeries}`;
    document.getElementById('Geo_gradient').innerText = `${geometricGradientSeries}`;
}
