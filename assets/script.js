document.addEventListener("DOMContentLoaded", (event) => {
    const stampDutyForm = document.getElementById("stampdutyform");
    const propertyPrice = document.getElementById("inlineFormInputGroup");
    const engOrNI = document.getElementById("inlineRadio1");
    const scotland = document.getElementById("inlineRadio2");
    const wales = document.getElementById("inlineRadio3");
    const firstTimeBuyer = document.getElementById("inlineCheckbox1");
    const stampDuty = document.getElementById("stampduty")

    stampDutyForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let propertyPriceValue = propertyPrice.value;
        if (engOrNI.checked) {
            englandOrNorthernIreland(propertyPriceValue, firstTimeBuyer);
        } else if (scotland.checked) {
            scotlandLBTT(propertyPriceValue, firstTimeBuyer);
        } else if (wales.checked) {
            walesLBTT(propertyPriceValue, firstTimeBuyer);
        }
    });

    function englandOrNorthernIreland(propertyPriceValue, firstTimeBuyer) {
        let sdlt;
        if (firstTimeBuyer.checked) {
            if (propertyPriceValue <= 300000) {
                sdlt = 0;
            } else if (propertyPriceValue >= 300001 && propertyPriceValue < 500000) {
                sdlt = (propertyPriceValue - 300000) * 0.05;
            } else {
                if (propertyPriceValue <= 125000) {
                    sdlt = 0;
                } else if (propertyPriceValue >= 125001 && propertyPriceValue <= 250000) {
                    sdlt = (propertyPriceValue - 125000) * 0.02;
                } else if (propertyPriceValue >= 250001 && propertyPriceValue <= 925000) {
                    sdlt = (250000 - 125000) * 0.02 + (propertyPriceValue - 250000) * 0.05;
                } else if (propertyPriceValue >= 925001 && propertyPriceValue <= 1500000) {
                    sdlt = (250000 - 125000) * 0.02 + (925000 - 250000) * 0.05 + (propertyPriceValue - 925000) * 0.1;
                } else if (propertyPriceValue > 1500000) {
                    sdlt = (250000 - 125000) * 0.02 + (925000 - 250000) * 0.05 + (1500000 - 925000) * 0.1 + (propertyPriceValue - 1500000) * 0.12;
                }
                console.log("Hello World");
            }
        } else {
            if (propertyPriceValue <= 125000) {
                sdlt = 0;
            } else if (propertyPriceValue >= 125001 && propertyPriceValue <= 250000) {
                sdlt = (propertyPriceValue - 125000) * 0.02;
            } else if (propertyPriceValue >= 250001 && propertyPriceValue <= 925000) {
                sdlt = (250000 - 125000) * 0.02 + (propertyPriceValue - 250000) * 0.05;
            } else if (propertyPriceValue >= 925001 && propertyPriceValue <= 1500000) {
                sdlt = (250000 - 125000) * 0.02 + (925000 - 250000) * 0.05 + (propertyPriceValue - 925000) * 0.1;
            } else if (propertyPriceValue > 1500000) {
                sdlt = (250000 - 125000) * 0.02 + (925000 - 250000) * 0.05 + (1500000 - 925000) * 0.1 + (propertyPriceValue - 1500000) * 0.12;
            }
        }
        stampDuty.textContent = `£ ${sdlt}`;
    }

    function scotlandLBTT(propertyPriceValue, firstTimeBuyer) {
        let lbtt;
        if (firstTimeBuyer.checked) {
            if (propertyPriceValue <= 175000) {
                lbtt = 0;
            } else if (propertyPriceValue >= 175000 && propertyPriceValue <= 250000) {
                lbtt = (propertyPriceValue - 175000) * 0.02;
            } else if (propertyPriceValue >= 250001 && propertyPriceValue <= 325000) {
                lbtt = (250000 - 175000) * 0.02 + (propertyPriceValue - 250000) * 0.05;
            } else if (propertyPriceValue >= 325001 && propertyPriceValue <= 750000) {
                lbtt = (250000 - 175000) * 0.02 + (325000 - 250000) * 0.05 + (propertyPriceValue - 325000) * 0.1;
            } else if (propertyPriceValue > 750000) {
                lbtt = (250000 - 175000) * 0.02 + (325000 - 250000) * 0.05 + (750000 - 325000) * 0.1 + (propertyPriceValue - 750000) * 0.12;
            }
        } else {
            if (propertyPriceValue <= 145000) {
                lbtt = 0;
            } else if (propertyPriceValue >= 145000 && propertyPriceValue <= 250000) {
                lbtt = (propertyPriceValue - 145000) * 0.02;
            } else if (propertyPriceValue >= 250001 && propertyPriceValue <= 325000) {
                lbtt = (250000 - 145000) * 0.02 + (propertyPriceValue - 250000) * 0.05;
            } else if (propertyPriceValue >= 325001 && propertyPriceValue <= 750000) {
                lbtt = (250000 - 145000) * 0.02 + (325000 - 250000) * 0.05 + (propertyPriceValue - 325000) * 0.1;
            } else if (propertyPriceValue > 750000) {
                lbtt = (250000 - 145000) * 0.02 + (325000 - 250000) * 0.05 + (750000 - 325000) * 0.1 + (propertyPriceValue - 750000) * 0.12;
            }
        }
        stampDuty.textContent = `£ ${lbtt}`;
    }
    function walesLBTT(propertyPriceValue, firstTimeBuyer) {
        let ltt;
        if (firstTimeBuyer.checked) {
            if (propertyPriceValue <= 225000) {
                ltt = 0;
            } else if (propertyPriceValue >= 225001 && propertyPriceValue <= 400000) {
                ltt = (propertyPriceValue - 225000) * 0.06;
            } else if (propertyPriceValue >= 400001 && propertyPriceValue <= 750000) {
                ltt = (400000 - 225000) * 0.06 + (750000-400000) * 0.075;
            } else if (propertyPriceValue >= 750001 && propertyPriceValue <= 1500000) {
                ltt = (400000 - 225000) * 0.6 + (750000-400000) * 0.075 + (propertyPriceValue - 750001) * 0.1;
            } else if (propertyPriceValue > 1500000) {
                ltt = (400000 - 225000) * 0.06 + (750000-400000) * 0.075 + (1500000 - 750000) * 0.1 + (propertyPriceValue - 1500000) * 0.12;
            }
        } else {
            if (propertyPriceValue <= 225000) {
                ltt = 0;
            } else if (propertyPriceValue >= 225001 && propertyPriceValue <= 400000) {
                ltt = (propertyPriceValue - 225000) * 0.06;
            } else if (propertyPriceValue >= 400001 && propertyPriceValue <= 750000) {
                ltt = (400000 - 225000) * 0.06 + (750000-400000) * 0.075;
            } else if (propertyPriceValue >= 750001 && propertyPriceValue <= 1500000) {
                ltt = (400000 - 225000) * 0.6 + (750000-400000) * 0.075 + (propertyPriceValue - 750001) * 0.1;
            } else if (propertyPriceValue > 1500000) {
                ltt = (400000 - 225000) * 0.06 + (750000-400000) * 0.075 + (1500000 - 750000) * 0.1 + (propertyPriceValue - 1500000) * 0.12;
            }
        }
        stampDuty.textContent = `£ ${ltt}`;
    }
});