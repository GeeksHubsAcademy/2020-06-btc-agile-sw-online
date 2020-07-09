import { add } from "../../../../../src/es/geekshubs/academy/jest/add";

function main() {
    logger()
    calculate()
}

fucntion logger(){
    console.log("Entry point")
}

function calculate() {
    let res = add(1,10)
    console.log("result: "+res)
}

main()


