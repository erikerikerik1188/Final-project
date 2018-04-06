class Krak extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        return super.yntrelVandak(ch);


        for (var i in this.directions) {

            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 9;
            if (this.energy > 0) {
                this.energy--;
            }
        }
    }

    hrdeh() {
        var norVandak = random(this.yntrelVandak(1));

        if (norVandak) {
            matrix[this.y][this.x] = 0
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[norVandak[1]][norVandak[0]] = 8;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    if (this.energy < 5) {
                        this.energy++;
                    }
                }

            }
        }
    }
    taratvel() {
        if (this.energy >= 1) {
            var a = this.yntrelVandak(0)
            var bazmanalvandakner = a;
            var norvandak = random(bazmanalvandakner);
            if (norvandak) {
                var x = norvandak[0]
                var y = norvandak[1];
                var norVirus = new Virus(x, y);
                VirusArr.push(norVirus);
                matrix[y][x] = 4;
                this.enregy = 4;
            }

        }
    }

    marel() {
        if (this.energy <= 2) {
            for (var i in VirusArr) {
                if (VirusArr[i].x == this.x && VirusArr[i].y == this.y) {
                    VirusArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    console.log("mahanal")
                    break;
                }
            }
        }
    }



}