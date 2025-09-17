
        //function minta angka
        function mintaAngka(pesan) {
            let nilai
            do {
                nilai = prompt(pesan)
                nilai = nilai.trim()
            } while (!nilai || isNaN(nilai))
            return nilai
        }

        //memanggil function minta angka dan menyimpan nilai di variabel x y
        let x = mintaAngka("Masukkan angka pertama")
        let y = mintaAngka("Masukkan angka kedua")


        //mengisi variabel op dengan simbol perhitungan (+,-,*,/)
        let op
        do {
            op = prompt("Masukkan simbol (+,-,*,/)")
            op = op.trim()
        } while (!["+", "-", "*", "/"].includes(op))


        //function hitung kalkulator
        function hitungKalkulator(a, b, operator) {
            a = parseFloat(a)
            b = parseFloat(b)
            switch (operator) {
                case "+":
                    return a + b
                case "-":
                    return a - b
                case "*":
                    return a * b
                case "/":
                    return b !== 0 ? a / b : "Tidak bisa dibagi 0"
                default:
                    return "Operator tidak dikenal"
            }
        }

        //menyimpan hasil function
        let hasilKalkulator = hitungKalkulator(x, y, op)
        document.writeln(`Hasil dari ${x} ${op} ${y} = ${hasilKalkulator}`)
