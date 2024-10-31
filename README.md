# Aprendendo Frontend com Angular do Zero a Algum lugar

## Comandos

- `npm init -y` # Serve para iniciar um projeto node.js no repo atual
- `npm install typescript -D` # Instalando o tyescript como dependency de desenvolvimento
- `npx tsc caminho_para_arquivo.ts` # Traduz o arquivo para um arquivo javascript com o mesmo nome
- `npx tsc --init` # Cria o arquivo de configs do Typescript
  - No arquivo tsconfig.json, existem diversas configs, mas recomendo habilitar essas
    - `"outDir": "./build"`
    - `"rootDir": "./src"`
- `npx tsc` # Le as regras do arquivo tsconfig.json caso ele exista e transpila todos os arquivos .ts dentro de rootDir para arquivos .js dentro de outDir
- `npm run start` # Executa o script start que está dentro do arquivo package.json
- `npm install ts-node-dev -D` # instalando uma dependência de desenvolvimento local que entende typescript, para evitar ficar compilando toda hora
- no package.json, adicione o seguinte script
  - `"start:dev": "ts-node-dev --respawn --transpile-only src/index.ts`
  - adicione `["./node_modules/@types"]` no arquivo `tsconfig.json`
  - descomente a linha `"experimentalDecorators": true`

## Dicas

Você pode criar scripts dentro do package.json, como o seguinte comando para facilitar a compitação e execução da sua aplicação

- `"start": "npx tsc && node build/index.js"`

### Tipos de Dados

```typescript
let online:boolean = true
let name:string = "Mauricio"
let age:number = 22
let height:number = 1.64
let nothing: null = null
let what: undefined = undefined
let not_return: void = ""
let return_any:any = ""
let object_maybe: object = {
    attribute: "value"
}

// Criando um tipo de dado
type Product = {
    name: string,
    value: number,
    units: number

}

let myProduct: Product = {
    name: "product name",
    value: 10,
    units: 2
}

// Criando um array

// option 1
let array: string[] = ["name", "value"]
//option 2
let array: Array<string> = ["name", "value"]

// Array mult types

let infos: (string | number)[] = ["name", "value", 10, 15.2]

// tuples

let boleto:[string, number, number] = ["water", 199.90, 12542424] // Tuplas restringem a quantidade de elementos e a ordem dos tipos, neste caso deve ser 3 elementos e seguir a ordem string, number e number

// array methods

array.map()
array.pop()
...
array.reduce()


// Datetime objects

let birthdate: Date = new Date("2022-12-01 05:00")
console.log(birthdate.toString())

```

### Functs

```typescript

// Func Tipada
function addNumber(x: number, y: number): number {

    return x + y;

}

// Func n Tipada
function helloWorld(name: str){
    return `Hello ${name}`;
}

// Multi Type
function CallToPhone(phone: number | string): number | string {
    return phone;
}


// async function

async function getDatabase(id: string): Promise<string>{
    return `item ${id}`;
}

```

### Interfaces and Classes

```typescript

// Use interfaces com classes apenas

interface robot {
    readonly id: number,
    name: string,
    sayHello():string
}

class Pessoa implements robot {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;   
    }
    sayHello(){
        return `Hello World! ${this.name}`;
    }
}

// modificadores de acesso

class User {
    private id: number; // Somente a instancia tem acesso a esse dado e so pode ser acesso por seus proprio metodos
    public name: string; // pode ser acessado de fora da classe
    protected level: number; // pode ser acessado dentro da classe ou por classes que herdem desta
    private boss?: string; // opcional, pois usa ? sinalizando que n precisa ser passadao

    constructor(id: number, name: string, level: number){
        this.id = id;
        this.name = name;
        this.level = level;
    }
    
}

// Herdando de User
class Admin extends User{
    acessKey: string;
    constructor(id: number, name: string, level: number, acess_key: string){
        super(id, name, level);
        this.acessKey = acess_key;
    }
}
```

### Generics

```typescript

// pode receber N arrays de qualquer tipo e os juntar em um unico array
function joinArrays(...arrays: any[]) : any[]{
    return new Array.concat(...arrays);
}

// Especificando o tipo dinamicamente

function joinArrays2<T>(...arrays: T[]) : T[]{
    return new Array.concat(...arrays);
}

const test = joinArrays2<string>(["foo","terraform"])

```

### Decorators

```typescript

function ShowName(target: any)
{
    console.log(target)
}

@ShowName // vai printar o nome da classe sempre que a aplicacao for ligada
class Employeer{}


function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version__: version};
    }
}

function minlenght(lenght: number){
    return (target: any, key: string) => {
        console.log(taget[key]);
        let _value = taget[key];

        const getter = () => _value

        const setter = (value: str) => {
            if (value.length < lenght){
                throw new Error(`Tamanho menor do que ${lenght}`)
            }else{
                _value = value
            }

        Object.defineProperty(target, key,{
            get:getter, 
            set:setter,
            }
        }
    };
}


@apiVersion("1.10")
class API {

    @minlenght(3)
    name: string

    constructor(name: string) {
        this.name = name;
    }
}

const api = new API();
console.log(api.__version);


```

## Ajuda

- [docs do TypeScript](https://www.typescriptlang.org/play/?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)
