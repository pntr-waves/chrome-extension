function Slider(value, { hour: type }) {
    this.dozenValue = parseInt(value / 10);
    this.unitValue = value % 10;
    this.initClock = function () {
        var dozensValueElement = document.createElement("div");
        dozensValueElement.className = "Slider";
        var unitsValueElement = document.createElement("div");
        unitsValueElement.className = "Slider";
        var dozens = this.getDozens();
        for (let i = 0; i <= 9; i++) {
            var unit = document.createElement("div");

            if (i <= dozens) {
                var dozen = document.createElement("div");
                dozen.innerHTML = i;
                dozen.className = "Item";
                dozensValueElement.appendChild(dozen);
            }

            unit.innerHTML = i;
            unit.className = "Item";
            unitsValueElement.appendChild(unit);
        }

        var unitElement = document.createElement("div");
        unitElement.className = "Unit";
        unitElement.append(dozensValueElement, unitsValueElement);

        document.getElementById("clock").append(unitElement);
    }

    this.getDozens = function () {
        var dozens = type ? 2 : 5;
        return dozens;
    }

    this.changeHighlightItem = function (newValue, indexUnit) {
        this.dozenValue = parseInt(newValue / 10);
        this.unitValue = newValue % 10;

        var unitElement = document.getElementsByClassName("Unit")[indexUnit];
        var listDozensItemElement = unitElement.getElementsByClassName("Slider")[0].getElementsByClassName("Item");
        var listUnitItemElement = unitElement.getElementsByClassName("Slider")[1].getElementsByClassName("Item");

        
        unitElement.getElementsByClassName("Slider")[0].style.transform = `translateY(${this.dozenValue * -2}em)`;
        unitElement.getElementsByClassName("Slider")[1].style.transform = `translateY(${this.unitValue * -2}em)`;


        for (let i = 0; i <= 9; i++) {
            if (i === this.dozenValue) {
                if (!listDozensItemElement[i].classList.contains("Zoom")) {
                    listDozensItemElement[i].classList.add("Zoom");
                }
            } else {
                if (listDozensItemElement[i] && listDozensItemElement[i].classList.contains("Zoom")) {
                    listDozensItemElement[i].classList.remove("Zoom");
                }
            }

            if (i === this.unitValue) {
                if (!listUnitItemElement[i].classList.contains("Zoom")) {
                    listUnitItemElement[i].classList.add("Zoom");
                }
            } else {
                if (listUnitItemElement[i] && listUnitItemElement[i].classList.contains("Zoom")) {
                    listUnitItemElement[i].classList.remove("Zoom");
                }
            }
        }
    }
}