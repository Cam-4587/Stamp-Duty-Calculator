document.addEventListener("DOMContentLoaded", (event) => {
    const stampDutyForm = document.getElementById("stampdutyform");
    const propertyPrice = document.getElementById("inlineFormInputGroup");
    const propertyLocation = document.getElementById("propertyLocation");
    const engOrNI= document.getElementById("inlineRadio1");
    const scotland = document.getElementById("inlineRadio2");
    const wales = document.getElementById("inlineRadio3");
    const firstTimeBuyer = document.getElementById("inlineCheckbox1");

    stampDutyForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let propertyPriceValue = propertyPrice.value;
        let sdlt;
        if (propertyPriceValue < 125000) {
            sdlt = 0;
        }
        else if (propertyPriceValue >= 125001 && propertyPriceValue <= 250000) {
            sdlt = (propertyPriceValue - 125000) * 0.02;
        }
        else if (propertyPriceValue >= 250001 && propertyPriceValue <= 925000) {
            sdlt = (250000 - 125000) * 0 + (propertyPriceValue - 250000) * 0.05;
        }
        else if (propertyPriceValue >= 925001 && propertyPriceValue <= 1500000) {
            sdlt = (250000 - 125000) * 0.02 + (925000 - 250000) * 0.075 (propertyPriceValue - 925000) * 0.1;
        }
        else if (propertyPriceValue > 1500000) {
            sdlt = (250000 - 125000) * 0.02 + + (925000 - 250000) * 0.075 + (1500000 - 925000) * 0.075 (propertyPriceValue - 1500000) * 1.2;
        }
        console.log(sdlt)
    },
    );
});

