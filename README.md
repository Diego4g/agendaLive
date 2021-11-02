# BackEnd - Agenda Live

# Sobre

Com esta aplicação o usuário é capaz de cadastrar uma live com nome, link, nome do canal, horário e data. 

A aplicação utiliza o **PostgreSQL** para armazenar as informações, portanto, para executa-la em sua máquina é necessário que voce possua o PosgtgreSQL instalado. A seguir será descrito a alteração que terá que ser feita para conectar a aplicação ao seu banco de dados local.

## Rotas da aplicação

A seguir segue uma breve descrição das rotas da aplicação:

### POST `/live`

Esta rota é responsável por criar uma live. Para isso deverá ser passado um objeto do tipo *.json* com os seguintes atributos exemplificados abaixo:

```
{
	"nameLive": "Primeiros passos no nodejs",
	"nameChannel":"Diego Ferreira",
	"urlLive":"app.diego4g",
	"dateLive":"02-11-2022",
	"hourLive":"20:00"
}

```

### GET `/live` (em construção)

Quando esta rota é chamada, ela retorna todas as lives cadastradas no banco de dados.

## Configurando banco de dados

Primeiramente crie um banco de dados utilizando o **PostgreSQL**

Para conectar com seu banco de dados local acesse o arquivo `ornconfig.json` e altere as propriedades `username` e `password` para o *username* e *password*, respectivamente, do seu PostgreSQL.