DROP DATABASE IF EXISTS pokemon;
CREATE DATABASE pokemon;
USE pokemon;

CREATE TABLE pokemonStats (
    id INTEGER (10) NOT NULL,
    pokeName VARCHAR (100) NOT NULL,
    Type_1 VARCHAR (100) NOT NULL,
    Type_2 VARCHAR (100),
    Total INTEGER (10) NOT NULL,
    HP INTEGER (10) NOT NULL,
    Attack INTEGER (10) NOT NULL,
    Defense INTEGER (10) NOT NULL,
    Special_Atk INTEGER (10) NOT NULL,
    Special_Def INTEGER (10) NOT NULL,
    Speed INTEGER (10) NOT NULL,
    Generation INTEGER (10) NOT NULL,
    Legendary BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE images (
    id INTEGER (10) NOT NULL,
    Img VARCHAR (100) NOT NULL,
    PRIMARY KEY (id)
);
